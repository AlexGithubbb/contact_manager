import * as actionType from '../type';

const initialState = {
  contacts: [],
  error: null,
  current: null
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case actionType.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    case actionType.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case actionType.CONTACT_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case actionType.SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case actionType.CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    default:
      break;
  }
  return state;
};

export default contactsReducer;
