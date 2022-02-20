import React from "react";
import Contacts from "../Contacts/Contacts";
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul>
        <Contacts contacts={contacts} onDeleteContact={onDeleteContact} />
      </ul>
    </div>
  );
};
export default ContactList;
