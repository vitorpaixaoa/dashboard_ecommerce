import React,{Component} from 'react'

import DetalhesDaEntrega from './DetalhesDaEntrega'
import DetalhesDoPagamento from './DetalhesDoPagamento'
import DetalhesDoPedido from './DetalhesDoPedido'


class Pedido extends Component {
    render(){
        return(
            <div className="Pedidos flex vertical">
                <div>
                    <DetalhesDoPedido />
                </div>
                <div className="flex horizontal">
                    <div className="flex-1 flex vertical">
                        <DetalhesDaEntrega />
                    </div>
                    <div className="flex-1 flex vertical">
                        <DetalhesDoPagamento />
                    </div>
                </div>
            </div>
        )
    }
}
export default Pedido;