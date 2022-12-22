import PropTypes from 'prop-types';
export const Contact = ({ name, number, id, onDeleteContact }) => {
  return (
    <li>
      <p>Name: {name}</p>
      <p>Phone: {number}</p>
      <button onClick={() => onDeleteContact(id)}>Delete contact</button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
};
