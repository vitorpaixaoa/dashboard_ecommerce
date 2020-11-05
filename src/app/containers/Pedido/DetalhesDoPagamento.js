import React,{Component} from 'react'
import Titulo from '../../components/Texto/Titulo'
import ListaDinamica from '../../components/Listas/ListaDinamicaSimples'

class DetalhesDoPagamento extends Component{
    state={
        status:[
            "Aguardando Pagamento",
            "Pagamento Efetuado"
        ]
    }

    onAddListaDinamica = (texto) => {
        if(!texto) return false;
        let {status} = this.state
        status.push(texto)
        this.setState({ status })
    }

    render(){
        const {status} = this.state
        return (
            <div className="Detalhes-do-Pagamento">
                <Titulo tipo="h3" titulo="Pagamento" />
                <br/>
                <ListaDinamica 
                    dados={status}
                    onAdd={this.onAddListaDinamica} />
            </div>
        )
    }
}

export default DetalhesDoPagamento