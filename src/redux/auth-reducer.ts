import {authApi, ResultCodeEnum, ResultCodeForCaptchaEnum, securityApi} from "../components/api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

// type InitialStateType2 = {
//     userId: number | null
//     email: string | null
//     login: string | null
//     isAuth: boolean
//     captchaUrl: string | null
// }

const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
}

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data};
        case GET_CAPTCHA_URL_SUCCESS:
            return {...state, captchaUrl: action.url};
        default:
            return state;
    }
}

type SetAuthUserDataDataType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean | null
}

type SetAuthUserDataType = {
    type: typeof SET_USER_DATA
    data: SetAuthUserDataDataType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataType => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
});

type SetCaptchaUrlType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    url: string
}

export const setCaptchaUrl = (url: string): SetCaptchaUrlType => ({type: GET_CAPTCHA_URL_SUCCESS, url});

export const loginTC = () => async (dispatch: any) => {
    let data = await authApi.auth();
    if (data.resultCode !== ResultCodeEnum.Success) return;
    const {id, login, email} = data.data;
    dispatch(setAuthUserData(id, email, login, true));
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const data = await securityApi.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(setCaptchaUrl(captchaUrl));
}


export const tryLogin = (email: string, password: string, rememberMe: boolean, captcha: null | string = null) => {

    return async (dispatch: any) => {
        let data = await authApi.logIn(email, password, rememberMe, captcha)
        if (data.resultCode === ResultCodeEnum.Success) {
            dispatch(loginTC());
        } else {
            if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
                dispatch(getCaptchaUrl());
            }
            let message = data.messages.length > 0 ? data.messages[0] : 'password or login is wrong';
            let action = stopSubmit('login', {_error: message});
            dispatch(action);
        }
    }
}

export const tryLogOut = () => {
    return async (dispatch: any) => {
        let data = await authApi.logOut();
        if (data.resultCode !== ResultCodeEnum.Success) return;
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;
