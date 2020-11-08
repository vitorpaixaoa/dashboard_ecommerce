import React,{ Component } from 'react';

import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa'
import Tabela from '../../components/Tabela/Simples'
import Paginacao from '../../components/Paginacao/Simples'


class Clientes extends Component {

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
                "Cliente": "Cliente 1",
                "E-mail": "cliente1@email.com",
                "Telefone": "98 12345678",
                "CPF": "123.456.789-10",
                "botaoDeDetalhes":"cliente/cliente1@email.com"
            },
            {
                "Cliente": "Cliente 2",
                "E-mail": "cliente2@email.com",
                "Telefone": "98 12345678",
                "CPF": "123.456.789-10",
                "botaoDeDetalhes":"cliente/cliente2@email.com"
            },
            {
                "Cliente": "Cliente 3",
                "E-mail": "cliente3@email.com",
                "Telefone": "98 12345678",
                "CPF": "123.456.789-10",
                "botaoDeDetalhes":"cliente/cliente3@email.com"
            },
            {
                "Cliente": "Cliente 4",
                "E-mail": "cliente4@email.com",
                "Telefone": "98 12345678",
                "CPF": "123.456.789-10",
                "botaoDeDetalhes":"cliente/cliente4@email.com"
            }
        ]
        return (
        <div className="Clientes full-width">
            <div className="Card">
            <Titulo tipo="h1" titulo="Clientes" />
                <br/>
                <Pesquisa 
                    valor ={pesquisa} 
                    placeholder={"Pesquise pelo nome do cliente."}
                    onChange={(ev)=> this.onChangePesquisa(ev)}
                    onClick={ ()=> alert("Pesuisar")}/>    
                <br/>
                <Tabela 
                    cabecalho={["Cliente","E-mail", "Telefone", "CPF"]}
                    dados={dados} />
                <Paginacao atual={this.state.atual} 
                total={120} 
                limite={20} 
                onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual) }/>
            </div>         
        </div>)
    }
}

export default Clientes