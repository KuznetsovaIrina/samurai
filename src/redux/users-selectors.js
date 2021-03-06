import { createSelector } from "reselect";

export const getUsers = (state) => {
    return state.usersPage.users;
}

export const getUsersWithPhotoAndStatus = createSelector(getUsers, users => users.filter(u => u.status && u.photos.large));

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getIsAuth = (state) => {
    return state.auth.isAuth;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}