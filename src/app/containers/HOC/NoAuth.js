import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Actions';

const noAuth = Component  =>{
     class ComponentNoAuth extends React.Component {
        componentDidMount(){
            const {getUser, authorized, history, usuario } = this.props
            getUser()
            if(authorized && usuario.role.includes("admin"))  history.replace("/");
        }

        componentDidUpdate(prevProps) {
            const { authorized, history } = this.props;
            if (!prevProps.authorized && authorized) history.replace("/");
        }
        render(){
            return (
                <div >
                    <Component {...this.props}/>
                </div>
            )
        }
    }

    const mapStateToProps = state => ({
        authorized: state.auth.authorized,
        usuario: state.auth.usuario
    });


    return connect(mapStateToProps, actions)(ComponentNoAuth)
};

export default noAuth;
