import { combineReducers } from 'redux';
import authReducer from './auth_reducer'
const reducers = combineReducers({
    auth: authReducer
});

export default reducers;