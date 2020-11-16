import axios from 'axios'
import {getHeaders} from './localStorage'
import { api, versao } from '../config'
import errorHandling from './errorHandling'
import {
    GET_PEDIDOS
} from './types'

export const getPedidos = (atual, limit, loja) => {
    return function(dispatch){
        axios.get(`${api}/${versao}/api/pedidos/admin?offset=${atual}&limit=${limit}&loja=${loja}`, getHeaders())
        .then(response => {
            dispatch({ type: GET_PEDIDOS, payload: response.data })
        })
        .catch(errorHandling)
    }
}