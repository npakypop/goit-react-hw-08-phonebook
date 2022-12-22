import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  gap: 10px;
  justify-content: start;
  align-items: center;
`;
export const Info = styled.p``;
export const Button = styled.button`
  text-align: center;
  font-size: 14px;
  padding: 5px 55px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  cursor: pointer;
  &:hover {
    background-color: rgba(135, 206, 250, 0.7);
    color: rgba(0, 0, 0, 0.85);
  }
`;
