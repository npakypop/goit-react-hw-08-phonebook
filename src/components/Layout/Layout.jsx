import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, Container, Nav } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/contacts">Contacts</StyledLink>
        <StyledLink to="/signin">SignIn</StyledLink>
        <StyledLink to="/login">LogIn</StyledLink>
      </Nav>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
