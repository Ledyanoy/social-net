import {instance} from "./api";

export const securityApi = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`).then(response => response.data)
    },
}