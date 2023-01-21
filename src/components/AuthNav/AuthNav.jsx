import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <nav>
      <NavLink to="/login">LogIn</NavLink>
      <NavLink to="/register">SignUp</NavLink>
    </nav>
  );
};
