import PropTypes from 'prop-types';
// import { Item, Info, Button } from './Contact.styled';

export const Contact = ({ name, phone, id, onDeleteContact }) => {
  return (
    <li>
      <p>
        <strong>Name: </strong>
        {name}
      </p>
      <p>
        <strong>Phone: </strong>
        {phone}
      </p>
      <button onClick={() => onDeleteContact(id)}>Delete contact</button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
};
