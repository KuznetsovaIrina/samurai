import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "bf1d71c6-5ccd-4fb1-8d70-5a5732327d16"
    }
});

export const UsersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    getAuthData() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    getProfileData(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    createFollow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },
    deleteFollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status})
            .then(response => response.data);
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe})
            .then(response => response.data);
    },
    logout() {
        return instance.delete('auth/login')
            .then(response => response.data);
    }
}