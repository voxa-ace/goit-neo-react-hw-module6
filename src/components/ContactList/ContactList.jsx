import React from 'react';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.contactItem}>
          <Contact contact={contact} onDelete={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
