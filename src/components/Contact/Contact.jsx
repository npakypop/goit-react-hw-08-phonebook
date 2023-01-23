import { Box, Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';
// import { Item, Info, Button } from './Contact.styled';

export const Contact = ({ name, phone, id, onDeleteContact }) => {
  return (
    <Box component="li">
      <Typography>
        <strong>Name: </strong>
        {name}
      </Typography>
      <Typography>
        <strong>Phone: </strong>
        {phone}
      </Typography>
      <Button
        size="small"
        onClick={() => onDeleteContact(id)}
        variant="contained"
        color="secondary"
      >
        Delete contact
      </Button>
    </Box>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
};
