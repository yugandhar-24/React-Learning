import React from 'react'
import { Link ,useNavigate, useLocation} from 'react-router-dom'
import { useContactsCrud } from '../context/ContactsCrudContext'


const DeleteContact = () => {
const navigate =useNavigate()

const location=useLocation()
const {removeContactHandeler} = useContactsCrud();
// const params =useParams()


// const contact = contacts.find((contact)=>(contact.id===params.id))
// console.log(contact)
const {id,name}=location.state.contact
const deleteContactHandler = () =>{
    removeContactHandeler(id)
    navigate("/")
}
return (
    <div className='main'>
     <div>
     <h2>Delete Contact</h2>
        <p>Are you sure want to delete? &nbsp; <span style={{color:'red',textTransform:'uppercase'}}><b>{name}</b></span></p>
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