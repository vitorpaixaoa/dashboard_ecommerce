import { GET_PEDIDOS } from  '../Actions/types'

export default ( state = {}, action ) => {
    switch(action.type){
        case GET_PEDIDOS:
            console.log(action.payload.pedidos)
            return {
                ...state,
                pedidos: action.payload.pedidos
            }
            default:
                return state;
    }
}