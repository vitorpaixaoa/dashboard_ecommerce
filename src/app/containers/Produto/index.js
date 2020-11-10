import React, { Component } from 'react';
import Voltar from '../../components/Links/Voltar'
import DetalhesProduto from './detalhesProduto'
import DetalhesVariacoes from './detalhesVariacoes';

class Produto extends Component {
    render(){
        return(
            <div className="Produto full-width flex vertical">
                <Voltar path="/produtos" />
                <div className="Card">
                    <DetalhesProduto />
                </div>
                <div className="">
                    <DetalhesVariacoes />
                </div>

            </div>
        )
    }
}

export default Produto