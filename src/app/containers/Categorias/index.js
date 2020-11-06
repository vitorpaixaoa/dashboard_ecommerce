import React,{ Component } from 'react';
import moment from 'moment';

import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa'
import Tabela from '../../components/Tabela/Simples'
import Paginacao from '../../components/Paginacao/Simples'


class Categorias extends Component {

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
                "Categoria": "Acessórios",
                "Qtd. de Produtos": 15,
                "botaoDeDetalhes": "/categoria/acessorios"
            },
            {
                "Categoria": "Computadores",
                "Qtd. de Produtos": 5,
                "botaoDeDetalhes": "/categoria/Computadores"
            },
            {
                "Categoria": "Gamers",
                "Qtd. de Produtos": 10,
                "botaoDeDetalhes": "/categoria/Gamers"
            },
            {
                "Categoria": "Placa de Video",
                "Qtd. de Produtos": 10,
                "botaoDeDetalhes": "/categoria/placadevideo"
            },
            {
                "Categoria": "Processadores",
                "Qtd. de Produtos": 9,
                "botaoDeDetalhes": "/categoria/Processadores"
            },
        ]
        return (
        <div className="Categorias full-width">
            <div className="Card">
            <Titulo tipo="h1" titulo="Categorias" />
                <br/>
                <Pesquisa 
                    valor ={pesquisa} 
                    placeholder={"Pesquise aqui pelo nome da categoria."}
                    onChange={(ev)=> this.onChangePesquisa(ev)}
                    onClick={ ()=> alert("Pesuisar")}/>    
                <br/>
                <Tabela 
                    cabecalho={["Categoria", "Qtd. de Produtos"]}
                    dados={dados} />
                <Paginacao atual={this.state.atual} 
                total={120} 
                limite={20} 
                onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual) }/>
            </div>         
        </div>)
    }
}

export default Categorias