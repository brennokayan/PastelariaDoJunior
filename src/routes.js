import React from "react";
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Pedidos from './pages/PedidoMiniSalgados'  
import Home from './pages/Home'
function Routes(){
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={() => Home()} />
            <Route exact path='/minis-salgados' component={() => Pedidos()}/>
        </Switch>
    </BrowserRouter>
  );
}
  


export default Routes;