import {GetItemsType, instance, ApiResponseType} from "./api";

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    followUser(userId = 1) {
        return instance.post<ApiResponseType>(`follow/${userId}`).then(response => response.data)
    },

    unfollowUser(userId = 1) {
        return instance.delete(`follow/${userId}`).then(response => response.data) as Promise<ApiResponseType>
    },
}