import { Container, Typography } from '@mui/material';
import { SignUpForm } from 'components/SignUpForm/SignUpForm';

const SignUp = () => {
  return (
    <Container sx={{ pt: '40px' }}>
      <Typography component="h2" sx={{ textAlign: 'center', mb: '20px' }}>
        SignUp
      </Typography>
      <SignUpForm />
    </Container>
  );
};
export default SignUp;
