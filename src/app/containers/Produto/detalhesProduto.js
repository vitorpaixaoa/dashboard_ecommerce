import React, { Component } from 'react';

import Button from '../../components/Button/Simples'
import Titulo from '../../components/Texto/Titulo'
import {TextoDados} from '../../components/Texto/Dados'
import InputValor from '../../components/Inputs/InputValor'
import { Link } from 'react-router-dom';
import InputSelect from '../../components/Inputs/Select'

import BlocoImagens from '../../components/Imagens/Bloco'

import { connect } from 'react-redux';
import * as actions from '../../Actions/produtos';
import AlertGeral from '../../components/Alert/Geral';
import Voltar from '../../components/Links/Voltar';


class DetalhesProdutos extends Component{

    generateStateProduto = ( props ) => ({
        nome: props.produto ? props.produto.titulo : "",
        disponibilidade: props.produto ? (props.produto.disponibilidade ? "disponivel" : "indisponivel") : "",
        descricao: props.produto ? props.produto.descricao : "",
        categoria: props.produto ? props.produto.categoria : "",
        fotos: props.produto ? props.produto.fotos : "",
        preco: props.produto ? props.produto.preco : "",
        promocao: props.produto ? props.produto.promocao : "",
        sku: props.produto ? props.produto.sku : "",
    });

    constructor(props){
        super();
        this.state = {
            ...this.generateStateProduto(props),
            aviso: null,
            erros: {}
        }
    }

    componentDidUpdate(prevProps){
        if(
            ( !prevProps.produto && this.props.produto ) ||
            ( prevProps.produto & this.props.produto &&
              prevProps.produto.updatedAt !== this.props.produto.updatedAt  )
        ) this.setState(this.generateStateProduto(this.props))
    }

    updateProduto(){
        const { usuario, produto, updateProduto } = this.props;
        if( !usuario || !produto || !this.validate() ) return null;
        updateProduto(this.state, produto.id, usuario.loja, (error) => {
            this.setState({
                aviso: { 
                    status: !error, 
                    msg: error ? error.message : "Produto Atualizado com sucesso."}
            });
        });
    }


    renderCabecalho(){
        const {nome} = this.state
        const { produto } = this.props
        return(
            <div className="flex">
                <div className="flex-1 flex vertical">
                    <Titulo tipo="h1" titulo={nome}/>
                    { produto && <Link to={`/avaliacoes/${produto._id}`} ><small> Ver Avaliações </small>  </Link>}
                </div>
                <div className="flex-1 flex flex-end">
                    <Button 
                        type="success"
                        label="SALVAR"
                        onClick={()=> this.updateProduto()}
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
                /><br/>
                <br/>
                 <TextoDados
                    chave="Descricao"
                    vertical
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
                <Voltar history={this.props.history} />
                {this.renderCabecalho()}
                <AlertGeral aviso={this.state.aviso} />
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

const mapStateToProps = state => ({
    produto: state.produto.produto,
    categorias: state.categoria.categorias,
    usuario: state.auth.usuario
})

export default connect(mapStateToProps, actions)(DetalhesProdutos);