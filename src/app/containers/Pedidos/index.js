import React,{ Component } from 'react';
import moment from 'moment';

import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa'
import Tabela from '../../components/Tabela/Simples'
import Paginacao from '../../components/Paginacao/Simples'


class Pedidos extends Component {

    state = {
        pesquisa:"",
        atual: 0
    }

    onChangePesquisa= (ev) => this.setState({ pesquisa: ev.target.value })
    changeNumeroAtual = ( atual )  => this.setState({ atual })

    render(){
        
        const {pesquisa} = this.state
        
        //dados
        const dados = [
            {
                "Cliente": "Alan Vitor",
                "Valor Total": 89.90,
                "Data": moment().toISOString(),
                "Situação": "Aguardando Pagamento",
                "botaoDeDetalhes":"pedido/21391daas112221"
            },
            {
                "Cliente": "Cliente 2",
                "Valor Total": 89.90,
                "Data": moment().toISOString(),
                "Situação": "Aguardando Pagamento",
                "botaoDeDetalhes":"pedido/2132131dd2112s1"
            },
            {
                "Cliente": "Cliente 3",
                "Valor Total": 150,
                "Data": moment().toISOString(),
                "Situação": "Aguardando Pagamento",
                "botaoDeDetalhes":"pedido/21391daas1s12s112221"
            }
        ]
        return (
        <div className="Pedidos full-width">
            <div className="Card">
            <Titulo tipo="h1" titulo="Pedidos" />
                <br/>
                <Pesquisa 
                    valor ={pesquisa} 
                    placeholder={"Pesquise pelo nome do cliente."}
                    onChange={(ev)=> this.onChangePesquisa(ev)}
                    onClick={ ()=> alert("Pesuisar")}/>    
                <br/>
                <Tabela 
                    cabecalho={["Cliente","Valor Total", "Data", "Situação"]}
                    dados={dados} />
                <Paginacao atual={this.state.atual} 
                total={120} 
                limite={20} 
                onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual) }/>
            </div>         
        </div>)
    }
}

export default Pedidos