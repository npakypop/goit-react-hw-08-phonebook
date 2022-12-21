import React, { Component } from 'react';
import { Section } from './Section/Section';
import { AddForm } from './AddForm/AddForm';
import { SearchForm } from './SearchForm/SearchForm';
import { ContactList } from './ContactList/ContactList';
import shortid from 'shortid';

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
  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };
  onFormSubmit = contact => {
    contact.id = shortid.generate();

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <>
        <Section>
          <AddForm onFormSubmit={this.onFormSubmit} />
        </Section>
        <Section>
          <SearchForm filter={filter} changeFilter={this.changeFilter} />
        </Section>
        <Section>
          <ContactList contacts={filteredContacts} />
        </Section>
      </>
    );
  }
}
