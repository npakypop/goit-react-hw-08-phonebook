import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { Title, Form, Input, Button, Label } from './AddForm.styled';
import { selectItems } from 'redux/selectors';

export const AddForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  const inputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const addContactSubmit = event => {
    event.preventDefault();
    onFormSubmit({ name, number });
    setName('');
    setNumber('');
  };

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
      <Title>Phonebook</Title>
      <Form onSubmit={addContactSubmit}>
        <Label>
          Name
          <Input
            value={name}
            onChange={inputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Phone Number
          <Input
            value={number}
            onChange={inputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add Contact</Button>
      </Form>
    </>
  );
};
