import { Contact } from '../Contact/Contact';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { useSelector, useDispatch } from 'react-redux';
import { selectItems, selectFilterValue } from 'redux/selectors';
import { Box, Container, Typography } from '@mui/material';

export const ContactList = () => {
  const filterValue = useSelector(selectFilterValue);
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
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

  return (
    <Container>
      {items.length <= 0 ? (
        <Typography component="p">Your phonebook is empty</Typography>
      ) : (
        <Box component="ul">
          {filteredContacts.map(({ id, name, number }) => (
            <Contact
              key={id}
              id={id}
              name={name}
              phone={number}
              onDeleteContact={onDeleteContact}
            />
          ))}
        </Box>
      )}
    </Container>
  );
};
