import React, { Component } from 'react';
import Voltar from '../../components/Links/Voltar'

import DetalhesDoCliente from './detalhesDoCliente'
import DetalhesDosPedidos from './detalhesDosPedidos'


class Cliente extends Component {
    render(){
        return (
            <div className="Cliente full-width flex vertical">
                <Voltar path="/clientes"/>
                <div className="Card">
                    <DetalhesDoCliente />
                </div>
                 <div className="Sub-Card">
                    <DetalhesDosPedidos />
                    </div>
            </div>

        )
    }
}

export default Cliente