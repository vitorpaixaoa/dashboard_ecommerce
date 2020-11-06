import React, { Component } from 'react';
import Titulo from '../../components/Texto/Titulo'
import ButtonSimples from '../../components/Button/Simples'
import InputValor from '../../components/Inputs/InputValor';
import { TextoDados } from '../../components/Texto/Dados';

class DetalhesCategoria extends Component {

    state={
        nome: "Categoria",
        disponibilidade: "disponivel",
        codigo: "categoria"
    }

    renderCabecalho(){
        const{nome } = this.state
        return(
            <div className="flex">
                <div className="flex-1 flex">
                    <Titulo tipo="h1" titulo={nome} />
                </div>
                <div className="flex flex-end">
                    <ButtonSimples 
                        onClick={()=> alert("Salvo")}
                        type="success"
                        label="Salvar" />
                    <ButtonSimples 
                        onClick={()=> alert("Removido")}
                        type="danger"
                        label="Remover" />
                </div>
            </div>
        )
    }

    renderDados(){
        const{nome, disponibilidade, codigo } = this.state
        return(
            <div >
                   <TextoDados
                chave="Codigo"
                valor={(
                    <InputValor
                        name="codigo" noStyle
                        value={codigo}
                        handleSubmit ={(valor) => this.setState({ codigo: valor })} />
            )}
         />
                    <TextoDados
                chave="Nome"
                valor={(
                    <InputValor
                        name="nome" noStyle
                        value={nome}
                        handleSubmit ={(valor) => this.setState({ nome: valor })} />
            )}
         /><br/>
         <TextoDados 
         chave="Disponibilidade"
         valor={(
             <select value={disponibilidade} onChange={(ev) => this.setState({ disponibilidade: ev.target.value})}>
                 <option value={"disponivel"}>Disponível</option>
                 <option value={"indisponivel"}>Indisponível</option>
             </select>
         )} />


            </div>
        )
    }

    render(){
        return(
            <div className="Detalhes-Categoria">
                {this.renderCabecalho() }
                {this.renderDados()}
            </div>
        )
        
    }
}

export default DetalhesCategoria