import {
    GET_VARIACOES,
    GET_VARIACAO,
    LIMPAR_VARIACAO,
    REMOVE_VARIACAO
} from '../Actions/types';

export default ( state = {}, action ) => {
    switch(action.type){
        case GET_VARIACOES:
            return {
                ...state,
                variacoes: action.payload.variacoes
            }
        case GET_VARIACAO:
            return{
                ...state,
                variacao: action.payload.variacao
            }
        case LIMPAR_VARIACAO:
        case REMOVE_VARIACAO:
            return{
                ...state,
                variacao: null
            }
        default:
            return state;
    }
}

