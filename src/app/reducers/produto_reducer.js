import {
    GET_PRODUTOS,
    GET_PRODUTO
} from '../Actions/types';

export default ( state = {}, action ) => {
    switch(action.type){
        case GET_PRODUTOS:
            return{
                ...state,
                produtos: action.payload.produtos
            }
        case GET_PRODUTO:
            return{
                ...state,
                produto: action.payload.produto
            }
        default:
            return state;
    }
}