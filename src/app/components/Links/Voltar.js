import React from 'react';
import { Link } from 'react-router-dom';

export default  ({ path, history }) => {
    if(path) return  ( <Link className="Link-voltar" to={path}>{"< Voltar"}</Link>)
    else return (<span className="Link-voltar" onClick={()=> history.goBack()}>{"< Voltar"}</span>)
}