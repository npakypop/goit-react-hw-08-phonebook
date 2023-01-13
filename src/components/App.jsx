import React from 'react';
import { Section } from './Section/Section';
import { AddForm } from './AddForm/AddForm';
import { SearchForm } from './SearchForm/SearchForm';
import { ContactList } from './ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';
import { deleteContact } from 'redux/contacts/contactSlice';
import shortid from 'shortid';
import { addContact } from 'redux/contacts/contactSlice';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filterValue = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  const changeFilter = value => {
    dispatch(filterContacts(value));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name
        .trim()
        .toLowerCase()
        .includes(filterValue.trim().toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  const onFormSubmit = contact => {
    if (contacts.some(el => el.name === contact.name)) {
      alert(`Contact with name ${contact.name} already exists`);
      return;
    }
    const newContact = {
      id: shortid.generate(),
      name: contact.name,
      number: contact.number,
    };
    const action = addContact(newContact);
    dispatch(action);
  };

  return (
    <>
      <Section>
        <AddForm onFormSubmit={onFormSubmit} />
      </Section>
      <Section>
        <SearchForm filter={filterValue} changeFilter={changeFilter} />
      </Section>
      <Section>
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={onDeleteContact}
        />
      </Section>
    </>
  );
};
