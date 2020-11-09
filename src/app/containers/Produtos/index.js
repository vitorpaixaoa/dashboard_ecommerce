import React,{ Component } from 'react';

import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa'
import Tabela from '../../components/Tabela/Simples'
import Paginacao from '../../components/Paginacao/Simples'


class Produtos extends Component {

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
                "Produto": "Mouse 1",
                "Categoria": "Acessórios",
                "Disponível": "sim",
                "botaoDeDetalhes": "/produto/DASQDWQD1212"
            },
            {
                "Produto": "Mouse 2",
                "Categoria": "Acessórios",
                "Disponível": "sim",
                "botaoDeDetalhes": "/produto/SDASDSACCCC"
            },
            {
                "Produto": "Mouse 3",
                "Categoria": "Acessórios",
                "Disponível": "sim",
                "botaoDeDetalhes": "/produto/ASDASFFFSAAS"
            },
            {
                "Produto": "Mouse 4",
                "Categoria": "Acessórios",
                "Disponível": "sim",
                "botaoDeDetalhes": "/produto/ASDSADCZXXAAA"
            },
            {
                "Produto": "Mouse 5",
                "Categoria": "Acessórios",
                "Disponível": "sim",
                "botaoDeDetalhes": "/produto/SADSAXXXSAAS"
            },
        ]
        return (
        <div className="Produtos full-width">
            <div className="Card">
            <Titulo tipo="h1" titulo="Produtos" />
                <br/>
                <div className="flex">
                    <div className="flex-3">
                        <Pesquisa 
                                valor ={pesquisa} 
                                placeholder={"Pesquise pelo nome do produto, descrição ou categoria."}
                                onChange={(ev)=> this.onChangePesquisa(ev)}
                                onClick={ ()=> alert("Pesuisar")}/>    
                        </div>
                        <div className="flex-1 flex vertical">
                                <label>
                                    <small>Ordernar Por:</small>
                                </label>
                            <select defaultValue="">
                                    <option>Aleatório</option>
                                    <option value={"oaA-Z"}>Alfabética A-Z</option>
                                    <option value={"oaZ-A"}>Alfabética Z-A</option>
                                    <option value={"op-menor"}>Menor Preço</option>
                                    <option value={"op-maior"}>Maior Preço</option>
                            </select>
                        </div>
                        <div className="flex-1"></div>
                </div>
                <br/>
                <Tabela 
                    cabecalho={["Produto","Categoria", "Disponibilidade"]}
                    dados={dados} />
                <Paginacao atual={this.state.atual} 
                total={120} 
                limite={20} 
                onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual) }/>
            </div>         
        </div>)
    }
}

export default Produtos