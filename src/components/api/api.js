import * as axios from "axios";

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
        return instance.get(`profile/${userId}`).then(response =>  response.data)
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response =>  response.data)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status}).then(response =>  response.data)
    },

    savePhoto(file) {
        const formData = new FormData();
        formData.append('image', file);
        return instance.put(`profile/photo`, formData, {
            headers: {
            'Content-type':'multipart/form-data',
            }
        }).then(response =>  response.data)
    },

    saveProfile(profile) {
        return instance.put(`profile`, profile ).then(response =>response.data)
    }
}

export const authApi = {
    auth() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    logIn(obj) {
        return instance.post(`auth/login`, obj).then(response => response.data)
    },
    logOut() {
        return instance.delete(`auth/login`).then(response => response.data)
    },

}

