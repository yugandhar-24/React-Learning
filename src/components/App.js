import "./App.css";
import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeleteContact from "./DeleteContact";
import EditContact from "./EditContact";
import { ContactsCrudContextProvider } from "../context/ContactsCrudContext";

function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <ContactsCrudContextProvider>
          <Routes>
            <Route
              path="/"
              exact
              element={<ContactList />}
            />
            <Route
              path="/add"
              element={<AddContact />}
            />
            <Route path="/contact/:id" element={<ContactDetail />}></Route>
            <Route
              path="/delete/:id"
              element={<DeleteContact />}
            ></Route>
            <Route
              path="/edit/:id"
              element={<EditContact />}
            ></Route>
          </Routes>
        </ContactsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
