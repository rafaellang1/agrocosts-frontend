import { BrowserRouter } from 'react-router-dom';
import Routes from '../../routes/Routes';

import GlobalStyles from '../../assets/styles/global';

import Header from '../Header';
import PageHeader from '../PageHeader';

import { Container, Content } from './styles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Container>
        <Header />
        <PageHeader />
        <Content>
          <Routes />
        </Content>
      </Container>
    </BrowserRouter>

  );
}

export default App;
