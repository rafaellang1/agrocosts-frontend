import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  /* opacity: 30%; */
`;

export const Header = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    background: #ddd;
    align-items: center;
    text-align: center;
    font-size: 16px;
    color: #000;


    & + & {
    margin-left: 24px;

  }

    /* strong {
      margin-top: 555px;
    } */
`;

export const Card = styled.div`
  /* box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px; */
  padding: 8px;
  width: 210px;

  & + & {
    margin-left: 16px;

  }
  .head a {
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    color: #000;

    img {
      margin-bottom: 10px;
    }
  }

`;
