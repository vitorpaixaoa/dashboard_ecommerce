import React from 'react';
import { connect } from 'react-redux';
import Base from '../Base/index';
import * as actions from '../../Actions'

const base = Component  =>{
     class ComponenteBase extends React.Component {
        componentDidMount(){
            const { getUser, authorized, history, usuario } = this.props
            getUser()
            if(!authorized || !usuario || !usuario.role.includes("admin") )  history.replace("/login");
        }

        componentDidUpdate(prevProps) {
            const {  history } = this.props;
            if 
                (! prevProps.authorized  || !prevProps.usuario || !prevProps.usuario.role.includes("admin"))
                     history.replace("/login");
        }   

        render(){
            return (
                <Base history={this.props.history}>
                    <Component {...this.props}/>
                </Base>
            )
        }
    }

    const mapStateToProps = state => ({
        authorized: state.auth.authorized,
        usuario: state.auth.usuario
    });


    return connect(mapStateToProps, actions)(ComponenteBase)
};

export default base;
