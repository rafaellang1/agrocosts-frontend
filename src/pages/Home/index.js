import logo from '../../assets/images/logo.svg';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <img src={logo} alt="logo" width="450" />
    </Container>
  );
}

fetch('http://localhost:3001/products')
  .then((response) => {
    console.log('response', response);
  })

  .catch((error) => {
    // só cai no catch se for problema de conexao, caso for status code o catch nao captura
    console.log('erro', error);
  });
