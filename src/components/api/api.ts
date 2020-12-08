import axios from "axios";
import {UserType} from "../../types/types";

export const instance = axios.create({
        withCredentials: true,
        headers: {
            'API-KEY': '7999f651-6ad5-4cd5-95e9-e8f10bece1f0',
        },
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    }
)

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}


export type ApiResponseType<D = {}, RC = ResultCodeEnum> = {
    data: D
    resultCode: RC
    messages: Array<string>
}