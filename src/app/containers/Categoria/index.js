import React, { Component } from 'react';

import DetalhesCategoria from './detalhesCategoria'
import ListaDeProdutos from './listaDeProdutos'

class Categoria extends Component {
    render(){
        return(
            <div className="Categoria full-width">
                    <div className="Card">
                        <div>
                            <DetalhesCategoria />
                        </div>
                        <div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Categoria