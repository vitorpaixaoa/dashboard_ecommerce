import React, { Component } from 'react';
import ButtonSimples from '../../../components/Button/Simples';
import Titulo from '../../../components/Texto/Titulo';

import { TextoDados } from '../../../components/Texto/Dados'
import InputValor from '../../../components/Inputs/InputValor'
import InputSelect from '../../../components/Inputs/Select'
import BlocoImagens from '../../../components/Imagens/Bloco';

import AlertGeral from '../../../components/Alert/Geral';
import { connect } from 'react-redux';
import *  as actions from '../../../Actions/variacao';

class OpcaoVariacao extends Component {
    
    generateStateVariacao = (props) => ({
        codigo: props.variacao ?  props.variacao.codigo : "",
        nome: props.variacao ?  props.variacao.nome : "",
        preco: props.variacao ?  props.variacao.preco : 0,
        variacao: props.variacao ?  props.variacao.variacao : 0,
        quantidade: props.variacao ?  props.variacao.quantidade : 0,
        peso: props.variacao ?  props.variacao.entrega.pesoKg : 0,
        freteGratis: props.variacao ?  (props.variacao.entrega.freteGratis ? "sim" : "nao") : "",
        largura: props.variacao ?  props.variacao.entrega.dimensoes.larguraCm : 0,
        altura: props.variacao ?  props.variacao.entrega.dimensoes.alturaCm : 0,
        comprimento: props.variacao ?  props.variacao.entrega.dimensoes.profundidadeCm : 0,
        fotos: props.variacao ?  props.variacao.fotos : []
        
    })

    constructor(props){
        super();
        this.state = {
            ...this.generateStateVariacao(props),
            aviso: null,
            erros: {}
        }
    }

    componentDidUpdate(prevProps){
        if(
            ( !prevProps.variacao && this.props.variacao ) ||
            ( prevProps.variacao && this.props.variacao &&
                prevProps.variacao.updatedAt !== this.props.variacao.updatedAt )
        ) this.setState(this.generateStateVariacao(this.props));
    }

    componentWillUnmount(){
        this.props.limparVariacao();
    }

    onChangeInput = (field, value ) => this.setState({ [field]: value }, () => this.validate());

    validate(){
        const { codigo, nome, preco, promocao, quantidade, peso, largura, altura, comprimento, } = this.state;
        const erros = {};   
        
        if(!codigo) erros.codigo = "Preencha aqui com o codigo da variação.";
        if(!nome) erros.nome = "Preencha aqui com o nome da variação.";
        if(!preco) erros.preco = "Preencha aqui com o preco da variação.";
        if(!quantidade) erros.quantidade = "Preencha aqui com o quantidade da variação.";
        if(!peso) erros.peso = "Preencha aqui com o peso da variação.";
        if(!largura) erros.largura = "Preencha aqui com o largura da variação.";
        if(!altura) erros.altura = "Preencha aqui com o altura da variação.";
        if(!comprimento) erros.comprimento = "Preencha aqui com o comprimento da variação.";

        this.setState({ erros });
        return !( Object.keys(erros).length > 0 );
    };

    updateVariacao(){
        const { usuario, produto, variacao } = this.props;
        if(!usuario || !produto || !variacao || !this.validate()) return null;
        this.props.updateVariacao(this.state, variacao._id, produto._id, usuario.loja, (error) => {
            this.setState({
                aviso: {
                    status: !error,
                    msg: error ? error.message : "Variação atualizada com sucesso."
                }
            });
            this.props.getVariacoes( produto._id, usuario.loja );
        })
    }
    removeVariacao(){
        const { usuario, produto, variacao } = this.props;
        if(!usuario || !produto || !variacao ) return null;
        if(window.confirm("Deseja realmente deletar essa variação?")){
            this.props.removeVariacao( variacao._id, produto._id, usuario.loja, (error) => {
                this.setState({
                    aviso: {
                        status: !error,
                        msg: error ? error.message : "Variação removida com sucesso."
                    }
                });
                this.props.getVariacoes( produto._id, usuario.loja );
            });
        }
    }

    renderCabecalho(){
        const {nome } = this.state
        return(
            <div className="flex horizontal">
                <div className="flex-1">
                    <Titulo tipo="h3"  titulo={"Variacao - " + nome }/>
                </div>
                <div className="flex-1 flex flex-end">
                    <ButtonSimples
                        type="success"
                        onClick={()=> this.updateVariacao()}
                        label="Salvar"
                    />
                    <ButtonSimples
                        type="danger"
                        onClick={()=> this.removeVariacao()}
                        label="Remover"
                    />
                </div>

            </div>
        )
    }

    renderDadosCadastrais(){
        const { nome, codigo, preco, promocao, quantidade, erros } = this.state
        return(

            <div className="Dados-Produto">
                <TextoDados
                    chave="Código"
                    valor={(
                        <InputValor 
                        handleSubmit= {(valor) => this.onChangeInput( "codigo", valor)}
                        value={codigo} noStyle 
                        erro={erros.codigo}
                        />
                    )}
                />
                <TextoDados
                    chave="Nome"
                    valor={(
                        <InputValor 
                        handleSubmit= {(valor) => this.onChangeInput( "nome", valor)}
                        value={nome} noStyle
                        erro={erros.nome}
                        />
                    )}
                />
                
                <TextoDados
                    chave="Preço Padrão"
                    valor={(
                        <InputValor 
                        value={preco} noStyle name="preco" type="number"
                        handleSubmit={(valor)=>this.onChangeInput("preco", Number(valor))}
                        erro={erros.preco}
                        />
                    )}
                />
                <TextoDados
                    chave="Preço Promocional"
                    valor={(
                        <InputValor 
                        value={promocao} noStyle name="promocao" type="number"
                        handleSubmit={(valor)=> this.onChangeInput( "promocao", Number(valor) )}
                        erro={erros.promocao}
                        />
                    )}
                />
                <TextoDados
                    chave="Quantidade"
                    valor={(
                        <InputValor 
                        value={quantidade} noStyle name="quantidade" erro={erros.quantidade}
                        handleSubmit={(valor) => this.onChangeInput( "quantidade", valor )}
                        />
                    )}
                />
            </div>
        )
    }

    renderDadosEnvio(){
        const { peso, freteGratis, largura, comprimento, altura, erros } = this.state
        return(

            <div className="Dados-Envio">
                <TextoDados
                    chave="Peso (KG)"
                    valor={(
                        <InputValor 
                        value={peso} noStyle name="peso" type="number" erro={erros.peso}
                        handleSubmit={(valor) => this.onChangeInput( "peso", Number(valor ))}
                        />
                    )}
                />
                <TextoDados
                    chave="Frete Grátis"
                    valor={(
                        <InputSelect 
                            name="freteGratis"
                            onChange={(ev) => this.onChangeInput("freteGratis", ev.target.value )} 
                            value={freteGratis}  error={erros.codigo}
                            opcoes={[ 
                                { label: "Sim", value: "sim" },
                                { label: "Não", value: "nao" }
                            ]} />
                    )} />
                <TextoDados
                    chave="Largura (CM)"
                    valor={(
                        <InputValor 
                        value={largura} noStyle name="largura" type="number" erro={erros.largura}
                        handleSubmit={(valor) => this.onChangeInput("largura", Number(valor) )}
                        />
                    )}
                />
                <TextoDados
                    chave="Comprimento (CM)"
                    valor={(
                        <InputValor 
                        value={comprimento} noStyle name="comprimento" erro={erros.comprimento}
                        handleSubmit={(valor) => this.onChangeInput("comprimento", valor )}
                        />
                    )}
                />
                <TextoDados
                    chave="Altura (CM)"
                    valor={(
                        <InputValor 
                        value={altura} noStyle name="altura" erro={erros.algura}
                        handleSubmit={(valor) => this.onChangeInput( "altura", valor )}
                        />
                    )}
                />
            </div>
        )
    }

    onRemove = (id) => {
        const {imagens} = this.state;
        this.setState({ imagens: imagens.filter((i, idx) => idx !== id )})
    }

    handleUploadFoto = (ev) => {
        const { usuario, produto, variacao } = this.props;
        if(!usuario || !produto || !variacao) return null;

        const data = new FormData();
        data.append("files", ev.target.files[0]);

        this.props.updateVariacaoImagens(data, variacao._id, produto._id, usuario.loja, (error) => {
            this.setState({
                aviso: {
                    status: !error,
                    msg: error ? error.message : "Foto da Variação adicionada com sucesso"
                }
            })
        });
    }


    onRemove = (id) => {
        const { usuario, produto, variacao } = this.props;
        if(!usuario || !produto || !variacao ) return null;

        const { fotos: _fotos } = this.state;
        const fotos = _fotos.filter((foto, index) => index !== id );

        if(window.confirm("Deseja realmente remover essa foto?")) {
            this.props.removeVariacaoImagens(fotos, variacao._id, produto._id, usuario.loja, (error) => {
                this.setState({
                    aviso: {
                        status: !error,
                        msg: error ? error.message  : "Imagem removida com sucesso."
                    }
                })
            })
        }
    }

    renderImagens(){
        const { fotos } = this.state
        return(
            <div className="dados-de-imagens">
                <BlocoImagens
                    imagens={ (fotos || [])}
                    handleSubmit={this.handleUploadFoto}
                    onRemove={this.onRemove}
                 />
            </div>
        )
    }

    render(){
        console.log(this.props.variacao)
        return(
            <div className="Opcao-variacao">
                {this.renderCabecalho()}
                <AlertGeral aviso={this.state.aviso} />
                <br/>
                <div className="flex horizontal">
                    <div className="flex-1">
                        { this.renderDadosCadastrais() }
                    </div>
                    <div className="flex-1">
                        { this.renderDadosEnvio() }
                    </div>
                    <div className="flex-1">
                        {this.renderImagens()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    variacao: state.variacao.variacao,
    produto: state.produto.produto,
    usuario: state.auth.usuario
})

export default connect (mapStateToProps, actions )(OpcaoVariacao)