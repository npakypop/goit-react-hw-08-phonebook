import PropTypes from 'prop-types';
import { Contact } from '../Contact/Contact';
import { Title, List } from './ContactsList.styled';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { useSelector, useDispatch } from 'react-redux';
import { selectItems, selectFilterValue } from 'redux/selectors';

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
    <>
      <Title>Contacts</Title>
      <List>
        {filteredContacts.map(({ id, name, phone }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            phone={phone}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </List>
    </>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
