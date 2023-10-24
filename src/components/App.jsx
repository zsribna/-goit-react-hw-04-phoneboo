import  { useEffect, useState } from 'react'
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'
import Section from './Section/Section'
import { ContactForm } from './ContactForm/ContactForm'
import { nanoid } from 'nanoid';



export const   App = () =>   {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contact')) ?? []
  );
  const [filter , setFilter] = useState('')


  const hendlerFormData = data => {
    const sameContacts = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (sameContacts)
      return alert(`${sameContacts.name} is already in contact`);

    const newContact = {
      ...data,
      id: nanoid(),
    };
    setContacts(prev => [newContact, ...prev])
     
     };
  const changeFilter = ({ currentTarget: { value } }) => {
  setFilter(value)

  };
  const getVisibleContacts = () => {

    const normalaiz = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalaiz)
    );
  };

  const handleDeleteButton = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };
  useEffect(() => {
   localStorage.setItem('contact', JSON.stringify(contacts));
},[contacts])

  
  const visibleContacts = getVisibleContacts();
  

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmitForm={hendlerFormData} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            handleDeleteButton={handleDeleteButton}
            contacts={visibleContacts}
          />
        </Section>
      </>
    );
  };

  // componentDidMount() {
  //   const contact = localStorage.getItem('contact');
  //   const parse = JSON.parse(contact);

  //   if (parse) {
  //     this.setState({ contacts: parse });
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //   }

  //   localStorage.setItem('contact', JSON.stringify(this.state.contacts));
  // }
  // componentWillUnmount() {}
  
 

  




