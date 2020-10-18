import { combineReducers } from 'redux';

const reducers = combineReducers({
    root:(state, action) => state || {}
});

export default reducers;