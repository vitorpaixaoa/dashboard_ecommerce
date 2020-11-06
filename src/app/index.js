import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import { HashRouter as Router, Route } from 'react-router-dom';

import base from './containers/HOC/Base';
//CONTAINER COM BASE
import Pedidos from './containers/Pedidos/';
import Pedido from './containers/Pedido/';
import Clientes from './containers/Clientes'
import Cliente from './containers/Cliente'

import Categorias from './containers/Categorias'
import Categoria from './containers/Categoria'


//CONTAINER SEM BASE
import Login from './containers/Login';
import RecuperarSenha from './containers/RecuperarSenha/index';
import ResetarSenha from './containers/RecuperarSenha/ResetarSenha';



function App() {
  return (
    <Provider store={store}>
      <Router>
          <div className="App">
            <Route path={"/"} exact component = {base(Pedidos)}/>
            <Route path={"/pedido/:id"} exact component = {base(Pedido)}/>
            
            <Route path={"/clientes"}  component = {base(Clientes)}/>
            <Route path={"/cliente/:email"}  component = {base(Cliente)}/>
           
            <Route path={"/categorias"}  component = {base(Categorias)}/>
            <Route path={"/categoria/:id"}  component = {base(Categoria)}/>

            <Route path={"/login"}  component = {Login}/>
            <Route path={"/recuperar-senha"}  component = {RecuperarSenha}/>
            <Route path={"/resetar-senha/:token"}  component = {ResetarSenha}/>
          </div>
      </Router>
    </Provider>
  );
}

export default App;
