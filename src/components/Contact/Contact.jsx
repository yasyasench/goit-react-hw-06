import React from 'react'
import { HiUser, HiPhone } from "react-icons/hi2";
import css from "./Contact.module.css"
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';


const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contactItem}>
      <div className={css.contactInfo}>
        <div className={css.info}>
          <HiUser size={"20px"} title="contact icon" />
          <p>{contact.name}</p>
        </div>
        <div className={css.info}>
          <HiPhone size={"20px"} title="phone icon" />
          <p>{contact.number}</p> {/* Исправлено на contact.number */}
        </div>
      </div>
      <button
        className={css.deleteButton}
        onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </div>
  )
}



Contact.propTypes = {
  contact: PropTypes.object,
  onDelete: PropTypes.func,
};

export default Contact