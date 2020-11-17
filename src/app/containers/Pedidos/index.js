import React,{ Component } from 'react';
import moment from 'moment';

import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa'
import Tabela from '../../components/Tabela/Simples'
import Paginacao from '../../components/Paginacao/Simples'
import * as actions from '../../Actions/pedidos'
import {formatMoney} from '../../Actions'
import { connect } from 'react-redux';


class Pedidos extends Component {

    state = {
        pesquisa:"",
        atual: 0,
        limit: 3,

        dados: []
    }

    getPedidos(){
        const { atual, limit, pesquisa } = this.state
        if(!this.props.usuario) return null;
        const loja = this.props.usuario.loja

        if(pesquisa) this.props.getPedidosPesquisa(pesquisa, atual, limit, loja)
        else   this.props.getPedidos(atual, limit, loja)
    }

    componentDidMount(){
        this.getPedidos()
    }
    componentDidUpdate(nextProps){
        if(!this.props.usuario && nextProps.usuario) this.getPedidos();
        }

        handleSubmitPesquisa(){
            this.setState({ atual: 0 }, () => this.getPedidos());
        }

    onChangePesquisa= (ev) => this.setState({ pesquisa: ev.target.value })
    changeNumeroAtual = ( atual )  => {
        this.setState({ atual }, ()=> {
            this.getPedidos()
        })
    }

    render(){
        const { pesquisa } = this.state
        const { pedidos } = this.props

        const dados = [];
        
        (pedidos ?  pedidos.docs : []).forEach((item) => {
            
            dados.push({
                "Cliente": item.cliente ? item.cliente.nome : "",
                "Valor Total": formatMoney(item.pagamento.valor),
                "Data":  moment(item.createdAt).format("DD/MM/YYYY"),
                "Situação": item.pagamento.status !== "Paga" ? item.pagamento.status : item.entrega.status,
                "botaoDeDetalhes":`/pedido/${item._id}`
            })
        });

        return (
        <div className="Pedidos full-width">
            <div className="Card">
            <Titulo tipo="h1" titulo="Pedidos" />
                <br/>
                <Pesquisa 
                    valor ={pesquisa} 
                    placeholder={"Pesquise pelo nome do cliente."}
                    onChange={(ev)=> this.onChangePesquisa(ev)}
                    onClick={() => this.handleSubmitPesquisa()} />  
                <br/>
                <Tabela 
                    cabecalho={["Cliente","Valor Total", "Data", "Situação"]}
                    dados={dados} />
                 <Paginacao 
                        atual={this.state.atual} 
                        total={this.props.pedidos ? this.props.pedidos.total : 0} 
                        limite={this.state.limit} 
                        onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)} />
            </div>         
        </div>)
    }
}

const mapStateToProps = state => ({
    pedidos: state.pedido.pedidos,
    usuario: state.auth.usuario
})

export default connect(mapStateToProps,actions)(Pedidos)