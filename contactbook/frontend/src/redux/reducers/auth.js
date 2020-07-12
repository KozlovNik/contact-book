import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_FETCH } from '../action-types';

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
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: action.payload
            }
        default:
            return state;
    }
};