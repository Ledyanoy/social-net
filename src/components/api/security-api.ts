import {instance} from "./api";

type GetCaptchaUrlResType = {
    url: string
}

export const securityApi = {
    getCaptchaUrl() {
        return instance.get<GetCaptchaUrlResType>(`security/get-captcha-url`).then(response => response.data)
    },
}