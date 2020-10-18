import React, { Component } from 'react';
import Base from '../Base/index';

const base = Component  =>{
    return class extends React.Component {
        render(){
            return (
                <Base history={this.props.history}>
                    <Component {...this.props}/>
                </Base>
            )
        }
    }
};

export default base;

base(Component);