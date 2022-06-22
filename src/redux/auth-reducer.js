import { stopSubmit } from 'redux-form';
import {UsersAPI} from './../api/api';

const SET_USER_DATA = 'auth/SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const getAuthData = () => async (dispatch) => {
    const result = await UsersAPI.getAuthData();
    
    if (result.resultCode === 0) {
        const {id, email, login} = result.data;
        dispatch(setAuthUserData(id, email, login, true));
    }

    return result;
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    const result = await UsersAPI.login(email, password, rememberMe);
    result.resultCode === 0
        ? dispatch(getAuthData())
        : dispatch(stopSubmit('login', {_error: result.messages.length >  0 ? result.messages[0] : 'Error'}))
}

export const logout = () => async (dispatch) => {
    const result = await UsersAPI.logout();
    result.resultCode === 0 && dispatch(setAuthUserData(null, null, null, false));
}

export default authReducer;