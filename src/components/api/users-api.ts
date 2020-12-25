import {GetItemsType, instance, ApiResponseType} from "./api";
import {FilterType} from "../../redux/users-reducer";

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10, term:string = '', friend: null | boolean = null) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}` )).then(response => response.data)
    },

    followUser(userId = 1) {
        return instance.post<ApiResponseType>(`follow/${userId}`).then(response => response.data)
    },

    unfollowUser(userId = 1) {
        return instance.delete(`follow/${userId}`).then(response => response.data) as Promise<ApiResponseType>
    },
}
