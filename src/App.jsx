import React from 'react';
import "./css/App.css";

import ContactForm from "./components/ContactForm/ContactForm"
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';


const App = () => {
  
  //APP//
  return (
    <div>
      <h1>PhoneBook</h1>
      <ContactForm/>
      <SearchBox />
      <ContactList/>
    </div>
  )
}

export default App