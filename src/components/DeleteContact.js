import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const DeleteContact = (props) => {
const {id,name} =props.location.state.contact
const deleteContactHandler = () =>{
    props.getContactId(id)
    props.history.push("/")
}
return (
    <div className='main'>
     <div>
     <h2>Delete Contact</h2>
        <p>Are you sure want to delete? &nbsp; <span style={{color:'red',textTransform:'uppercase'}}>{name}</span></p>
        <div className='ui'> 
            <button className='ui button red left' onClick={deleteContactHandler}>Yes,Delete</button>
            <Link to={"/"}>
            <button className='ui button blue right'>No</button>
            </Link>
        </div>
     </div>
    </div>
  )
}

export default DeleteContact