import React,{Component} from 'react'
import Titulo from '../../components/Texto/Titulo'
import ListaDinamica from '../../components/Listas/ListaDinamicaSimples'
 
class DetalhesDoPagamento extends Component{
    
    state={
        status:[
            "Aguardando Pagamento",
            "Processando Pagamento"
        ]
    }

    onRemoveListaDinamica = (index) =>{
        let {status} = this.state
        status = status.filter((item, _index) => _index !== index )
        this.setState({ status })
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
                <Titulo tipo="h4" titulo="Pagamento" />
                <ListaDinamica 
                    dados={status}
                    ondAdd={() =>this.onAddListaDinamica} />
            </div>
        )
    }
}

export default DetalhesDoPagamento