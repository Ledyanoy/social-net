import {instance, ApiResponseType, ResultCodeEnum, ResultCodeForCaptchaEnum} from "./api";

type AuthResponseDataType = {
    id: number
    email: string
    login: string
}

type LoginResponseDataType = {
    userId: number
}

export const authApi = {
    auth() {
        return instance.get<ApiResponseType<AuthResponseDataType>>(`auth/me`).then(response => response.data)
    },
    logIn(email: string, password: string, rememberMe: boolean, captcha: null | string = null) {
        return instance.post<ApiResponseType<LoginResponseDataType, ResultCodeEnum |ResultCodeForCaptchaEnum>>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        }).then(response => response.data)
    },
    logOut() {
        return instance.delete(`auth/login`).then(response => response.data)
    },
}