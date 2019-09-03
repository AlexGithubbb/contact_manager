import React, { useState } from 'react';
import { addContact } from '../../redux/contacts/contactsAction';
import { connect } from 'react-redux';

const ContactForm = ({ addContact }) => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    // console.log(contact);
    addContact(contact);
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal'
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>Contact Form</h2>
      <input
        type='text'
        name='name'
        value={name}
        placeholder='Name'
        onChange={onChange}
      />
      <input
        type='email'
        name='email'
        value={email}
        placeholder='Email'
        onChange={onChange}
      />
      <input
        type='text'
        name='phone'
        value={phone}
        placeholder='Phone'
        onChange={onChange}
      />
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional
      <input
        type='submit'
        className='btn btn-block btn-primary'
        value='Add Contact'
      />
    </form>
  );
};

export default connect(
  null,
  { addContact }
)(ContactForm);
