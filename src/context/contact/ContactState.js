import React, { useReducer } from 'react';
import * as actionType from '../type';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        phone: '111-111-111',
        id: '1',
        name: 'Jam Doe',
        email: 'jam@gmail.com',
        type: 'personal'
      },
      {
        phone: '222-222-222',
        id: '2',
        name: 'Sam Smith',
        email: 'sam@gmail.com',
        type: 'personal'
      },
      {
        phone: '333-333-333',
        id: '3',
        name: 'Ray Allen',
        email: 'ray@gmail.com',
        type: 'professional'
      }
    ],
    error: null,
    current: null
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Get Contacts
  const getContacts = async () => {
    try {
      const res = await axios('/api/contacts');
      dispatch({
        type: actionType.GET_CONTACTS,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: actionType.CONTACT_ERROR,
        payload: error.response.msg
      });
    }
  };
  // Add Contact

  // Update Contact

  // delete contact

  // filter contacts

  // clear filter

  // set current
  // clear current

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
