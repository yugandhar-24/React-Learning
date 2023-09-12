import React, { useState } from "react";
import { useContactsCrud } from "../context/ContactsCrudContext";
import { useNavigate } from "react-router-dom";

export default function AddContact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
const navigate=useNavigate()
  const {addContactHandler}=useContactsCrud()
  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mandatory");
      return;
    }
    addContactHandler({name,email});
    setName("")
    setEmail("")
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form action="" className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="ui button blue">
          Add
        </button>
      </form>
    </div>
  );
}
