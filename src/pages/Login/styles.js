import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 120px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    padding: 10px;
    color: #6c7a89;

    a{
      color: currentColor;
      font-weight: 600;
    }
  }
`;

export const StyledLabel = styled.label`
  width: 400px;
  font-size: 14px;
  color: #333;
  display: block;
  margin: 6px 0;
`;

export const Header = styled.header`
  font-size: 32px;
  font-weight: bold;
  padding: 20px;
  border-bottom: 2px solid #ddd9;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: #00920E;
  }
`;

export const Button = styled.button`
  height: 46px;
  width: 100%;
  border: none;
  padding: 0 16px;
  background: #00920F;
  font-size: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  color: #FFF;
  border-radius: 16px;
  margin-top: 36px;
  transition: background 0.2s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #008000;
    cursor: pointer;
  }
`;
