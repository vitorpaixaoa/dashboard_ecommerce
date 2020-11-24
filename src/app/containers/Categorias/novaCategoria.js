import React, { Component } from 'react';
import Titulo from '../../components/Texto/Titulo';
import ButtonSimples from '../../components/Button/Simples';
import ImputSimples from '../../components/Inputs/Simples';
import Voltar from '../../components/Links/Voltar';

import { connect } from 'react-redux';
import AlertGeral from '../../components/Alert/Geral';
import * as actions from '../../Actions/categorias';
import InputSimples from '../../components/Inputs/Simples';

class NovaCategoria extends Component {
        
        state = {
            nome: "",
            codigo: "",
            arros: {},
            aviso: null
        }


        validate = () => {
            const { nome, codigo } = this.state;
            const erros = {};

            if(!nome) erros.nome = "Preencha aqui com o nome da categoria.";
            if(!codigo) erros.codigo = "Preencha aqui com o codigo da categoria.";

            this.setState({ erros });
            return !(Object.keys(erros).length > 0);

        }
        

        salvarCategoria(){
            const { usuario } = this.props;
            if(!usuario) return null;
            if(!this.validate()) return null;
            this.props.salvarCategoria(this.state, usuario.loja, (error) => {
                this.setState({ 
                    aviso: { 
                        status: !error, 
                        msg: error ? error.message : "Categoria adicionada com sucesso."
                    }
                });
            });
        }




        renderCabecalho(){
            const { nome } = this.state;
            return(
                <div className="flex">
                    <div className="flex-1 flex">
                        <Titulo tipo="h1" titulo={ nome || "Nova Categoria"} />
                    </div>
                    <div className="flex-1 flex-end">
                        <ButtonSimples onClick={() => this.salvarCategoria() } type="success" label="Salvar" />
                    </div>
                </div>
            )
        }

        onChangeInput = ( field, value ) => this.setState({ [field]: value }, () => this.validate() );

        renderDados(){
            const { nome, codigo, erros } = this.state;
            return (
                <div className="flex-2">
                    <InputSimples 
                        name="nome"
                        label="Nome"
                        value={nome}
                        erro={this.state.nome}
                        onChange={(ev) => this.onChangeInput("nome", ev.target.value )} />
                    <InputSimples 
                        name="codigo"
                        label="Código"
                        value={codigo}
                        erro={this.state.codigo}
                        onChange={(ev) => this.onChangeInput("codigo", ev.target.value )} />

                </div>
            )
        }

        render(){
            return (
                <div className="Nova-Categoria full-width">
                    <div className="Card">
                        <Voltar history={this.props.history} />
                        <AlertGeral aviso={this.state.aviso} />
                        { this.renderCabecalho() }
                        <div className="flex horizontal">
                            { this.renderDados() }
                            <div className="flex-1"></div>
                        </div>
                    </div>
                </div>
            )
        }

    

}

const mapStateToProps = state => ({
    usuario: state.auth.usuario
})

export default connect(mapStateToProps, actions) (NovaCategoria);