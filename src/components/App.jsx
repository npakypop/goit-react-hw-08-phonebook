import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import { Section } from './Section/Section';
import { AddForm } from './AddForm/AddForm';
import { SearchForm } from './SearchForm/SearchForm';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');
  // useEffect(() => {
  //   JSON.parse(localStorage.getItem('contacts')) &&
  //     setContacts(JSON.parse(localStorage.getItem('contacts')));
  // }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const onFormSubmit = contact => {
    contact.id = shortid.generate();

    if (contacts.some(el => el.name === contact.name)) {
      alert(`Contact with name ${contact.name} already exists`);
      return;
    }

    setContacts([contact, ...contacts]);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <Section>
        <AddForm onFormSubmit={onFormSubmit} />
      </Section>
      <Section>
        <SearchForm filter={filter} changeFilter={changeFilter} />
      </Section>
      <Section>
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      </Section>
    </>
  );
};
