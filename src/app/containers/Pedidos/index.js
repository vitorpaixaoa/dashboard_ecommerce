import React,{ Component } from 'react';

import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa'

class Pedidos extends Component {

    state = {
        pesquisa:""
    }

    onChangePesquisa= (ev) => this.setState({ pesquisa: ev.target.value })


    render(){
        const {pesquisa} = this.state
        return (
        <div className="Pedidos">
                <Titulo tipo="h1" titulo="Pedidos" />
                <br/>
                <Pesquisa 
                valor ={pesquisa} 
                placeholder={"Pesquise pelo nome do cliente."}
                onChange={(ev)=> this.onChangePesquisa(ev)}/>    
                <br/>
                <Tabela />
                <Paginacao/>

        </div>)
    }
}

export default Pedidos