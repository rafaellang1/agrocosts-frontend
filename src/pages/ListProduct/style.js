import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 32px;
  position: relative;
  margin-bottom: 50px;

`;

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

  a {
    color: green;
    text-decoration: none;
    font-weight: bold;
    border: 2px solid green;;
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: green;
      color: #FFF;
    }
  }
  `;

export const Card = styled.div`
  background: #FFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* toda vez que tiver um elemento (card) seguindo do outro, adicione o margin */
  & + & {
    margin-top: 16px;
  }

  .info {
    display: flex;
    justify-content: space-around;
    padding: 0 20px;
    .user-name {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      strong {
        font-size: 22px;
      }

      small {
        /* background: #b4d8b4; */
        color: #008000;
        font-weight: 500;
        text-transform: uppercase;
        padding: 4px 0;
        border-radius: 4px;
        font-size: 14px;
        /* margin-left: 8px; */
      }
    }

    span {
      display: block;
      font-size: 14px;
      margin-bottom: 4px;
      color: #767676;
    }
    .actions {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin-left: 120px;

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
  }
`;
