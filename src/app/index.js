import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import { HashRouter as Router, Route } from 'react-router-dom';

import { initApp } from './Actions'

import base from './containers/HOC/Base';
//CONTAINER COM BASE
import Pedidos from './containers/Pedidos/';
import Pedido from './containers/Pedido/';
import Clientes from './containers/Clientes'
import Cliente from './containers/Cliente'

import Categorias from './containers/Categorias'
import Categoria from './containers/Categoria'

import Avaliacoes from './containers/Avaliacoes'

import Produtos from './containers/Produtos';
import Produto from './containers/Produto';
import Avaliacao from './containers/Avaliacao';



import Configuracoes from './containers/Configuracoes';
import Perfil from './containers/Perfil';


//CONTAINER SEM BASE
import Login from './containers/Login';
import RecuperarSenha from './containers/RecuperarSenha/index';
import ResetarSenha from './containers/RecuperarSenha/ResetarSenha';


class App extends Component {  

  componentDidMount() {
    initApp();
  }

  render() { 
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
            
            
            <Route path={"/produtos"}  component = {base(Produtos)}/>
            <Route path={"/produto/:id"}  component = {base(Produto)}/>
            
            <Route path={"/avaliacoes/:id"}  component = {base(Avaliacoes)}/>
            <Route path={"/avaliacao/:id"}  component = {base(Avaliacao)}/>

            <Route path={"/configuracoes"}  component = {base(Configuracoes)}/>

            <Route path={"/perfil"}  component = {base(Perfil)}/>




            <Route path={"/login"}  component = {Login}/>
            <Route path={"/recuperar-senha"}  component = {RecuperarSenha}/>
            <Route path={"/resetar-senha/:token"}  component = {ResetarSenha}/>
          </div>
      </Router>
    </Provider>
  );
}
}

export default App;
