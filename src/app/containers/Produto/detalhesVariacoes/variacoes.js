import React, { Component } from 'react';
import Titulo from '../../../components/Texto/Titulo';

class Variacoes extends Component {
    state={
        variacaoSelecionada:"AKDHHH2KKK12",
        variacoes:[
            {nome: "P", id:"AKDHHH2KKK12"},
            {nome: "M", id:"AKSDDDSASKK12"}
        ]
    }
    render(){
        const { variacoes, variacaoSelecionada} = this.state
        return (
            <div className="variacoes flex vertical flex-center">
                <Titulo tipo="h2" titulo="Variações" />
                {
                    variacoes.map((item, idx) => (
                       <div 
                            onClick={()=> this.setState({ variacaoSelecionada: item.id})}
                            className={` flex flex-center variacao-item ${variacaoSelecionada === item.id ? "variacao-ativa" : ""}`} key={idx}>
                           <span>{item.nome}</span>
                       </div>
                    ))
                }
            </div>
        )
    }
}
export default Variacoes