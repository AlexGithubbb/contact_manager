import * as actionType from '../type';
import axios from 'axios';
import uuid from 'uuid';

// Get Contacts
export const getContacts = () => async dispatch => {
  try {
    const res = await axios.get('/contacts');
    console.log(res.data);
    dispatch({
      type: actionType.GET_CONTACTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: actionType.CONTACT_ERROR,
      payload: err.response.data
    });
  }
};

// Add Contact
export const addContact = contact => async dispatch => {
  try {
    contact.id = uuid.v4(); // generate random id (e.g.3af506ee-df99-4d27-9924-281f0709b657)
    const res = await axios.post('/contacts', { ...contact });
    console.log(res.data);
    dispatch({
      type: actionType.ADD_CONTACT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: actionType.CONTACT_ERROR,
      payload: err.response.data
    });
  }
};

// Update Contact
export const updateContact = contact => async dispatch => {
  try {
    const res = await axios.put(`/contacts/${contact.id}`, { ...contact });
    console.log(res.data);
    dispatch({
      type: actionType.UPDATE_CONTACT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: actionType.CONTACT_ERROR,
      payload: err.response.data
    });
  }
};
// delete contact
export const deleteContact = id => async dispatch => {
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch({
      type: actionType.DELETE_CONTACT,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: actionType.CONTACT_ERROR,
      payload: err.response.data
    });
  }
};
// filter contacts

// clear filter

// set current
export const setCurrent = contact => dispatch => {
  dispatch({
    type: actionType.SET_CURRENT,
    payload: contact
  });
};
// clear current
export const clearCurrent = () => dispatch => {
  dispatch({
    type: actionType.CLEAR_CURRENT
  });
};
