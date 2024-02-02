import logo from '../../assets/images/logo.svg';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <img src={logo} alt="logo" width="450" />
    </Container>
  );
}
