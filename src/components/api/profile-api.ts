import {PhotosType, ProfileType} from "../../types/types";
import {instance, ApiResponseType} from "./api";

type SavePhotosResDataType = {
    photos: PhotosType
}

export const profileApi = {
    getProfile(userId = 2) {
        return instance.get<ProfileType>(`profile/${userId}`).then(response => response.data)
    },

    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`).then(response => response.data)
    },

    updateStatus(status: string) {
        return instance.put<ApiResponseType>(`profile/status`, {status: status}).then(response => response.data)
    },

    savePhoto(file: any) {
        const formData = new FormData();
        formData.append('image', file);
        return instance.put<ApiResponseType<SavePhotosResDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-type': 'multipart/form-data',
            }
        }).then(response => response.data)
    },

    saveProfile(profile: ProfileType) {
        return instance.put<ApiResponseType>(`profile`, profile).then(response => response.data)
    },
}