import React, { useEffect, useRef } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";
const ContactList = () => {
  const {
    contacts,
    searchTerm,
    searchResults,
    searchHandler,
    retriveContacts,
  } = useContactsCrud();
  const onUserSearch = (e) => {
    searchHandler(e.target.value)
  };
  useEffect(() => {
    retriveContacts();

  }, []);

  return (
    <div className="main">
      <h2>
        Contact List
        <Link to={"/add"}>
          <button className="ui button blue left right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search Contacts"
            className="prompt"
            value={searchTerm}
            onChange={(e) => onUserSearch(e)}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
        {contacts.length > 0 ? (
          <ContactCard contacts={searchTerm.length < 1 ? contacts : searchResults} />
        ) : (
          "No contacts Available"
        )}
      </div>
    </div>
  );
};

export default ContactList;
