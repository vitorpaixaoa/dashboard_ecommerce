import React, { Component } from 'react';
import Voltar from '../../components/Links/Voltar'
import DetalhesProduto from './detalhesProduto'
import DetalhesVariacoes from './detalhesVariacoes';

import { connect } from 'react-redux';
import * as actionsProdutos from '../../Actions/produtos';
import * as actionsCategorias from '../../Actions/categorias';

class Produto extends Component {

    componentDidMount(){
        const { usuario, getProduto, getCategorias } = this.props;
        if(!usuario) return;
        const { id } = this.props.match.params;
        getProduto( id, usuario.loja );
        getCategorias( usuario.loja );
    }

    render(){
        return(
            <div className="Produto full-width flex vertical">
                <Voltar path="/produtos" />
                <div className="Card">
                    <DetalhesProduto history={this.props.history} />
                </div>
                {/*<div className="">
                    <DetalhesVariacoes />
                </div> */}

            </div>
        )
    }
}

const mapStateToProps = state => ({
    usuario: state.auth.usuario
})

export default connect(mapStateToProps, { ...actionsCategorias, ...actionsCategorias })(Produto)