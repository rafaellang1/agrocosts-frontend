import styled from 'styled-components';

export default styled.select`
width: 100%;
  height: 52px;
  border: none;
  background: #FFF;
  border: 2px solid #FFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;
  color: #757575;

  &:focus {
    border-color: #777;
  }
`;
