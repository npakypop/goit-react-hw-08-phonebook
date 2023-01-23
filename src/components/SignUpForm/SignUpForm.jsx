import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export const SignUpForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <TextField
        label="Name"
        variant="outlined"
        color="secondary"
        type="text"
        name="name"
        required
      />
      <TextField
        label="Email"
        variant="outlined"
        color="secondary"
        type="email"
        name="email"
        required
      />
      <TextField
        label="Password"
        variant="outlined"
        color="secondary"
        type="password"
        name="password"
        required
      />
      <Button variant="contained" type="submit" color="primary">
        Register
      </Button>
    </form>
  );
};
