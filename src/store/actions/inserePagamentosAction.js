import axios from 'axios';
import buscaPagamentos from './listaPagamentosAction';
import {limpaForm} from './formPagamentosAction';

 export const inserePagamentoInicio = () => {
     return {
         type: 'INSERE_PAGAMENTO_INICIO',
         carregando: true,
         erro: false,
         msg: '',
         erros: {
            camposComErro: [],
            msg: []
        }
     }
 }

 export const inserePagamentoSucesso = (msg) => {
    return {
        type: 'INSERE_PAGAMENTO_SUCESSO',
        carregando: false,
        erro: false,
        msg: msg,
        erros: {
            camposComErro: [],
            msg: []
        }
    }
 }

 export const inserePagamentoErro = (camposComErro, msg) => {
     return {
         type: 'INSERE_PAGAMENTO_ERRO',
         carregando: false, 
         erro: true,
         msg: '',
         erros: {
             camposComErro: camposComErro,
             msg: msg
         }
     }
 }

 export const limpa = () => {
    return {
        type: 'LIMPA_MSG'
    }
 }

 export const inserePagamento = (pagamento) =>{
     return dispatch => { 
            dispatch(inserePagamentoInicio())  
            axios.post('http://localhost:2000/pagamentos/pagamento', {pagamento: pagamento})
                .then(result =>{
                    console.log('Sucesso ao inserir um novo pagamento');
                    dispatch(inserePagamentoSucesso('Pagamento inserido com sucesso'))
                    dispatch(limpaForm())
                    dispatch(buscaPagamentos())
                })
                .catch(erro =>{
                    console.log('Erro ao inserir um novo pagamento');
                    if(erro.response && erro.response.status === 400){
                        let camposComErro = erro.response.data.map(erro => {
                            return erro.param;
                        });
                        let msg = erro.response.data.map((erro) => {
                            return erro.msg
                        })
                        dispatch(inserePagamentoErro(camposComErro, msg))
                    }else{
                        dispatch(inserePagamentoErro([], []))
                    }
                }); 
     }
 }

 export const limpaMsg = () => {
    return dispatch => {
        dispatch(limpa())
    }
} 
