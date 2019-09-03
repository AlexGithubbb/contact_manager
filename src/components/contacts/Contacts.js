// import React, { Fragment, useContext } from 'react';
// import ContactContext from '../../context/contact/contactContext';
// import ContactItem from './ContactItem';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getContacts } from '../../redux/contacts/contactsAction';
import ContactItem from '../contacts/ContactItem';

const Contacts = ({ contact: { contacts }, getContacts }) => {
  // const contactContext = useContext(ContactContext);
  // const { contacts } = contactContext;

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <Fragment>
      {contacts.map(contact => {
        return <ContactItem contact={contact} key={contact.id} />;
      })}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  contact: state.contact
});

export default connect(
  mapStateToProps,
  { getContacts }
)(Contacts);
