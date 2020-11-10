import React, { Component } from 'react';
import  Variacoes  from "./variacoes";
import OpcaoVariacao from './opcaoVariacao'

class DetalhesVariacoes extends Component {
    render(){
        return(
            <div className="Detalhes-variacoes flex">
                <div className="Sub-Card flex-1">
                    <Variacoes />
                </div>
                <div className="Sub-Card flex-8">
                    <OpcaoVariacao />
                </div>
            </div>
        )
    }
}

export default DetalhesVariacoes