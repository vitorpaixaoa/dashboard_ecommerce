import React,{Component} from 'react'
import Titulo from '../../components/Texto/Titulo'
import {TextoDados} from '../../components/Texto/Dados'
import ButtonSimples from '../../components/Button/Simples'
import TabelaSimples from '../../components/Tabela/Simples'

class DetalhesDoPedido extends Component{

    renderCabecalho(){
        return(
                <div>
                    <div>
                        <Titulo tipo="h2" titulo="Pedido - Cliente 1 - 17/08/2020" />
                    </div>
                    <div>
                        <ButtonSimples
                            type="danger" 
                            label="CANCELAR PEDIDO" 
                            onClick={() => alert("CANCELADO")} />
                    </div>
                </div>
            
        )
    }

    renderDadosDoCliente(){
        return(
            <div>
                <Titulo tipo="h4" titulo="Dados do Cliente"/>
                <br/>
                <TextoDados chave="Nome" valor="Cliente 1"/>
                <TextoDados chave="CPF" valor="111.222.333-45"/>
                <TextoDados chave="Telefone" valor="(98)12345678"/>
                <TextoDados chave="Data De Nascimento" valor="17/08/1998"/>
            </div>
        )
    }

    renderDadosDeEntrega(){
        return(
            <div>
                <Titulo tipo="h4" titulo="Dados de Entrega"/>
                <br/>
                <TextoDados chave="Endereco" valor="Rua Teste 123"/>
                <TextoDados chave="Bairro" valor="Centro"/>
                <TextoDados chave="Cidade" valor="Disney"/>
                <TextoDados chave="Estado" valor="Maravilhoso Mundo"/>
                <TextoDados chave="CEP" valor="65052000"/>
            </div>
        )
    }

    renderDadosDePagamento(){
        return(
            <div>
                <Titulo tipo="h4" titulo="Dados de Pagamento"/>
                <br/>
                <TextoDados chave="Taxa de Entrega" valor="R$ 25,80 (PAC)"/>
                <TextoDados chave="Valor do Pedido" valor="R$ 100,00"/>
                <TextoDados chave="Valor Total" valor="R$ 125,80"/>
                <TextoDados chave="Forma de Pagamento" valor="Boleto"/>
            </div>
        )
    }

    renderDadosDoCarrinho(){

        const dados = [
            {
                "Produto": "Produto 1",
                "Preço Und.": "R$ 50,00",
                "Quantidade": "1",
                "Preco Total": "R$ 50,00"
            },
            {
                "Produto": "Produto 2",
                "Preço Und.": "R$ 25,00",
                "Quantidade": "2",
                "Preco Total": "R$ 50,00"
            }
        ]

        return(
            <div>
                <Titulo tipo="h4" titulo="Carrinho"/>
                <br/>
                <TabelaSimples cabecalho={["Produto", "Preço Und.", "Quantidade", "Preco Total"]}  
                dados = {dados}/>
            </div>
        )
    }

   

    render(){
        
        return (
            <div className="Detalhes-do-Pedido" >
                {this.renderCabecalho()}
                {this.renderDadosDoCliente()}
                {this.renderDadosDoCarrinho()}
                {this.renderDadosDeEntrega()}
                {this.renderDadosDePagamento()}
            </div>
        )
    }
}
export default DetalhesDoPedido