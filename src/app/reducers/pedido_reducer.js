import { GET_PEDIDOS,
        CANCELAR_PEDIDO,
        LIMPAR_PEDIDO,
        GET_PEDIDO } from  '../Actions/types'

export default ( state = {}, action ) => {
    switch(action.type){
        case GET_PEDIDOS:
            return {
                ...state,
                pedidos: action.payload.pedidos
            }
        case GET_PEDIDO:
            return {
                ...state,
                pedido: action.payload
            }
        case LIMPAR_PEDIDO: 
            return {
                ...state,
                pedido: null
            }
            case CANCELAR_PEDIDO:
            return {
                ...state,
                pedido: {
                    ...state.pedido,
                    pedido: {
                        ...state.pedido.pedido,
                        cancelado: action.payload.cancelado
                    }
                }
            }
        default:
            return state;
    }
}