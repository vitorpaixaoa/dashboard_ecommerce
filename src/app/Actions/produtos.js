import { getHeaders } from './localStorage';
import axios from 'axios';
import { api, versao } from '../config';
import errorHandling from './errorHandling';
import {
    GET_PRODUTOS,
    GET_PRODUTO
} from './types';

export const getProdutos = ( ordem, atual, limit, loja ) => {
    return function(dispatch){
        axios.get(`${api}/${versao}/api/produtos?loja=${loja}&offset=${atual}&limit=${limit}&sortType=${ordem}`, getHeaders() )
        .then( response => dispatch({ type: GET_PRODUTOS, payload: response.data }))
        .catch(errorHandling);
    }
}
export const getProdutosPesquisa = ( termo,ordem, atual, limit, loja ) => {
    return function(dispatch){
        axios.get(`${api}/${versao}/api/produtos/search/${termo}?loja=${loja}&offset=${atual}&limit=${limit}&sortType=${ordem}`, getHeaders() )
        .then( response => dispatch({ type: GET_PRODUTOS, payload: response.data }))
        .catch(errorHandling);
    }   
}
export const salvarProduto = ( produto, loja, cb ) => {
    return function(dispatch){
        axios.post(`${api}/${versao}/api/produtos?loja=${loja}`, {
            titulo: produto.nome,
            descricao: produto.descricao,
            categoria: produto.categoria,
            preco: produto.preco,
            promocao: produto.promocao,
            sku: produto.sku
        } ,getHeaders() )
        .then( response => {
            dispatch({ type: GET_PRODUTO, payload: response.data });
            cb(null);
        })
        .catch((e) => cb(errorHandling(e)));
    }   
}