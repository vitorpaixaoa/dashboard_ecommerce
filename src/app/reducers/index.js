import { combineReducers } from 'redux';
import authReducer from './auth_reducer'
import pedidoReducer from './pedido_reducer';
import clienteReducer from './cliente_reducer'
import categoriaReducer from './categoria_reducer'
import produtoReducer from './produto_reducer'

const reducers = combineReducers({
    auth: authReducer,
    pedido: pedidoReducer,
    cliente: clienteReducer,
    categoria: categoriaReducer,
    produto: produtoReducer
});

export default reducers;