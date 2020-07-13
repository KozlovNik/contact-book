import {
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FETCH,
    REGISTER_SUCCESS,
    REGISTER_FETCH,
    REGISTER_FAILURE,
    GET_USER_FAILURE,
    GET_USER_LOADING,
    GET_USER_LOADED,
    LOGOUT_SUCCESS
} from '../action-types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: false,
    error: null,
    user: null
}

export default function auth(state = initialState, action) {
    switch (action.type) {
        case LOGIN_FETCH:
        case REGISTER_FETCH:
        case GET_USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
        case GET_USER_LOADED:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: action.payload.user
            }
        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
        case GET_USER_FAILURE:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token')
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                user: null,
                token: null
            }
        default:
            return state;
    }
};