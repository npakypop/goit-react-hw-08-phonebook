import { Container, Typography } from '@mui/material';
import { LoginForm } from 'components/LogInForm/LogInForm';

const Login = () => {
  return (
    <Container sx={{ pt: '40px' }}>
      <Typography component="h2" sx={{ textAlign: 'center', mb: '20px' }}>
        Login
      </Typography>
      <LoginForm />
    </Container>
  );
};
export default Login;
