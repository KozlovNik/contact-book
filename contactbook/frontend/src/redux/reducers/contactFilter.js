import {
    FILTER_CONTACTS
} from '../action-types';

const initialState = {
    contactList: [],
    isLoading: false,
    showEdit: false,
    id: null
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
        case UPLOAD_CONTACT_ITEM:

            return {
                ...state,
                showEdit: true,
                id: action.payload
            }
        case CLEAR_CONTACT_ITEM:

            return {
                ...state,
                showEdit: false,
                id: null
            }
        case DELETE_CONTACT_SUCCESS:

            return {
                ...state,
                contactList: state.contactList.filter(el => {
                    return el.id !== action.payload
                }),
                showEdit: false,
                id: null
            }
        case UPDATE_CONTACT_SUCCESS:

            const newArr = state.contactList.map(el => {
                if (el.id === action.payload.id) {
                    return action.payload
                }
                return el
            })

            return {
                ...state,
                contactList: newArr,
                showEdit: false,
                id: null
            }
        default:
            return state;
    }
};