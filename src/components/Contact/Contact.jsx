import PropTypes from 'prop-types';
import { Item, Info, Button } from './Contact.styled';

export const Contact = ({ name, phone, id, onDeleteContact }) => {
  return (
    <Item>
      <Info>
        <strong>Name: </strong>
        {name}
      </Info>
      <Info>
        <strong>Phone: </strong>
        {phone}
      </Info>
      <Button onClick={() => onDeleteContact(id)}>Delete contact</Button>
    </Item>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
};
