import {authApi} from "../components/api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return {...state, ...action.data};
        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
});

export const loginTC = () => async (dispatch) => {
    let data = await authApi.auth();
    if (data.resultCode !== 0) return;
    let {id, login, email} = data.data;
    dispatch(setAuthUserData(id, email, login, true));
}

export const tryLogin = (user) => {

    return async (dispatch) => {
        let data = await authApi.logIn(user)
        if (data.resultCode === 0) {
            dispatch(loginTC());
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : 'password or login is wrong';
            let action = stopSubmit('login', {_error: message});
            dispatch(action);
        }
    }
}

export const tryLogOut = () => {
    return async (dispatch) => {
        let data = await authApi.logOut();
        if (data.resultCode !== 0) return;
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;
