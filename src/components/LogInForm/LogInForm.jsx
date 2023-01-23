import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <TextField
        label="Email"
        variant="outlined"
        color="secondary"
        type="email"
        name="email"
      />
      <TextField
        label="Password"
        variant="outlined"
        color="secondary"
        type="password"
        name="password"
      />
      <Button variant="contained" type="submit" color="primary">
        Log In
      </Button>
    </form>
  );
};
