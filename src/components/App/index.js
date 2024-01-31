import { BrowserRouter } from 'react-router-dom';
import Routes from '../../Routes';

import GlobalStyles from '../../assets/styles/global';

import Header from '../Header';

import { Container } from './styles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Container>
        <Header />
        <Routes />
      </Container>
    </BrowserRouter>

  );
}

export default App;
