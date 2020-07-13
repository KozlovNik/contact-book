import {
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FETCH,
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
    REGISTER_FETCH,
    GET_USER_LOADING,
    GET_USER_LOADED,
    GET_USER_FAILURE,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE
} from '../redux/action-types';


const link = 'http://127.0.0.1:8000/api/accounts/';

export const getUser = () => (dispatch, getState) => {
    dispatch({
        type: GET_USER_LOADING
    })

    const token = getState().auth.token

    if (!token) {
        return dispatch({
            type: GET_USER_FAILURE
        })
    }
    fetch(`${link}user/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
        }
    })
        .then(res => {
            return res.json()
                .then((data) => {
                    if (res.ok) {
                        dispatch({
                            type: GET_USER_LOADED,
                            payload: data
                        })
                    } else {
                        dispatch({
                            type: GET_USER_FAILURE,
                            payload: data
                        })
                    }
                })
        })
        .then(data => { console.log(data) })
}

export const loginUser = (data) => (dispatch) => {
    dispatch({
        type: LOGIN_FETCH
    })
    fetch(`${link}login/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            return res.json()
                .then((data) => {
                    if (res.ok) {
                        localStorage.setItem('token', data.token)
                        dispatch({
                            type: LOGIN_SUCCESS,
                            payload: data
                        })
                        
                    } else {
                        dispatch({
                            type: LOGIN_FAILURE,
                            payload: data
                        })
                    }
                })
        })
        .then(data => { console.log(data) })
}


export const register = (data) => dispatch => {
    dispatch({
        type: REGISTER_FETCH
    })
    fetch(`${link}register/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((res) => {
            return res.json()
                .then((data) => {
                    if (res.ok) {
                        dispatch({
                            type: REGISTER_SUCCESS,
                            payload: data
                        })
                    }
                })
        })
        .then(data => { console.log(data) })
}

export const logout = () => (dispatch, getState) => {
    const token = localStorage.getItem('token')
    fetch(`${link}logout/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${token}`
        },
    })
        .then((res) => {
            console.log(res)
            if (res.ok) {
                dispatch({
                    type: LOGOUT_SUCCESS
                })
            }
        })
}