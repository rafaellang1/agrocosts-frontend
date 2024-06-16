import { Link } from 'react-router-dom';
import { Container } from './styles';

import logo from '../../assets/images/logo.svg';
import LogoutButton from '../../pages/Logout/LogoutButton';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo" width="200" />
      </Link>
      <LogoutButton onLogout />
    </Container>
  );
}
