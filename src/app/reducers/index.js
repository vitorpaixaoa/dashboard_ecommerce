import { combineReducers } from 'redux';
import authReducer from './auth_reducer'
import pedidoReducer from './pedido_reducer';
const reducers = combineReducers({
    auth: authReducer,
    pedido: pedidoReducer
});

export default reducers;