// import PropTypes from 'prop-types';
import { Contact } from '../Contact/Contact';
// import { Title, List } from './ContactsList.styled';
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
      <h2>Contacts</h2>
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            phone={number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </>
  );
};

// ContactList.propTypes = {
//   onDeleteContact: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       phone: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };
