import { combineReducers } from 'redux';
import contactsReducer from './contacts/contactsReducer';

const rootReducer = combineReducers({
  contact: contactsReducer
  // auth:
});

export default rootReducer;
