import { Box, Button, Container, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'end', gap: '20px' }}>
      <Typography variant="h6">Welcome, {user.name}</Typography>
      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        variant="contained"
        color="secondary"
      >
        Logout
      </Button>
    </Box>
  );
};
