import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  color: black;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: rgba(0, 0, 0, 0.6);
`;
export const Input = styled.input`
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
export const Button = styled.button`
  text-align: center;
  font-size: 18px;
  padding: 10px 25px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  cursor: pointer;
  &:hover {
    background-color: blue;
    color: white;
  }
`;
