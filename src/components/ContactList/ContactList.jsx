import PropTypes from 'prop-types';
import { Contact } from '../Contact/Contact';
import { Title, List } from './ContactsList.styled';
import { deleteContact } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';

export const ContactList = () => {
  const filterValue = useSelector(state => state.filter.filter);
  const { items } = useSelector(state => state.contacts.contacts);
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
