import React, { useRef } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
const ContactList = (props) => {
  const inputEl=useRef()
  const getSearchTerm = ()=>{
    props.searchKeyWord(inputEl.current.value)
  }

  return (
   <div className="main">
      <h2>Contact List
      <Link to={"/add"}>
        <button className="ui button blue left right">Add Contact</button>
      </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input type="text" placeholder="Search Contacts" ref={inputEl} className="prompt" value={props.term} onChange={getSearchTerm} />
          <i className="search icon"></i>
        </div>
      </div>
     <div className="ui celled list">   
      {props.contacts.length > 0 ? <ContactCard contacts={props.contacts} /> : "No contacts Available"}
    </div>
   </div>
  );
};

export default ContactList;
