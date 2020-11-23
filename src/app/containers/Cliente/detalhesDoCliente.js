import React from 'react';
import Titulo from '../../components/Texto/Titulo';
import ButtonSimples from '../../components/Button/Simples'
import { TextoDados } from '../../components/Texto/Dados';
import InputValor from '../../components/Inputs/InputValor';
import moment from 'moment'

import { connect } from 'react-redux'
import * as actions from '../../Actions/clientes'
import AlertGeral from '../../components/Alert/Geral'
import Voltar from '../../components/Links/Voltar';

class DetalhesDoCliente extends React.Component{


    generateStateCliente = (props) => ({
        nome: props.cliente ? props.cliente.nome : "",
        CPF: props.cliente ? props.cliente.cpf : "",
        telefone: props.cliente ? props.cliente.telefones[0] : "",
        dataDeNascimento: props.cliente ? moment(props.cliente.dataDeNascimento).format("DD/MM/YYYY") : "",
        email: props.cliente && props.cliente.usuario ? props.cliente.usuario.email : "",

        endereco: props.cliente && props.cliente.endereco ? props.cliente.endereco.local : "" ,
        numero: props.cliente && props.cliente.endereco ? props.cliente.endereco.numero : "" ,
        bairro: props.cliente && props.cliente.endereco ? props.cliente.endereco.bairro : "" ,
        cidade: props.cliente && props.cliente.endereco ? props.cliente.endereco.cidade : "" ,
        estado: props.cliente && props.cliente.endereco ? props.cliente.endereco.estado : "" ,
        cep: props.cliente && props.cliente.endereco ? props.cliente.endereco.CEP : "" 
    });


    constructor( props ){
        super();
        this.state  = {
            ...this.generateStateCliente(props),
            aviso: null,
            errors: {}
        }
    }
    
    componentDidUpdate(prevProps){
        if(
            ( !prevProps.cliente && this.props.cliente ) || 
            ( prevProps.cleinte && this.props.cliente && prevProps.cliente.updatedAt !== this.props.cliente.updatedAt )
        ) this.setState(this.generateStateCliente(this.props))
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
        const { endereco, bairro, numero, cidade, estado, cep} = this.state;
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
            chave="Número"
            valor={(
                <InputValor 
                    name="numero" noStyle
                    handleSubmit= {(valor) => this.handleSubmit("numero", valor)}
                    value={numero} />
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
                <Voltar history={this.props.history} />
                {this.renderCabecalho()}
                <AlertGeral aviso={this.state.aviso}  />
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


const mapStateToProps = state => ({
    cliente: state.cliente.cliente,
    usuario: state.auth.usuario 
})

export default connect(mapStateToProps, actions)(DetalhesDoCliente)