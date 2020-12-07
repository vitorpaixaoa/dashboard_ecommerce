import React,{ Component } from 'react';
import moment from 'moment'
import Titulo from '../../components/Texto/Titulo';
import Tabela from '../../components/Tabela/Simples'
import Voltar from '../../components/Links/Voltar'

import { connect } from 'react-redux';
import * as actions from '../../Actions/avaliacoes';


class Avaliacoes extends Component {

    getAvaliacoes(props){
        const { usuario, produto } = this.props;
        if(!usuario || !produto ) return;
        this.props.getAvaliacoes(produto._id, usuario.loja)
    }

    componentDidMount(){
        this.getAvaliacoes(this.props);
    }

    componentDidUpdate(prevProps){
        if(
            ( !prevProps.usuario || !prevProps.produto) &&
            this.props.usuario && this.props.produto
        ) this.getAvaliacoes(this.props);
    }

    render(){
        
        const {avaliacoes, produto } = this.props;
        const dados = [];
        (avaliacoes || []).forEach((item) => {
            dados.push({
                "Cliente": item.nome,
                "Data": moment(item.createdAt).format("DD/MM/YYYY"),
                "botaoDeDetalhes": `/avaliacao/${item._id}`
            });
        });

        return (
        <div className="Avaliacoes full-width">
            <div className="Card">
            <Voltar path="/produto/219jd102" />
            <Titulo tipo="h1" titulo={`Avaliacoes - ${ produto ? produto.titulo : ""}`} />
                <br/>
                <Tabela 
                    cabecalho={["Cliente","Data"]}
                    dados={dados} />
            </div>         
        </div>)
    }
}

const mapStateToProps = state => ({
    usuario: state.auth.usuario,
    avaliacoes: state.avaliacao.avaliacoes,
    produto: state.produto.produto
});

export default connect(mapStateToProps, actions)(Avaliacoes)