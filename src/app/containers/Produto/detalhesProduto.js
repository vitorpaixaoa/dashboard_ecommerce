import React, { Component } from 'react';

import Button from '../../components/Button/Simples'
import Titulo from '../../components/Texto/Titulo'
import {TextoDados} from '../../components/Texto/Dados'
import InputValor from '../../components/Inputs/InputValor'
import { Link } from 'react-router-dom';
import InputSelect from '../../components/Inputs/Select'

import BlocoImagens from '../../components/Imagens/Bloco'

class DetalhesProdutos extends Component{
    state={
        nome:"Produto 1",
        disponibilidade:"disponível",
        descricao:"",
        imagens:[
            "https://dummyimage.com/100x100/bd772c/0011ff.jpg&text=Produto+Teste",
            "https://dummyimage.com/100x100/bd772c/0011ff.jpg&text=Produto+Teste",
            "https://dummyimage.com/100x100/bd772c/0011ff.jpg&text=Produto+Teste",
            "https://dummyimage.com/100x100/bd772c/0011ff.jpg&text=Produto+Teste",
            "https://dummyimage.com/100x100/bd772c/0011ff.jpg&text=Produto+Teste",
            "https://dummyimage.com/100x100/bd772c/0011ff.jpg&text=Produto+Teste"
        ]
    }


    renderCabecalho(){
        const {nome} = this.state
        return(
            <div className="flex">
                <div className="flex-1 flex vertical">
                    <Titulo tipo="h1" titulo={nome}/>
                    <Link to="/avaliacoes/IUAHSUDAH1JHDU1I" ><small> Ver Avaliações </small>  </Link>
                </div>
                <div className="flex-1 flex flex-end">
                    <Button 
                        type="success"
                        label="SALVAR"
                        onClick={()=> alert("SALVO")}
                    />
                </div>
            </div>
        )
    }

    handleSubmit =(field, value) => {
        this.setState({ [field]: value})
    }

    renderDados(){
        const { nome, disponibilidade, descricao } = this.state
        return (
            <div className="Dados-Produto">
                <TextoDados
                    chave="Nome"
                    valor={(
                        <InputValor 
                        handleSubmit= {(valor) => this.handleSubmit("nome", valor)}
                        value={nome} noStyle
                        />
                    )}
                />
                <TextoDados
                    chave="Disponibilidade"
                    valor={(
                        <InputSelect 
                            name="disponibilidade"
                            onChange={(ev) => this.setState({ disponibilidade: ev.target.value})}
                            value={disponibilidade}
                            opcoes={[
                                {label: "Disponivel", value: "disponivel"},
                                {label: "Indisponivel", value: "indisponivel"}
                ]}
             />
                    )}
                />
                <br/>
                 <TextoDados
                    chave="Descricao"
                    valor={(
                        <textarea 
                            name={"descricao"} 
                            onChange={(ev)=> this.setState({descricao: ev.target.value})}
                            value={descricao}
                            rows="10"
                            style={{resize: "none"}}/>
                    )}
                />
            </div>
        )
    }

    onRemove = (id) => {
        const {imagens} = this.state;
        this.setState({ imagens: imagens.filter((i, idx) => idx !== id )})
    }

    renderImagens(){
        const {imagens} = this.state
        return(
            <div className="dados-de-imagens">
                <BlocoImagens
                    imagens={imagens}
                    handleSubmit={()=> alert("Enviado")}
                    onRemove={this.onRemove}
                 />
            </div>
        )
    }
    render(){
        return(
            <div className="Detalhes-do-Produto">
                {this.renderCabecalho()}
                <br/>
                <div className="flex horizontal">
                    <div className="flex-1 flex vertical">
                        {this.renderDados()}
                    </div>
                    <div className="flex-1 flex vertical">
                        {this.renderImagens()}
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default DetalhesProdutos;