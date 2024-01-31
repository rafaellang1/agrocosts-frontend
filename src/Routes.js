import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewProduct from './pages/NewProduct';
import NewUser from './pages/NewUser';
import Farm from './pages/Farm';
import Harvest from './pages/Harvest';
import Report from './pages/Report';

export default function Routes() {
  return (
    // Switch garante que teremos apenas uma rota por vez na aplicacao, e nunca mais de uma
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product" component={NewProduct} />
      <Route path="/user" component={NewUser} />
      <Route path="/farm" component={Farm} />
      <Route path="/harvest" component={Harvest} />
      <Route path="/reports" component={Report} />
    </Switch>
  );
}

// Importa o Switch e o Route (verifica se o react-router-dom ja insta instalado)
// Importa as pastas que vao estar presentes na aplicacao
// Configura os path e os components
// Fim
