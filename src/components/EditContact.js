import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useContactsCrud } from '../context/ContactsCrudContext';

export default function EditContact() {

  const location=useLocation()
  const navigate=useNavigate()
  const {id,name,email}=location.state.contact


  const [newName, setName] = useState(name);
  const [newEmail, setEmail] = useState(email);
  const {updateContactHandler}=useContactsCrud()

  const update = (e) =>{
    e.preventDefault()
    if(newName === "" || newEmail === ""){
      alert("All the fields are mandatory")
      return
    }
    updateContactHandler({id,name:newName,email:newEmail})
    setName("")
    setEmail("")
    navigate("/");
  }
  return (
    <div className='ui main'>
    <h2>Edit & Update Contact</h2>
    <form action="" className='ui form' onSubmit={update}>
        <div className='field'>
            <label>Name</label>
            <input type="text" name="name" placeholder='Name' value={newName} onChange={ (e)=> setName(e.target.value)}/>
        </div>
        <div className='field'>
            <label>Email</label>
            <input type="email" name="email" placeholder='Email' value={newEmail}  onChange={ (e)=> setEmail(e.target.value)} />
        </div>
        <button type="submit" className='ui button green'>Update</button>
        <Link to={"/"}>
          <button  className='ui button'>Cancel</button>
        </Link>
    </form>
  </div>
  )
}