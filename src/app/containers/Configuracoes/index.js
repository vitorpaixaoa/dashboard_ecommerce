import React, { Component } from 'react';
import Titulo from '../../components/Texto/Titulo'
import ButtonSimples from '../../components/Button/Simples'
import {TextoDados} from '../../components/Texto/Dados'
import InputValor from '../../components/Inputs/InputValor'
import ListaDinamicaSimples from '../../components/Listas/ListaDinamicaSimples'

class Configuracoes extends Component {
    state={
        nome: "Loja TI",
        CNPJ: "11.123.456/0001-02",
        email: "atendimento@lojati.com",

        endereco: "Rua teste, 1",
        bairro: "Centro",
        cidade: "São Luís",
        estado: "MA",
        cep:"12345-123",

        telefones:[
            "98 12345-6789",
            "98 98765-4321"
        ]
    }

    renderCabecalho(){
        return(
            <div className="felx">
                <div className="flex-1 flex">
                    <Titulo tipo="h1" titulo="Configurações" />
                </div>
                <div className="flex-1 flex flex-end">
                    <ButtonSimples type="success" onClick={()=> alert("Salvo")}
                    label="Salvar" />
                </div>

            </div>
        )
    }

    renderDadosConfiguracao(){
        const{nome, CNPJ, email} =this.state
        return(
            <div className="dados-configuracao">
                <TextoDados chave="Nome" 
                valor={(
                    <InputValor
                        value={nome} name="nome" noStyle
                        handleSubmit={(valor) => this.setState({nome: valor})} />
                )} />
                <TextoDados chave="CNPJ" 
                valor={(
                    <InputValor
                        value={CNPJ} name="CNPJ" noStyle
                        handleSubmit={(valor) => this.setState({CNPJ: valor})} />
                )} />
                <TextoDados chave="E-mail" 
                valor={(
                    <InputValor
                        value={email} name="email" noStyle
                        handleSubmit={(valor) => this.setState({email: valor})} />
                )} />
            </div>
        )
    }
    renderDadosEndereco(){
        const{endereco, bairro, cidade, cep, estado} =this.state
        return(
            <div className="dados-configuracao">
                <Titulo  tipo="h3" titulo="Endereço"/>
                <TextoDados chave="Endereço" 
                valor={(
                    <InputValor 
                        value={endereco} name="endereco" noStyle
                        handleSubmit={(valor) => this.setState({endereco: valor})} />
                )} />
                <TextoDados chave="Bairro" 
                valor={(
                    <InputValor
                        value={bairro} name="bairro" noStyle
                        handleSubmit={(valor) => this.setState({bairro: valor})} />
                )} />
                <TextoDados chave="Cidade" 
                valor={(
                    <InputValor
                        value={cidade} name="cidade" noStyle
                        handleSubmit={(valor) => this.setState({cidade: valor})} />
                )} />
                <TextoDados chave="Estado" 
                valor={(
                    <InputValor
                        value={estado} name="estado" noStyle
                        handleSubmit={(valor) => this.setState({estado: valor})} />
                )} />
                <TextoDados chave="CEP" 
                valor={(
                    <InputValor
                        value={cep} name="cep" noStyle
                        handleSubmit={(valor) => this.setState({cep: valor})} />
                )} />
            </div>
        )
    }

    onAdd = (valor) =>{
        if(!valor) return;
        const {telefones} = this.state
        this.setState({ telefones: [...telefones, valor]})
    }

    onRemove = (idx) => {
        if(!idx) return;
        const {telefones} = this.state
        this.setState({ telefones: telefones.filter((item, index) => index !== idx )})

    }

    renderTelefones(){
        const {telefones} = this.state
        return(
            <div className="dados-telefones" >
                <Titulo  tipo="h3" titulo="Telefones"/>
                <ListaDinamicaSimples 
                dados={telefones}
                onAdd={this.onAdd}
                onRemove = {this.onRemove} />
            </div>
        )
    }


    render(){
        return(
            <div className="Configuracoes full-width">
                <div className="Card">
                    {this.renderCabecalho()}
                    <div className="flex horizontal">
                        <div className="flex-1">
                            {this.renderDadosConfiguracao()}
                        </div>
                    </div>
                    <br/> <hr/> <br/>
                    <div className="flex horizontal">
                        <div className="flex-1"> 
                            {this.renderDadosEndereco()}
                        </div>
                        <div className="flex-1"> 
                            {this.renderTelefones()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Configuracoes