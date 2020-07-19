import { combineReducers } from 'redux';
import auth from './auth';
import contacts from './contacts';
import contactFilter from './contacts';

export default combineReducers({ auth, contacts, contactFilter })