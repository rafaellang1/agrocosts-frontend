import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  border-bottom: 2px solid #ddd9;
  padding-bottom: 16px;

  strong {
    font-size: 28px;
  }
  `;

export const HarvestButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;

`;

export const HarvestButton = styled.button`
  padding: 25px;
  background-color: #00920E;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 22px;
  font-weight: 500;


  a {

  }

  &:hover {
    background-color: #007B0C;
  }
`;
