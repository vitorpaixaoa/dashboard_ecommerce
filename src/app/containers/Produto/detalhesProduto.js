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

    generateStateProduto = (props) => ({
        nome: props.produto ? props.produto.titulo : "",
        disponibilidade: props.produto ? ( props.produto.disponibilidade ? "disponivel" : "indisponivel" ) : "",
        descricao: props.produto ? props.produto.descricao : "",
        categoria: props.produto ? (props.produto.categoria._id || props.produto.categoria) : "",
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
            ( prevProps.produto && this.props.produto &&
              prevProps.produto.updatedAt !== this.props.produto.updatedAt  )
        ) this.setState(this.generateStateProduto(this.props))
    }

    updateProduto(){
        const { usuario, produto, updateProduto } = this.props;
        if( !usuario || !produto || !this.validate() ) return null;
        updateProduto(this.state, produto._id, usuario.loja, (error) => {
            this.setState({
                aviso: { 
                    status: !error, 
                    msg: error ? error.message : "Produto Atualizado com sucesso."}
            });
        });
    }

    validate(){
        const { nome, descricao, categoria, preco, sku } = this.state;
        const erros = {};

        if(!nome) erros.nome = "Preencha aqui com o nome do produto";
        if(!descricao) erros.descricao = "Preencha aqui com o descricao do produto";
        if(!preco) erros.preco = "Preencha aqui com o preco do produto";
        if(!categoria) erros.categoria = "Preencha aqui com o categoria do produto";
        if(!sku) erros.sku = "Preencha aqui com o sku do produto";

        this.setState({ erros });
        return !( Object.keys(erros).length > 0);
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


    onChangeInput = (field, value) => this.setState({ [field]: value }, () => this.validate());

    renderDados(){
        const { nome, disponibilidade, descricao, categoria, preco, promocao, sku, erros } = this.state
        const { categorias } = this.props;
        return (
            <div className="Dados-Produto">
                <TextoDados
                    chave="Nome"
                    valor={(
                        <InputValor 
                        handleSubmit= {(valor) => this.onChangeInput("nome", valor)}
                        value={nome} noStyle name="nome" erro={erros.nome}
                        />
                    )}
                />
                <TextoDados
                    chave="Disponibilidade"
                    valor={(
                        <InputSelect
                            name="disponibilidade"
                            onChange={(ev) => this.onChangeInput( "disponibilidade", ev.target.value )}
                            value={disponibilidade}
                            opcoes={[
                                { label: "Disponível", value: "disponivel" },
                                { label: "Indisponível", value: "indisponivel" }
                            ]} />
                    )} />
                    <br/>
                    <TextoDados  
                    chave="Categoria"
                    valor={(
                        <InputSelect 
                            name="categoria"
                            onChange={(ev) => this.onChangeInput("categoria", ev.target.value)}
                            value={categoria}
                            opcoes={(categorias || []).map((item) => ({ label: item.nome, value: item._id }))} />
                    )} />
                <br/>
                 <TextoDados
                    chave="Descricao"
                    vertical
                    valor={(
                        <textarea 
                            name={"descricao"} 
                            onChange={(ev)=> this.onChangeInput("descricao", ev.target.value)}
                            value={descricao}
                            rows="10"
                            style={{resize: "none"}}/>
                    )}
                />
                <TextoDados
                    chave="Preço"
                    valor={(
                        <InputValor 
                        handleSubmit= {(valor) => this.onChangeInput("preco", valor)}
                        value={preco} noStyle name="preco" erro={erros.preco}
                        />
                    )}
                />
                <TextoDados
                    chave="Valor em promoção"
                    valor={(
                        <InputValor 
                        handleSubmit= {(promocao) => this.onChangeInput("promocao", promocao)}
                        value={promocao} noStyle name="promocao" erro={erros.promocao}
                        />
                    )}
                />
                <TextoDados
                    chave="sku"
                    valor={(
                        <InputValor 
                        handleSubmit= {(sku) => this.onChangeInput("sku", sku)}
                        value={sku} noStyle name="sku" erro={erros.sku}
                        />
                    )}
                />
            </div>
        )
    }

    onRemove = (id) => {
        const { usuario, produto } = this.props;
        if(!usuario || !produto ) return null;
        const { fotos: _fotos } = this.state;
        const fotos = _fotos.filter((foto, index) => index !== id  );
        if(window.confirm("Você deseja realmente remover essa imagem? ")) {
            this.props.removeProdutoImagens(fotos, produto._id, usuario.loja, (error) => {
                this.setState({
                    aviso: {
                        status: !error,
                        msg: error ?  error.message: "Fotos removida com sucesso."
                    }
                });
            });
        }
    }

   handleUploadFoto = (ev) =>{
       const { usuario, produto } = this.props;
       if(!usuario || !produto ) return null;

       const data = new FormData();
       data.append("files", ev.target.files[0]);

       this.props.updateProdutoImagens(data, produto._id, usuario.loja, (error) => {
           this.setState({
               aviso: {
                   status: !error,
                   msg: error ?  error.message: "Fotos do produto atualizadas com sucesso."
               }
           });
       });
   }
    
    renderImagens(){
        const {fotos} = this.state
        return(
            <div className="dados-de-imagens">
                <BlocoImagens
                    imagens={(fotos || [] )}
                    handleSubmit={(ev) => this.handleUploadFoto(ev)}
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
});

export default connect(mapStateToProps, actions)(DetalhesProdutos);