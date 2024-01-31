import logo from '../../assets/images/logo.svg';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      {/* logo esta oculta por conta de alinhamento de divs */}
      <img src={logo} alt="logo" width="450" />

    </Container>
  );
}
