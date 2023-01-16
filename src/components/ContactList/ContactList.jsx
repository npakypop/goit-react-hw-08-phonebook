import PropTypes from 'prop-types';
import { Contact } from '../Contact/Contact';
import { Title, List } from './ContactsList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <Title>Contacts</Title>
      <List>
        {contacts.map(({ id, name, phone }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            number={phone}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </List>
    </>
  );
};

// ContactList.propTypes = {
//   onDeleteContact: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };
