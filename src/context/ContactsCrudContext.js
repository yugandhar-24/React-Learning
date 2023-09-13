import { createContext, useContext, useState } from "react";
import api from "../api/contacts";
import { v4 as uuidv4 } from "uuid";

const contactsCrudContext = createContext();
export function ContactsCrudContextProvider({ children }) {
    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    //RetriveContacts
    const retriveContacts = async () => {
        const response = await api.get("/contacts");
        if (response.data) setContacts(response.data);
    }; 

    //Add
    const addContactHandler = async (contact) => {
        const request = {
            id: uuidv4(),
            ...contact,
        };
        const response = await api.post("/contacts", request);
        setContacts([...contacts, response.data]);
    };

    //DeleteContacts
    const removeContactHandeler = async (id) => {
        await api.delete(`/contacts/${id}`);
        const newContactList = contacts.filter((contact) => {
            return contact.id !== id;
        });
        setContacts(newContactList);
    };

    //update
    const updateContactHandler = async (contact) => {
        const response = await api.put(`/contacts/${contact.id}`, contact);
        const { id } = response.data;
        setContacts(
            contacts.map((contact) => {
                return contact.id === id ? { ...response.data } : contact;
            })
        );
    };

    const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

    const value = {
        contacts,
        searchTerm,
        searchResults,
        retriveContacts,
        removeContactHandeler,
        updateContactHandler,
        addContactHandler,
        searchHandler,
    };

    return (
        <contactsCrudContext.Provider value={value}>
            {children}
        </contactsCrudContext.Provider>
    );
}
export function useContactsCrud() {
    return useContext(contactsCrudContext);
}
