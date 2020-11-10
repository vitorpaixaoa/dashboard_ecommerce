import React, { Component } from 'react';
import Titulo from '../../components/Texto/Titulo'
import ButtonSimples from '../../components/Button/Simples'
import {TextoDados} from '../../components/Texto/Dados'
import InputValor from '../../components/Inputs/InputValor'
import InputSimples from '../../components/Inputs/Simples';

class Perfil extends Component {
    state={
        nome: "Usuario Teste",
        email: "usuario@teste.com",
        telefone:"98 12345-6789",

        senhaAntiga: "",
        novaSenha: "",
        confirmarNovaSenha: ""
    }

    renderCabecalho(){
        return(
            <div className="felx">
                <div className="flex-1 flex">
                    <Titulo tipo="h1" titulo="Perfil" />
                </div>
                <div className="flex-1 flex flex-end">
                    <ButtonSimples type="success" onClick={()=> alert("Salvo")}
                    label="Salvar" />
                </div>

            </div>
        )
    }

    renderDadosConfiguracao(){
        const{nome, telefone, email} =this.state
        return(
            <div className="dados-Perfil">
                <TextoDados chave="Nome" 
                valor={(
                    <InputValor
                        value={nome} name="nome" noStyle
                        handleSubmit={(valor) => this.setState({nome: valor})} />
                )} />
                <TextoDados chave="Telefone" 
                valor={(
                    <InputValor
                        value={telefone} name="telefone" noStyle
                        handleSubmit={(valor) => this.setState({telefone: valor})} />
                )} />
                <TextoDados chave="E-mail" 
                valor={(
                    <InputValor
                        value={email} name="email" noStyle
                        handleSubmit={(valor) => this.setState({email: valor})} />
                )} />
            </div>
        )
    }
    renderDadosSenha(){
        const{senhaAntiga, novaSenha, confirmarNovaSenha} =this.state
        return(
            <div className="dados-configuracao">
                <InputSimples 
                type="password"
                name="senha-antiga"
                label="Senha antiga: "
                value={senhaAntiga}
                onChange={(ev)=> this.setState({ senhaAntiga: ev.target.value })} />
                <InputSimples 
                type="password"
                name="nova-senha"
                label="Nova senha: "
                value={novaSenha}
                onChange={(ev)=> this.setState({ novaSenha: ev.target.value })} />
                <InputSimples 
                type="password"
                name="confirmar-nova-senha"
                label="Confirmar nova senha: "
                value={confirmarNovaSenha}
                onChange={(ev)=> this.setState({ confirmarNovaSenha: ev.target.value })} />
            </div>
        )
    }


    render(){
        return(
            <div className="Perfil full-width">
                <div className="Card">
                    {this.renderCabecalho()}
                    <div className="flex horizontal">
                        <div className="flex-1">
                            {this.renderDadosConfiguracao()}
                        </div>
                        <div className="flex-1"> 
                            {this.renderDadosSenha()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Perfil