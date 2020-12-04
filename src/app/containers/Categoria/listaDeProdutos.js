import React,{ Component } from 'react';

import Titulo from '../../components/Texto/Titulo';
import Tabela from '../../components/Tabela/Simples'
import Paginacao from '../../components/Paginacao/Simples'

import {  connect } from 'react-redux';
import * as actions from '../../Actions/categorias';

class ListaDeProdutos extends Component {

    state = {
        pesquisa:"",
        atual: 0,
        limit: 5
    }

    getCategoriasProdutos(){
        const { atual, limit } = this.state;
        const { usuario, categoria } = this.props;

        if(!usuario || !categoria) return null;
        this.props.getCategoriasProdutos(categoria._id, atual, limit, usuario.loja);
    }

    changeNumeroAtual = ( atual )  => this.setState({ atual }, () => this.getCategoriasProdutos(this.props));

    componentDidMount(){
        this.getCategoriasProdutos();
    }

    componentDidUpdate(prevProps){
        if(
            ( !prevProps.usuario && this.props.usuario ) || 
            ( !prevProps.categoria && this.props.categoria )
        ) this.getCategoriasProdutos(this.props);
    }


    render(){
        
        const { categoriaProdutos } = this.props;
        const dados = [];

        (categoriaProdutos ? categoriaProdutos.docs : []).forEach((item) => {
            dados.push({
                "Produto": item.titulo,
                "SKU":  item.sku,
                "Disponibilidade": item.disponibilidade ? "Disponível" : "Indisponível",
                "botaoDeDetalhes": `/produto/${item._id}`
            });
        });

        return (
        <div className="ListaDeProdutos">
            <br/><br/><br/>
                   <Titulo tipo="h3" titulo="Produtos da Categoria" />
                <br/>
                <br/>
                <Tabela 
                    cabecalho={["Produto", "SKU", "Disponibilidade"]}
                    dados={dados} />
                <Paginacao atual={this.state.atual} 
                total={this.props.categoriaProdutos ? this.props.categoriaProdutos.total : 0} 
                limite={this.state.limit} 
                onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual) }/>
        </div>)
    }
}

const mapStateToProps = state => ({
    categoriaProdutos: state.categoria.categoriaProdutos,
    categoria: state.categoria.categoria,
    usuario: state.auth.usuario
});

export default connect( mapStateToProps, actions )(ListaDeProdutos)

