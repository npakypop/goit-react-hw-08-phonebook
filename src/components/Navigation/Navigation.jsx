import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { Box, Button } from '@mui/material';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box sx={{ display: 'flex' }}>
      <Button
        component={NavLink}
        color="secondary"
        to="/"
        sx={{ '&.active': { color: '#ffffff' } }}
      >
        Home
      </Button>
      {isLoggedIn && (
        <Button
          component={NavLink}
          color="secondary"
          to="/contacts"
          sx={{ '&.active': { color: '#ffffff' } }}
        >
          Contacts
        </Button>
      )}
    </Box>
  );
};
