import React from 'react';
import css from "./ContactList.module.css";
import Contact from '../Contact/Contact';

const ContactList = ({contacts, onDelete}) => {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  )
}

export default ContactList