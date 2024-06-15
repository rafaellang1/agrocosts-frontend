import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewProduct from './pages/NewProduct';
import NewUser from './pages/NewUser';
import NewFarm from './pages/NewFarm';
import NewHarvest from './pages/NewHarvest';
import EditUser from './pages/EditUser';
import EditFarm from './pages/EditFarm';
import ListUser from './pages/ListUser';
import ListFarm from './pages/ListFarm';
import ListProduct from './pages/ListProduct';
import EditProduct from './pages/EditProduct';
import CostReports from './pages/CostReports';
import HarvestSelect from './components/HarvestSelect';

export default function Routes() {
  return (
    // Switch garante que teremos apenas uma rota por vez na aplicacao, e nunca mais de uma
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product" component={NewProduct} />
      <Route path="/listproduct" component={ListProduct} />
      <Route path="/editproduct/:id" component={EditProduct} />
      <Route path="/user" component={NewUser} />
      <Route path="/listuser/" component={ListUser} />
      <Route path="/edituser/:id" component={EditUser} />
      <Route path="/farm" component={NewFarm} />
      <Route path="/listfarm/" component={ListFarm} />
      <Route path="/editfarm/:id" component={EditFarm} />
      <Route path="/harvest" component={NewHarvest} />

      <Route path="/harvestselect" component={HarvestSelect} />
      <Route path="/costreport/:harvest" component={CostReports} />
    </Switch>
  );
}

// Importa o Switch e o Route (verifica se o react-router-dom ja insta instalado)
// Importa as pastas que vao estar presentes na aplicacao
// Configura os path e os components
// Fim
