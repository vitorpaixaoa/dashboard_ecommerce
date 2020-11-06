import React,{ Component } from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom'

import Titulo from '../../components/Texto/Titulo';
import Tabela from '../../components/Tabela/Simples'


class DetalhesDosPedidos extends Component {
    render(){
        //dados
        const dados = [
            {
                "ID": "21391daas112221",
                "Valor Total": 89.90,
                "Data": moment().toISOString(),
                "Situação": "Aguardando Pagamento",
                "botaoDeDetalhes":"/pedido/21391daas112221"
            },
            {
                "ID": "2132131dd2112s12",
                "Valor Total": 89.90,
                "Data": moment().toISOString(),
                "Situação": "Aguardando Pagamento",
                "botaoDeDetalhes":"/pedido/2132131dd2112s1"
            },
            {
                "ID": "21391daas1s12s1122213",
                "Valor Total": 150,
                "Data": moment().toISOString(),
                "Situação": "Aguardando Pagamento",
                "botaoDeDetalhes":"/pedido/21391daas1s12s112221"
            }
        ]
        return (
        <div className="Detalhe-dos-Pedidos">
             <Titulo tipo="h3" titulo="Pedidos Feitos" />
                <br/>
                <Tabela 
                    cabecalho={["ID","Valor Total", "Data", "Situação"]}
                    dados={dados} />
        </div>
        )
    }
}

export default DetalhesDosPedidos