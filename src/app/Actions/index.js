import axios from 'axios'
import {
    LOGIN_USER,
    LOGOUT_USER
} from './types.js'
import { api, versao } from '../config'

import { saveToken, getHeaders, cleanToken  } from "./localStorage"
import errorHandling from './errorHandling.js'
import moment from 'moment'


export const initApp = () => {
    const opcaoLembrar = localStorage.getItem("opcaoLembrar");
    if(opcaoLembrar === "false") cleanToken();
}
//USUARIOS
export const handleLogin = ({ email, password, opcaoLembrar }, callback ) =>{
    return function(dispatch){
        axios.post(`${api}/${versao}/api/usuarios/login`,  { email, password } )
        .then((response) => {
            saveToken(response.data.usuario, opcaoLembrar);
            dispatch({ type: LOGIN_USER, payload: response.data })
        })
        .catch((e) => callback(errorHandling(e)))
    }
}

export const getUser = () =>{
    return function(dispatch){
        axios.get(`${api}/${versao}/api/usuarios/`, getHeaders())
        .then((response) => {
            saveToken(response.data.usuario, true);
            dispatch({ type: LOGIN_USER, payload: response.data })
        })
        .catch((error) => {
            console.log(error, error.response.data, error.response)
        })
    }
}

export const handleLogout = () => {
    cleanToken();
    return { type: LOGOUT_USER }
}

export const formatMoney = (valor) => {
    return `R$ ${valor.toFixed(2).split(".").join(",")}`
}

export const transformeDate = (data, divisor, formato ) => {
    const _data = data.split(divisor);
    const dia = Number( _data[0] ) ;
    const mes = Number( _data[1] ) ;
    const ano = Number( _data[2]);

    return moment(new Date(ano, mes, dia )).format(formato);
}