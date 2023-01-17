import React from 'react';
import { useEffect } from 'react';
import { Section } from './Section/Section';
import { AddForm } from './AddForm/AddForm';
import { SearchForm } from './SearchForm/SearchForm';
import { ContactList } from './ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';
import { fetchContacts, deleteContact, addContact } from 'redux/operations';

export const App = () => {
  const { items, isLoading, error } = useSelector(
    state => state.contacts.contacts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterValue = useSelector(state => state.filter.filter);
  const onDeleteContact = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  const changeFilter = value => {
    dispatch(filterContacts(value));
  };

  const getFilteredContacts = () => {
    return items.filter(contact =>
      contact.name
        .trim()
        .toLowerCase()
        .includes(filterValue.trim().toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  const onFormSubmit = contact => {
    if (items.some(el => el.name === contact.name)) {
      alert(`Contact with name ${contact.name} already exists`);
      return;
    }
    const newContact = {
      name: contact.name,
      phone: contact.number,
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
        {isLoading && <p>Loading tasks...</p>}
        {error && <p>{error}</p>}
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={onDeleteContact}
        />
      </Section>
    </>
  );
};
