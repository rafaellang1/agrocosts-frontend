import styled from 'styled-components';

export const Container = styled.header`

  display: flex;
  margin-top: 32px;
  margin-bottom: 24px;
  a {
    text-decoration: none;
    display: flex;
    align-items: center;

    span {
      color: #000;
      font-weight: 500;
    }

    img {
      width: 24px;
      margin-right: 8px;
      transform: rotate(-0deg);
    }
  }

  h1 {
    font-size: 24px;
  }
`;
