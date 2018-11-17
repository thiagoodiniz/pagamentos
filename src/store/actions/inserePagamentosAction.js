import axios from 'axios';
import buscaPagamentos from './listaPagamentosAction';
import {limpaForm} from './formPagamentosAction';

 export const inserePagamentoInicio = () => {
     return {
         type: 'INSERE_PAGAMENTO_INICIO',
         carregando: true,
         erro: false,
         camposComErro: []
     }
 }

 export const inserePagamentoSucesso = () => {
    return {
        type: 'INSERE_PAGAMENTO_SUCESSO',
        carregando: false,
        erro: false,
        camposComErro: []
    }
 }

 export const inserePagamentoErro = (erros) => {
     return {
         type: 'INSERE_PAGAMENTO_ERRO',
         carregando: false, 
         erro: true,
         camposComErro: erros
     }
 }

 export const inserePagamento = (pagamento) =>{
     return dispatch => { 
            dispatch(inserePagamentoInicio())  
            axios.post('http://localhost:2000/pagamentos/pagamento', {pagamento: pagamento})
                .then(result =>{
                    console.log('Sucesso ao inserir um novo pagamento');
                    dispatch(inserePagamentoSucesso(result))
                    dispatch(limpaForm())
                    dispatch(buscaPagamentos())
                })
                .catch(erro =>{
                    console.log('Erro ao inserir um novo pagamento');
                    console.log(erro.response.data);
                    let camposComErro = erro.response.data.map((erro => {
                        return erro.param;
                    }))
                    dispatch(inserePagamentoErro(camposComErro))   
                }); 
     }
 }
