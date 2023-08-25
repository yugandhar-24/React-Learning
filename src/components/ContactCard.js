import React from "react";
import msd from "../images/msd.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ContactCard = (props) => {
  return props.contacts.map((contact, i) => (
    <div className="item" key={i}>
      <img className="ui avatar image" src={msd} alt="user" />
      <div className="content">
        <Link
          to={{
            pathname: `/contact/${contact.id}`,
            state: { contact: contact },
          }}
        >
          <div className="header">{contact.name}</div>
          <div>{contact.email}</div>
        </Link>
      </div>
      <Link to={{ pathname: "/delete", state: { contact: contact } }}>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px" }}
        ></i>
      </Link>
      <Link to={{pathname: "/edit", state: { contact: contact }}}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px", marginLeft: "10px" }}
        ></i>
      </Link>
    </div>
  ));
};

export default ContactCard;

// onClick={()=>props.clickHandler(contact.id)}
