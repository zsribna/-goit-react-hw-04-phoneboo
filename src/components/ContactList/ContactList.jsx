import React from 'react'

import { DeleteButton, Items, List } from './ContactList.styled';
const ContactList = ({ contacts, handleDeleteButton }) => {
  return (
    <List >
      {contacts.map(contact => {
        return (
          <Items key={contact.id}>
            {`${contact.name} : ${contact.number}`}
            <DeleteButton
              onClick={() => handleDeleteButton(contact.id)}
              type="click"
            >
              delete
            </DeleteButton>
          </Items>
        );
      })}
    </List>
  );
};

export default ContactList
