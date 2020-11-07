import React,{ Component } from 'react';

import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa'
import Tabela from '../../components/Tabela/Simples'
import Paginacao from '../../components/Paginacao/Simples'


class ListaDeProdutos extends Component {

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
                "Produto": "Mouse",
                "Estoque": 20,
                "Disponibilidade": "sim",
                "botaoDeDetalhes": "/produto/91878913U2F"
            },
            {
                "Produto": "Mouse 2",
                "Estoque": 1,
                "Disponibilidade": "sim",
                "botaoDeDetalhes": "/produto/21312FFF1DS"
            },
            {
                "Produto": "Mouse 3 ",
                "Estoque": 52,
                "Disponibilidade": "não",
                "botaoDeDetalhes": "/produto/123123D123"
            },
            {
                "Produto": "Mouse 4",
                "Estoque": 12,
                "Disponibilidade": "sim",
                "botaoDeDetalhes": "/produto/DASQDWQD1212"
            },
        ]
        return (
        <div className="ListaDeProdutos">
            <br/><br/><br/>
                   <Titulo tipo="h3" titulo="Produtos da Categoria" />
                <br/>
                <Pesquisa 
                    valor ={pesquisa} 
                    placeholder={"Pesquise aqui pelo nome do produto ou descriçao."}
                    onChange={(ev)=> this.onChangePesquisa(ev)}
                    onClick={ ()=> alert("Pesuisar")}/>    
                <br/>
                <Tabela 
                    cabecalho={["Produto", "Estoque", "Disponibilidade"]}
                    dados={dados} />
                <Paginacao atual={this.state.atual} 
                total={120} 
                limite={20} 
                onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual) }/>
        </div>)
    }
}

export default ListaDeProdutos

