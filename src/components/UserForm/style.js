import styled from 'styled-components';

export const Form = styled.form``;

export const ButtonContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between; /* Distribui o espaço entre os botões */
  align-items: center;

  button, a {
    flex: 1; /* botão e link ocupam o mesmo espaço */
    margin: 0 5px; /* Adiciona espaçamento entre os botões */
    display: flex;
    justify-content: center;
    text-decoration: none;
  }

  /* Remove a margem da esquerda do primeiro botão e da direita do último botão */
  button:first-child, a:first-child {
    margin-left: 0;
  }
  button:last-child, a:last-child {
    margin-right: 0;
  }
`;
