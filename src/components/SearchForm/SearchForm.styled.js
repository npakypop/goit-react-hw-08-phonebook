import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  color: black;
  margin-bottom: 20px;
`;
export const Input = styled.input`
  display: block;
  margin: 0 auto;
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 5px;
  color: green;
  border: 1px solid rgba(0, 0, 0, 0.6);
  &:hover,
  &:focus,
  &:focus-visible {
    outline: none;
    border-color: blue;
  }
`;
