import React,{ Component } from 'react';

import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa'
import moment from 'moment';

class Pedidos extends Component {

    state = {
        pesquisa:""
    }

    onChangePesquisa= (ev) => this.setState({ pesquisa: ev.target.value })


    render(){
        
        const {pesquisa} = this.state
        
        //dados
        const dados = [
            {
                "Cliente": "Cliente 1",
                "Valor Total": 89.90,
                "Data": moment().toISOString(),
                "Situação": "Aguardando Pagamento",
                "botaoDeDetalhes":"/pedido/21391daas112221"
            }
        ]
        return (
        <div className="Pedidos">
                <Titulo tipo="h1" titulo="Pedidos" />
                <br/>
                <Pesquisa 
                valor ={pesquisa} 
                placeholder={"Pesquise pelo nome do cliente."}
                onChange={(ev)=> this.onChangePesquisa(ev)}/>    
                <br/>
                <Tabela 
                    cabecalho={["Cliente","Valor Total", "Data", "Situação"]}
                    dados={dados} />
                <Paginacao/>

        </div>)
    }
}

export default Pedidos