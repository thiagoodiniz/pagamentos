
 export const inserePagamentoInicio = () => {
     return {
         type: 'INSERE_PAGAMENTO_INICIO',
         carregando: true,
         erro: false
     }
 }

 export const inserePagamentoSucesso = (listaPagamentos) => {
    return {
        type: 'INSERE_PAGAMENTO_SUCESSO',
        listaPagamentos,
        carregando: false,
        erro: false
    }
 }

 export const inserePagamentoErro = (erro) => {
     return {
         type: 'INSERE_PAGAMENTO_ERRO',
         carregando: false,
         erro: true
     }
 }

 export const inserePagamento = (pagamento) =>{
     return dispatch => { 
            console.log(pagamento)
            dispatch(inserePagamentoInicio())  
     }
 }
 