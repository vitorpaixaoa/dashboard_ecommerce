import { combineReducers } from 'redux';
import authReducer from './auth_reducer'
import pedidoReducer from './pedido_reducer';
import clienteReducer from './cliente_reducer'
const reducers = combineReducers({
    auth: authReducer,
    pedido: pedidoReducer,
    cliente: clienteReducer
});

export default reducers;