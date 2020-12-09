import {ResultCodeEnum, ResultCodeForCaptchaEnum} from "../components/api/api";
import {FormAction, stopSubmit} from "redux-form";
import {authApi} from "../components/api/auth-api";
import {securityApi} from "../components/api/security-api";
import {BaseThunkType, inferActionsTypes} from "./redux-store";

const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
}

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SN/auth/SET_USER_DATA':
            return {...state, ...action.data};
        case 'SN/auth/GET_CAPTCHA_URL_SUCCESS':
            return {...state, captchaUrl: action.url};
        default:
            return state;
    }
}

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'SN/auth/SET_USER_DATA',
        data: {userId, email, login, isAuth}
    } as const),

    setCaptchaUrl: (url: string) => ({type: 'SN/auth/GET_CAPTCHA_URL_SUCCESS', url} as const)
}


export const loginTC = (): ThunkType => async (dispatch) => {
    let data = await authApi.auth();
    if (data.resultCode !== ResultCodeEnum.Success) return;
    const {id, login, email} = data.data;
    dispatch(actions.setAuthUserData(id, email, login, true));
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityApi.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(actions.setCaptchaUrl(captchaUrl));
}


export const tryLogin = (email: string, password: string, rememberMe: boolean, captcha: null | string = null): ThunkType => {

    return async (dispatch) => {
        let data = await authApi.logIn(email, password, rememberMe, captcha)
        if (data.resultCode === ResultCodeEnum.Success) {
            dispatch(loginTC());
        } else {
            if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
                dispatch(getCaptchaUrl());
            }
            let message = data.messages.length > 0 ? data.messages[0] : 'password or login is wrong';
            dispatch(stopSubmit('login', {_error: message}));
        }
    }
}

export const tryLogOut = (): ThunkType => {
    return async (dispatch) => {
        let data = await authApi.logOut();
        if (data.resultCode !== ResultCodeEnum.Success) return;
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
}

export default authReducer;

export type InitialStateType = typeof initialState;

type ActionsTypes = inferActionsTypes<typeof actions>

type ThunkType = BaseThunkType<ActionsTypes | FormAction>
