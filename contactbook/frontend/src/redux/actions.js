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
    LOGOUT_FAILURE,
    ADD_CONTACT_FAILURE,
    ADD_CONTACT_SUCCESS,
    ADD_CONTACT_LOADING,
    GET_CONTACTS_FAILURE,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_LOADING,
    UPLOAD_CONTACT_ITEM,
    CLEAR_CONTACT_ITEM,
    DELETE_CONTACT_FAILURE,
    DELETE_CONTACT_SUCCESS,
    UPDATE_CONTACT_FAILURE,
    UPDATE_CONTACT_SUCCESS
} from '../redux/action-types';


const link = 'http://127.0.0.1:8000/api/';

export const getUser = () => dispatch => {
    dispatch({ type: GET_USER_LOADING })

    const token = localStorage.getItem('token');

    if (!token) {
        return dispatch({ type: GET_USER_FAILURE })
    }
    fetch(`${link}accounts/user/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
        }
    })
        .then(async res => {
            const data = await res.json();
            if (res.ok) {
                dispatch({ type: GET_USER_LOADED, payload: data })
            }
            else {
                dispatch({ type: GET_USER_FAILURE, payload: data })
            }
        })
}

export const loginUser = data => dispatch => {
    dispatch({ type: LOGIN_FETCH })
    fetch(`${link}accounts/login/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(async res => {
            const data = await res.json();
            if (res.ok) {
                localStorage.setItem('token', data.token)
                dispatch({ type: LOGIN_SUCCESS, payload: data })
            } else {
                dispatch({ type: LOGIN_FAILURE, payload: data })
            }
        })
        .catch()
}


export const register = (data, cb) => dispatch => {
    dispatch({
        type: REGISTER_FETCH
    })
    fetch(`${link}accounts/register/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(async res => {
            const data = await res.json();
            if (res.ok) {
                localStorage.setItem('token', data.token)
                cb()
                dispatch({ type: REGISTER_SUCCESS, payload: data })
            }
        })
}

export const logout = () => dispatch => {
    const token = localStorage.getItem('token')
    fetch(`${link}accounts/logout/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${token}`
        },
    })
        .then(res => {
            if (res.ok) {
                dispatch({ type: LOGOUT_SUCCESS })
            }
        })
}


export const getContacts = () => dispatch => {
    dispatch({ type: GET_CONTACTS_LOADING })

    const token = localStorage.getItem('token');

    if (!token) {
        return dispatch({ type: GET_CONTACTS_FAILURE })
    }
    fetch(`${link}contacts/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
        }
    })
        .then(async res => {
            const data = await res.json();
            if (res.ok) {
                dispatch({ type: GET_CONTACTS_SUCCESS, payload: data })
            }
            else {
                dispatch({ type: GET_USER_FAILURE, payload: data })
            }
        })
}

export const addContact = data => dispatch => {
    dispatch({ type: ADD_CONTACT_LOADING })

    const token = localStorage.getItem('token');

    if (!token) {
        return dispatch({ type: ADD_CONTACT_FAILURE })
    }
    fetch(`${link}contacts/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
        },
        body: JSON.stringify(data)
    })
        .then(async res => {
            const data = await res.json();
            if (res.ok) {
                dispatch({ type: ADD_CONTACT_SUCCESS, payload: data });
            }
            else {
                dispatch({ type: ADD_CONTACT_FAILURE, payload: data });
            }
        })
}

export const uploadContactItem = id => ({ type: UPLOAD_CONTACT_ITEM, payload: id })

export const clearContactItem = () => ({ type: CLEAR_CONTACT_ITEM })


export const deleteContact = id => dispatch => {

    const token = localStorage.getItem('token');

    if (!token) {
        return dispatch({ type: DELETE_CONTACT_FAILURE })
    }
    fetch(`${link}contacts/${id}/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
        },
    })
        .then(res => {
            if (res.ok) {
                dispatch({ type: DELETE_CONTACT_SUCCESS, payload: id })
            }
            else {
                dispatch({ type: ADD_CONTACT_FAILURE })
            }
        })
}


export const updateContact = data => dispatch => {
    const token = localStorage.getItem('token');

    if (!token) {
        return dispatch({ type: UPDATE_CONTACT_FAILURE })
    }
    fetch(`${link}contacts/${data.id}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
        },
        body: JSON.stringify(data)
    })
        .then(async res => {
            const data = await res.json();
            if (res.ok) {
                dispatch({ type: UPDATE_CONTACT_SUCCESS, payload: data })
            }
            else {
                dispatch({ type: UPDATE_CONTACT_FAILURE, payload: data })
            }
        })
}