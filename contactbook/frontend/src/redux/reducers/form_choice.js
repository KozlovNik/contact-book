import {
    ADD_CONTACT_FAILURE,
    ADD_CONTACT_LOADING,
    ADD_CONTACT_SUCCESS,
    GET_CONTACTS_LOADING,
    GET_CONTACTS_SUCCESS
} from '../action-types';

const initialState = {
    contactList: [],
    isLoading: false
}

export default function contacts(state = initialState, action) {
    switch (action.type) {
        case GET_CONTACTS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case GET_CONTACTS_SUCCESS:
            return {
                ...state,
                contactList: action.payload,
                isLoading: false
            }
        case ADD_CONTACT_SUCCESS:
            return {
                ...state,
                contactList: [action.payload, ...state.contactList],
                isLoading: false
            }
        default:
            return state;
    }
};