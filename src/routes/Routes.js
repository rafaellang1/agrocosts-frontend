import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Home from '../pages/Home';
import NewProduct from '../pages/NewProduct';
import NewUser from '../pages/NewUser';
import NewFarm from '../pages/NewFarm';
import NewHarvest from '../pages/NewHarvest';
import EditUser from '../pages/EditUser';
import EditFarm from '../pages/EditFarm';
import ListUser from '../pages/ListUser';
import ListFarm from '../pages/ListFarm';
import ListProduct from '../pages/ListProduct';
import EditProduct from '../pages/EditProduct';
import CostReports from '../pages/CostReports';
import HarvestSelect from '../components/HarvestSelect';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="logout" component={Logout} />
      <Route path="/user" component={NewUser} />
      <PrivateRoute path="/listuser/" component={ListUser} />
      <PrivateRoute path="/edituser/:id" component={EditUser} />
      <PrivateRoute path="/" exact component={Home} />
      <PrivateRoute path="/product" component={NewProduct} />
      <PrivateRoute path="/listproduct" component={ListProduct} />
      <PrivateRoute path="/editproduct/:id" component={EditProduct} />
      <PrivateRoute path="/farm" component={NewFarm} />
      <PrivateRoute path="/listfarm/" component={ListFarm} />
      <PrivateRoute path="/editfarm/:id" component={EditFarm} />
      <PrivateRoute path="/harvest" component={NewHarvest} />
      <PrivateRoute path="/harvestselect" component={HarvestSelect} />
      <PrivateRoute path="/costreport/:harvest" component={CostReports} />
    </Switch>
  );
}

// Importa o Switch e o Route (verifica se o react-router-dom ja insta instalado)
// Importa as pastas que vao estar presentes na aplicacao
// Configura os path e os components
// Fim
