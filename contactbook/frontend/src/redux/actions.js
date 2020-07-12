import {
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FETCH
} from '../redux/action-types';
const link = 'http://127.0.0.1:8000/api/accounts/';

export const getUser = (data) => dispatch => {
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
        .then((res) => {
            return res.json()
                .then((data) => {
                    if (res.ok) {
                        dispatch({
                            type: LOGIN_SUCCESS,
                            payload: data
                        })
                    }
                })
        })
        .then(data => { console.log(data) })
}