import {
    GET_PRODUTOS
} from '../Actions/types';

export default ( state = {}, action ) => {
    switch(action.type){
        case GET_PRODUTOS:
            return{
                ...state,
                produtos: action.payload.produtos
            }
        default:
            return state;
    }
}