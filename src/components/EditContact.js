import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default class EditContact extends Component {

  constructor(props) {
    super(props)
    const {id,name,email}=props.location.state.contact
    this.state = {
      id,
      name,
      email
    }
  }
  
  state = {
    name:"",
    email:""
  }
  
  update = (e) =>{
    e.preventDefault()
    if(this.state.name === "" || this.state.email === ""){
      alert("All the fields are mandatory")
      return
    }
    this.props.updateContactHandler(this.state)
    this.setState({name:"",email:""})
    this.props.history.push("/")
  }
  render() {
    return (
      <div className='ui main'>
        <h2>Edit & Update Contact</h2>
        <form action="" className='ui form' onSubmit={this.update}>
            <div className='field'>
                <label>Name</label>
                <input type="text" name="name" placeholder='Name' value={this.state.name} onChange={ (e)=> this.setState({name:e.target.value})}/>
            </div>
            <div className='field'>
                <label>Email</label>
                <input type="email" name="email" placeholder='Email' value={this.state.email}  onChange={ (e)=> this.setState({email:e.target.value})} />
            </div>
            <button type="submit" className='ui button green'>Update</button>
            <Link to={"/"}>
              <button  className='ui button'>Cancel</button>
            </Link>
        </form>
      </div>
    )
  }
}
