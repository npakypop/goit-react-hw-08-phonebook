import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  margin-left: auto;
  margin-right: auto;
`;
export const StyledLink = styled(NavLink)`
  color: black;
  padding: 20px 50px;
  border-radius: 15px;
  background-color: orange;
  color: black;
  text-decoration: none;
  font-size: 18px;
  &.active {
    background-color: black;
    color: orange;
  }
`;
export const Nav = styled.nav`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: end;
  gap: 20px;
  border-bottom: 2px solid black;
`;
