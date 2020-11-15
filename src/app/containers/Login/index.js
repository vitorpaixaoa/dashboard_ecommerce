import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import Input from '../../components/Inputs/Simples'

import Checkbox from '../../components/Inputs/Checkbox'

import Button from '../../components/Button/Simples'

import logo from '../../../img/logo.png'

import { connect } from 'react-redux'

import * as actions from '../../Actions'
import { api, versao } from '../../config'

class Login extends Component{
    
    state={
        email:"",
        senha:"",
        opcaoLembrar: true
    }

    onChangeInput = (field, ev)=> this.setState({ [field]: ev.target.value });
    onChangeCheckbox = (field) => this.setState({ [field]: !this.state[field] })


    handleLogin(){
        const { email, senha: password, opcaoLembrar } = this.state
        this.props.handleLogin({email, password, opcaoLembrar }, () => {
            alert("Aviso")
        })
    }


    render(){
        const { email, senha, opcaoLembrar} = this.state
        return(
            <div className="Login flex flex-center">
                <div className="Card">
                        <div className="flex vertical flex-center">
                            <img src={logo} alt="Logo" width=""/>
                            <p> Faça seu login abaixo</p>
                        </div>
                        <br/><br/>
                        <Input 
                            label ="E-mail"
                            value={email}
                            type="email"
                            onChange={(ev) => this.onChangeInput("email", ev )} />                    
                        <Input 
                            label ="Senha"
                            value={senha}
                            type="password"
                            onChange={(ev) => this.onChangeInput("senha", ev )} />   
                        <div className="flex">
                            <div className="flex-1">
                                <Checkbox
                                value={opcaoLembrar} 
                                onChange={()=> this.onChangeCheckbox("opcaoLembrar")}
                                label="Lembrar?"/>
                            </div>
                            <div className="flex-1 flex flex-end">
                               {/* <Link to="/recuperar-senha"><small>Esqueceu sua senha?</small></Link>  */}
                               <a href={`${api}/${versao}/api/usuarios/recuperar-senha`}>
                                   <small>Esqueceu sua senha?</small>
                               </a>
                            </div>
                        </div>

                         <br/> <br/>

                         <div className="flex flex-center">
                                <Button type="success"  label="ENTRAR" onClick={()=> this.handleLogin()}/>    
                         </div>
                           
                </div>
                
            </div>
        )
    }
}
export default connect(null, actions ) (Login)