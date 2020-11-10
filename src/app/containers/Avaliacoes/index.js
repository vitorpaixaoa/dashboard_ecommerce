import React,{ Component } from 'react';
import moment from 'moment'

import Titulo from '../../components/Texto/Titulo';
import Tabela from '../../components/Tabela/Simples'
import Voltar from '../../components/Links/Voltar'

class Avaliacoes extends Component {
    render(){
        const dados = [
            {
                "Cliente": "Cliente 1",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDeDetalhes": "/avaliacao/AKWHAUKHAWKUAWHWA"
            },
            {
                "Cliente": "Cliente 2",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDeDetalhes": "/avaliacao/dsfdsv2efwedfsdf"
            },
            {
                "Cliente": "Cliente 3",
                "Data": moment().format("DD/MM/YYYY"), 
                "botaoDeDetalhes": "/avaliacao/jdghsvcvsdf"
            },
            {
                "Cliente": "Cliente 4",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDeDetalhes": "/avaliacao/cfghcgfvbbvcb"
            },
            {
                "Cliente": "Cliente 5",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDeDetalhes": "/avaliacao/adsadwjkjhghc"
            },
            {
                "Cliente": "Cliente 6",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDeDetalhes": "/avaliacao/adsdawefadfad"
            }
        ]
        return (
        <div className="Avaliacoes full-width">
            <div className="Card">
            <Voltar path="/produto/219jd102" />
            <Titulo tipo="h1" titulo="Avaliacoes - Produto 1" />
                <br/>
                <Tabela 
                    cabecalho={["Cliente","Data"]}
                    dados={dados} />
            </div>         
        </div>)
    }
}

export default Avaliacoes