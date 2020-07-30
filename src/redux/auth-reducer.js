import {authApi} from "../components/api/api";

const SET_USER_DATA = 'SET_USER_DATA';


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true,};
        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});

export const loginTC = () => {
    return (dispatch) => {
        authApi.auth().then(data => {
            if (data.resultCode !== 0) return;
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, email, login));
        });
    }
}

export const tryLogin = (user) => {
    return (dispatch) => {
        authApi.tryAuth(user).then(data => {
            if (data.resultCode !== 0) return;
            loginTC();
        });
    }
}
export default authReducer;
