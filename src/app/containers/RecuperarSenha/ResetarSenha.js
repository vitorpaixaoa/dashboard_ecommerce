import React, {Component} from 'react'

import Titulo from '../../components/Texto/Titulo'
import Input from '../../components/Inputs/Simples'
import Button from '../../components/Button/Simples'

class ResetarSenha extends Component{
    state = {
        senha:"",
        confirmarSenha:""
    }
    onChangeInput = (field, ev)=> this.setState({ [field]: ev.target.value });

    render(){
        const {senha, confirmarSenha} = this.state
        return(
            <div className="Resetar-Senha">
                <Titulo tipo="h1" titulo="LOJA TI" />
                <br/>
                <div>
                    <p>
                        Para reiniciar a senha, digite a nova senha abaixo e confirme.
                    </p>
                </div>
                <br/>
                <div>
                    <Input 
                        label="Senha" 
                        type="password" 
                        value={senha} 
                        onChange={(ev) => this.onChangeInput(senha, ev) } />

                    <Input 
                        label="confirmarSenha" 
                        type="password" 
                        value={senha} 
                        onChange={(ev) => this.onChangeInput(confirmarSenha, ev) } />
                </div>

                <div>
                    <Button type="success" rota="/login" label="RESETAR SENHA" />
                </div>

            </div>
        )
    }
}
export default ResetarSenha