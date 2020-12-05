import React, { Component } from 'react';
import Titulo from '../../../components/Texto/Titulo';

import { connect } from 'react-redux';
import * as actions from '../../../Actions/variacao';


class Variacoes extends Component {
    state={
        variacaoSelecionada:"",
        variacoes: []
    }

    getVariacoes( props ){
        const { produto, usuario, getVariacoes } = props;
        if( !usuario || !produto ) return null;
        getVariacoes(produto._id, usuario.loja );
    }

    componentDidMount(){
        this.getVariacoes(this.props);
    }

    componentDidUpdate(prevProps){
        if(
            ( !prevProps.usuario || !prevProps.produto ) &&
            this.props.usuario && this.props.produto
        ) this.getVariacoes(this.props);
    }

    getVariacao(id){
        const { produto, usuario, getVariacao, limparVariacao } = this.props;
        limparVariacao();
        if( produto && usuario && id !== "novo" ) getVariacao(id, produto._id, usuario.loja);
        this.setState({ variacaoSelecionada: id !== "novo" ? id : "" });
    }

    render(){
        const { variacaoSelecionada} = this.state;
        const { variacoes } = this.props;
        return (
            <div className="variacoes flex vertical flex-center">
                <Titulo tipo="h2" titulo="Variações" />
                {
                    (variacoes || []).map((item, idx) => (
                       <div 
                            onClick={()=> this.getVariacao(item._id)}
                            className={` flex flex-center variacao-item ${variacaoSelecionada === item._id ? "variacao-ativa" : ""}`} key={idx}>
                           <span>{item.nome}</span>
                       </div>
                    ))
                }
                <div
                    onClick={() => this.getVariacao("novo")}
                    className={` flex flex-center variacao-item ${ !variacaoSelecionada ? "variacao-ativa" : ""}`}>    
                    <span> + NOVO </span>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    variacoes: state.variacao.variacoes,
    variacao: state.variacao.variacao,
    produto: state.produto.produto,
    usuario: state.auth.usuario
});

export default connect(mapStateToProps, actions )(Variacoes)