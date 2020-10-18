import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import { HashRouter as Router, Route } from 'react-router-dom';

import base from './containers/HOC/Base';
import Pedidos from './containers/Pedidos/index';

function App() {
  return (
    <Provider store={store}>
      <Router>
          <div className="App">
            <Route path={"/"} exact component = {base(Pedidos)}/>
          </div>
      </Router>
    </Provider>
  );
}

export default App;
