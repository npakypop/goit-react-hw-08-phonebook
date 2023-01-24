import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import { addContact } from 'redux/contacts/contactsOperations';
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
      toast.error(`Contact with name ${contact.name} already exists`, {
        duration: 1500,
      });
      return;
    }
    const newContact = {
      name: contact.name,
      number: contact.number,
    };
    const action = addContact(newContact);
    console.log(addContact());

    dispatch(action);
  };

  return (
    <Container>
      <Typography component="h1" sx={{ mb: '10px', fontSize: '20px' }}>
        Phonebook
      </Typography>
      <form onSubmit={addContactSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          color="secondary"
          value={name}
          onChange={inputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          color="secondary"
          value={number}
          onChange={inputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button variant="contained" type="submit" color="primary">
          Add Contact
        </Button>
        <Toaster />
      </form>
    </Container>
  );
};
