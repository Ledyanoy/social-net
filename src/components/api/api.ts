import axios from "axios";
import {ProfileType} from "../../types/types";

const instance = axios.create({
        withCredentials: true,
        headers: {
            'API-KEY': '7999f651-6ad5-4cd5-95e9-e8f10bece1f0',
        },
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    }
)

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    followUser(userId = 1) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },

    unfollowUser(userId = 1) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },

    getProfile(userId = 2) {
        console.warn('Obsolete method. Please use profileApi object.');
        return profileApi.getProfile(userId);
    }
}

export const profileApi = {
    getProfile(userId = 2) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },

    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    },

    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status}).then(response => response.data)
    },

    savePhoto(file: any) {
        const formData = new FormData();
        formData.append('image', file);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-type': 'multipart/form-data',
            }
        }).then(response => response.data)
    },

    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile).then(response => response.data)
    },
}

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

type AuthResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodeEnum | ResultCodeForCaptchaEnum
    messages: Array<string>
}

export const authApi = {
    auth() {
        return instance.get<AuthResponseType>(`auth/me`).then(response => response.data)
    },
    logIn(email: string, password: string, rememberMe: boolean, captcha: null | string = null) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha}).then(response => response.data)
    },
    logOut() {
        return instance.delete(`auth/login`).then(response => response.data)
    },
}
export const securityApi = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`).then(response => response.data)
    },
}




