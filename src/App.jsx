import React from 'react';
import "./css/App.css";
import { useState, useEffect } from 'react';

import ContactForm from "./components/ContactForm/ContactForm"
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const getContactsFromStorage = JSON.parse(
      window.localStorage.getItem("contacts")
    );
    if (getContactsFromStorage) return getContactsFromStorage;

    return initialContacts;
  });

  //Add Contacts//
   const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  //Search Contacts//
  const [filter, setFilter] = useState("");
  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );


  //Delete Contact//
  const deleteContact = (contactId) => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    })
  };

  //APP//
  return (
    <div>
      <h1>PhoneBook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      < ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  )
}

export default App