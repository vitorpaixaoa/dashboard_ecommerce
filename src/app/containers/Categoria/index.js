import React, { Component } from 'react';
import Voltar from '../../components/Links/Voltar'
import DetalhesCategoria from './detalhesCategoria'
import ListaDeProdutos from './listaDeProdutos'

class Categoria extends Component {
    render(){
        return(
            <div className="Categoria full-width">
                <Voltar path="/categorias"/>
                    <div className="Card">
                        <div>
                            <DetalhesCategoria />
                        </div>
                        <div>
                            <ListaDeProdutos />
                        </div>
                    </div>
            </div>
        )
    }
}

export default Categoria