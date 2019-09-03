// import React, { useContext } from 'react';
// import ContactContext from '../../context/contact/contactContext';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  deleteContact,
  setCurrent,
  clearCurrent
} from '../../redux/contacts/contactsAction';

const ContactItem = ({ contact, deleteContact, setCurrent, clearCurrent }) => {
  // const contactContext = useContext(ContactContext);
  // const { contacts } = contactContext;
  const { id, name, phone, email, type } = contact;
  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };
  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.slice(0, 1).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul>
        {email && (
          <li>
            <i className='fas fa-envelope-open' /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone' /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};
export default connect(
  null,
  { deleteContact, setCurrent, clearCurrent }
)(ContactItem);
