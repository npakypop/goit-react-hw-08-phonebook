import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Box>
      <Button
        component={NavLink}
        color="secondary"
        to="/login"
        sx={{ '&.active': { color: '#ffffff' } }}
      >
        LogIn
      </Button>
      <Button
        component={NavLink}
        color="secondary"
        to="/register"
        sx={{ '&.active': { color: '#ffffff' } }}
      >
        SignUp
      </Button>
    </Box>
    // <nav>
    //   <NavLink to="/login">LogIn</NavLink>
    //   <NavLink to="/register">SignUp</NavLink>
    // </nav>
  );
};
