import { BrowserRouter } from 'react-router-dom';
import { Container } from '../Header/styles';

import Header from '../Header';

import GlobalStyles from '../../assets/styles/global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Container>
        <Header />
      </Container>
    </BrowserRouter>

  );
}

export default App;
