import React,{ Component } from 'react';
import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples';
import { Link } from 'react-router-dom';


import * as actions from '../../Actions/produtos';
import { connect } from 'react-redux';

class Produtos extends Component {

    state = {
        pesquisa:"",
        atual: 0,
        limit: 5,
        ordem: "alfabetica_a-z"
    }

    getProdutos(){
        const { atual, limit, pesquisa, ordem } = this.state;
        const { usuario } = this.props;
        if(!usuario) return null;

        if(pesquisa) this.props.getProdutosPesquisa(pesquisa, ordem, atual, limit, usuario.loja );
        else this.props.getProdutos(ordem, atual, limit, usuario.loja)

    }

    componentDidMount(){
        this.getProdutos();
    }

    componentDidUpdate(prevProps){
        if(!prevProps.usuario && this.props.usuario ) this.getProdutos(this.props);
    }

    handleSubmitPesquisa(){
        this.setState({ atual: 0 }, () => this.getProdutos(this.props));
    }

    onChangePesquisa= (ev) => this.setState({ pesquisa: ev.target.value })

    changeNumeroAtual = ( atual )  => this.setState({ atual }, () => this.getProdutos(this.props));

    changeOrdem = ( ev )  => this.setState({ ordem: ev.target.value }, () => this.getProdutos(this.props));

    renderBotãoNovo = () => {
        return (
            <Link className="button button-success button-small"
            to="/produtos/novo" >
                <i className="fas fa-plus"></i>
                <span>&nbsp;Novo Produto</span>
            </Link>
        )
    }

    render(){
        
        const { pesquisa, ordem } = this.state;
        const { produtos } = this.props;
        
        const dados = [];
        (produtos ? produtos.docs : []).forEach((item) => {
            dados.push({
                    "Produto": item.titulo,
                    "Categoria": item.categoria ? item.categoria.nome : "",
                    "Disponível": (item.disponibilidade ? "Sim" : "Não" ),
                    "botaoDeDetalhes": `/produto/${item._id}`
                
            })
        })
        
        return (
        <div className="Produtos full-width">
            <div className="Card">
            <Titulo tipo="h1" titulo="Produtos" />
                <br/>
                { this.renderBotãoNovo()}
                <br/>
                <br></br>
                <div className="flex">
                    <div className="flex-3">
                        <Pesquisa 
                                valor ={pesquisa} 
                                placeholder={"Pesquise pelo nome do produto, descrição ou categoria."}
                                onChange={(ev)=> this.onChangePesquisa(ev)}
                                onClick={ ()=> this.handleSubmitPesquisa()}/>    
                        </div>
                        <div className="flex-1 flex vertical">
                                <label>
                                    <small>Ordernar Por:</small>
                                </label>
                            <select value={ordem} onChange={this.changeOrdem} >
                                    <option>Aleatório</option>
                                    <option value={"alfabetica_a-z"}>Alfabética A-Z</option>
                                    <option value={"alfabetica_z-a"}>Alfabética Z-A</option>
                                    <option value={"preco-crescente"}>Menor Preço</option>
                                    <option value={"preco-decrescente"}>Maior Preço</option>
                            </select>
                        </div>
                        <div className="flex-1"></div>
                </div>
                <br/>
                <Tabela 
                    cabecalho={["Produto","Categoria", "Disponibilidade"]}
                    dados={dados} />
                <Paginacao atual={this.state.atual} 
                total={this.props.produtos ? this.props.produtos.total : 0} 
                limite={this.state.limit} 
                onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual) }/>
            </div>         
        </div>)
    }
}

const mapStateToProps = state => ({
    produtos: state.produto.produtos,
    usuario: state.auth.usuario
})

export default connect(mapStateToProps, actions)(Produtos)