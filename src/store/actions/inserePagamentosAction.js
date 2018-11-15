import axios from 'axios';
import buscaPagamentos from './listaPagamentosAction';
import {limpaForm} from './formPagamentosAction';

 export const inserePagamentoInicio = () => {
     return {
         type: 'INSERE_PAGAMENTO_INICIO',
         carregando: true,
         erro: false,
         erros: []
     }
 }

 export const inserePagamentoSucesso = () => {
    return {
        type: 'INSERE_PAGAMENTO_SUCESSO',
        carregando: false,
        erro: false,
        erros: []
    }
 }

 export const inserePagamentoErro = (erro) => {
     return {
         type: 'INSERE_PAGAMENTO_ERRO',
         carregando: false, 
         erro: true,
         erros: erro
     }
 }

 export const inserePagamento = (pagamento) =>{
     return dispatch => { 
            dispatch(inserePagamentoInicio())  
            axios.post('http://localhost:2000/pagamentos/pagamento', {pagamento: pagamento})
                .then(result =>{
                    console.log('Sucesso ao inserir um novo pagamento');
                    console.log(result);
                    dispatch(inserePagamentoSucesso(result))
                    dispatch(limpaForm())
                    dispatch(buscaPagamentos())
                })
                .catch(erro =>{
                    console.log('Erro ao inserir um novo pagamento');
                    console.log(erro.response.data)
                    dispatch(inserePagamentoErro(erro.response.data))   
                }); 
     }
 }

