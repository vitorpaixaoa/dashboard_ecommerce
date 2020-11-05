import React, {Component} from 'react'

import Titulo from '../../components/Texto/Titulo'

import Input from '../../components/Inputs/Simples'

import Button from '../../components/Button/Simples'

import logo from '../../../img/logo.png'

class RecuperarSenha extends Component{
    

    state ={
        email:""
    }
    onChangeInput = (field, ev)=> this.setState({ [field]: ev.target.value });

    render(){
        const {email} = this.state
        return(
            <div className="Resetar-Senha flex flex-center">
                <div className="Card">
                <div className="flex flex-center" >
                <img src={logo}></img>
                </div>
                    <br/>
                            <div>
                                <p>
                                    Para recuperar sua senha, por favor digite seu email abaixo:
                                </p>
                                <p>Iremos enviar um link para você acessar e recuperar sua senha. </p>
                        </div>
                    <br/>
                    <div>
                            <Input 
                                label="E-mail"
                                value={email}
                                onChange={(ev) => this.onChangeInput('email', ev)}
                                type="email"
                            />
                    </div>
                    <br></br>
                    <div>
                        <Button type="success" rota="/resetar-senha/1" label="RESETAR SENHA" />
                    </div>
                </div>
            </div>
        )
    }
}
export default RecuperarSenha