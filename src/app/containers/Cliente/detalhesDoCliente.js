import React from 'react';
import Titulo from '../../components/Texto/Titulo';
import ButtonSimples from '../../components/Button/Simples'
import { TextoDados } from '../../components/Texto/Dados';
import InputValor from '../../components/Inputs/InputValor';

class DetalhesDoCliente extends React.Component{


    state={
        nome: "Cliente 1",
        CPF: "111.222.333-45",
        telefone: "12 123456789",
        dataDeNascimento:"10/01/1995",
        email:"cliente1@email.com",

        endereco: "Rua teste 123",
        bairro: "Centro",
        cidade: "Sao Luis",
        estado: "MA",
        cep: "65052735"
    }

    handleSubmit =(field, value) => {
        this.setState({ [field]: value})
    }


    renderCabecalho(){
        const {nome} = this.state
        return(
            <div className="flex">
            <div className="flex-1 flex">
                <Titulo tipo="h1" titulo={nome}/>
            </div>
            <div className="flex-1 flex flex-end">
                <ButtonSimples 
                    onClick={() => alert("Salvo!")}
                    label="Salvar"
                    type="success"
                />
                <ButtonSimples 
                    onClick={() => alert("Removido!")}
                    label="Remover"
                    type="danger"
                />
            </div>
        </div>
        )
        
    }

    renderDetalhesCadastro(){
        const { nome, CPF, email, telefone, dataDeNascimento} = this.state;
        return(
        <div className="Detalhes-do-Cadastro">
            <TextoDados 
            chave="Nome"
            valor={(
                <InputValor 
                    name="nome" noStyle
                    handleSubmit= {(valor) => this.handleSubmit("nome", valor)}
                    value={nome} />
            )}/>
            <TextoDados 
            chave="CPF"
            valor={(
                <InputValor 
                    name="CPF" noStyle
                    handleSubmit= {(valor) => this.handleSubmit("CPF", valor)}
                    value={CPF} />
            )}/>
            <TextoDados 
            chave="Telefone"
            valor={(
                <InputValor 
                    name="Telefone" noStyle
                    handleSubmit= {(valor) => this.handleSubmit("telefone", valor)}
                    value={telefone} />
            )}/>
            <TextoDados 
            chave="E-Mails"
            valor={(
                <InputValor 
                    name="email" noStyle
                    handleSubmit= {(valor) => this.handleSubmit("email", valor)}
                    value={email} />
            )}/>
            <TextoDados 
            chave="Data de Nascimento"
            valor={(
                <InputValor 
                    name="dataDeNascimento" noStyle
                    handleSubmit= {(valor) => this.handleSubmit("dataDeNascimento", valor)}
                    value={dataDeNascimento} />
            )}/>
            
        </div>

        )
        
    }

    renderDetalhesEntrega(){
        const { endereco, bairro, cidade, estado, cep} = this.state;
        return(
        <div className="Detalhes-do-Entrega">
            <TextoDados 
            chave="Endereco"
            valor={(
                <InputValor 
                    name="endereco" noStyle
                    handleSubmit= {(valor) => this.handleSubmit("endereco", valor)}
                    value={endereco} />
            )}/>
            <TextoDados 
            chave="Bairro"
            valor={(
                <InputValor 
                    name="bairro" noStyle
                    handleSubmit= {(valor) => this.handleSubmit("bairro", valor)}
                    value={bairro} />
            )}/>
            <TextoDados 
            chave="Cidade"
            valor={(
                <InputValor 
                    name="cidade" noStyle
                    handleSubmit= {(valor) => this.handleSubmit("cidade", valor)}
                    value={cidade} />
            )}/>
            <TextoDados 
            chave="Estado"
            valor={(
                <InputValor 
                    name="estado" noStyle
                    handleSubmit= {(valor) => this.handleSubmit("estado", valor)}
                    value={estado} />
            )}/>
            <TextoDados 
            chave="CEP"
            valor={(
                <InputValor 
                    name="cep" noStyle
                    handleSubmit= {(valor) => this.handleSubmit("cep", valor)}
                    value={cep} />
            )}/>
            
        </div>

        )
    }


    render(){
        return (
            <div className="DetalhesDoCliente">
                {this.renderCabecalho()}
                <div className="flex horizontal">
                    <div className="flex-2 flex vertical">
                        { this.renderDetalhesCadastro()}
                    </div>
                    <div className="flex-1 flex vertical">
                        {this.renderDetalhesEntrega()}
                    </div>
                </div>
            </div>
        )
    }
}

export default DetalhesDoCliente