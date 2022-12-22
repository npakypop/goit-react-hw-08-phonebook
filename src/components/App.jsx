import React, { Component } from 'react';
import shortid from 'shortid';

import { Section } from './Section/Section';
import { AddForm } from './AddForm/AddForm';
import { SearchForm } from './SearchForm/SearchForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = contactId => {
    console.log(contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  onFormSubmit = contact => {
    contact.id = shortid.generate();

    if (this.state.contacts.some(el => el.name === contact.name)) {
      alert(`Contact with name ${contact.name} already exists`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <Section>
          <AddForm onFormSubmit={this.onFormSubmit} />
        </Section>
        <Section>
          <SearchForm filter={filter} changeFilter={this.changeFilter} />
        </Section>
        <Section>
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
