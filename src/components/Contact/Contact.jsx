import React from 'react'
import { HiUser, HiPhone } from "react-icons/hi2";
import css from "./Contact.module.css"

const Contact = ({data: {id, name, number}, onDelete}) => {
  return (
    <div className={css.contactItem}>
      <div className='css.contactInfo'>
        <div className={css.info}>
          <HiUser size={"20px"} title="contact icon" />
          <p>{name}</p>
        </div>
        <div className={css.info}>
          <HiPhone size={"20px"} title="phone icon" />
          <p>{number}</p>
        </div>
      </div>
      <button className={css.deleteButton} onClick={()=> onDelete(id)}>Delete</button>
    </div>
  )
}

export default Contact