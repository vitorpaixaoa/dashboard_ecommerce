import React, { Component } from 'react';
import Titulo from '../../components/Texto/Titulo'
import ButtonSimples from '../../components/Button/Simples'
import InputValor from '../../components/Inputs/InputValor';
import { TextoDados } from '../../components/Texto/Dados';
import InputSelect from '../../components/Inputs/Select'

import Voltar from '../../components/Links/Voltar'

import { connect } from 'react-redux';
import AlertGeral from '../../components/Alert/Geral';
import * as actions from '../../Actions/categorias';


 
class DetalhesCategoria extends Component {


    generateStateCategoria = (props) => ({
            nome: props.categoria ? props.categoria.nome : "",
            disponibilidade: props.categoria ? 
                                ( props.categoria.disponibilidade || 
                                    props.categora.disponibilidade === undefined  ) ? 
                                    "disponivel" : "indisponivel" : "",
            codigo: props.categora ? props.categoria.codigo : ""
        });

        constructor(props){
            super();
            this.state = {
                ...this.generateStateCategoria(props),
                erros: {},
                aviso: null
            }
        }

        componentWillUpdate(nextProps){
            if(
                ( !this.props.categoria && nextProps.categoria ) ||
                ( 
                    this.props.categoria && 
                    nextProps.categoria && 
                    this.props.categoria.updatedAt !== nextProps.categoria.updatedAt 
                )
            ) this.setState(this.generateStateCategoria(nextProps));
        }


    salvarCategoria(){
        const { usuario, categoria } = this.props;
        if( !usuario || !categoria ) return null;
        if( !this.validade() ) return null;
        console.log("oi mundo")

        this.props.updateCategoria(this.state, categoria._id, usuario.loja, (error) => {
            this.setState({
                aviso: {
                    status: !error,
                    msg: error ? error.message : "Categoria Atualizar com sucesso. "
                }
            });
        });
    }
    removerCategoria(){
        const { usuario, categoria } = this.props;
        if( !usuario || !categoria ) return null;

        if(!window.confirm("Você realmente deseja remover essa categoria ?")) return;

        this.props.removerCategoria( categoria._id, usuario.loja, (error) => {
            if( error ) this.setState({ aviso: { status: false, msg:  error.message } });
            else this.props.history.goBack();
        });
    }

    renderCabecalho(){
        const{ nome } = this.state;
        return(
            <div className="flex">
                <div className="flex-1 flex">
                    <Titulo tipo="h1" titulo={ nome } />
                </div>
                <div className="flex flex-end">
                    <ButtonSimples 
                        onClick={()=> this.salvarCategoria() }
                        type="success"
                        label="Salvar" />
                    <ButtonSimples 
                        onClick={()=> this.removerCategoria() }
                        type="danger"
                        label="Remover" />
                </div>
            </div>
        )
    }


    onChangeInput = ( field, value ) => this.setState({ [field]: value }, () => this.validate() );
    
    validate(){
        const { nome, codigo } = this.state;
        const erros = {};

        if(!nome) erros.nome = "Preencha aqui com o nome da categoria";
        if(!codigo) erros.codigo = "Preencha aqui com o código da categoria";
        if(codigo && codigo.length < 4) erros.codigo = "Preencha com mais que 4 caracteres";
        if(codigo && codigo.indexOf(" ") !== -1 ) erros.codigo = "Não coloque espacos no código";

        this.setState({ erros });
        return !( Object.keys(erros).length > 0 );
    }

    renderDados(){
        const{nome, disponibilidade, codigo, erros } = this.state
        return(
            <div >
                   <TextoDados
                chave="Codigo"
                valor={(
                    <InputValor
                        name="codigo" noStyle erro={erros.codigo}
                        value={codigo}
                        handleSubmit ={(valor) => this.onChangeInput("codigo", valor)} />
            )}
         />
                    <TextoDados
                chave="Nome"
                valor={(
                    <InputValor
                        name="nome" noStyle erro={erros.nome}
                        value={nome}
                        handleSubmit ={(valor) => this.onChangeInput( "nome", valor )} />
            )}
         /><br/>
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
            
         )} />


            </div>
        )
    }

    render(){
        return(
            <div className="Detalhes-Categoria">
                <Voltar history={this.props.history} />
                <AlertGeral aviso={this.state.aviso} />
                {this.renderCabecalho() }
                {this.renderDados()}
            </div>
        )
        
    }
}

const mapStateToProps = state => ({
    categoria: state.categoria.categoria,
    usuario: state.auth.usuario
})

export default connect(mapStateToProps, actions)(DetalhesCategoria)