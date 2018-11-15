
export const setForm = (campo, valor) => {
    switch(campo){
       case 'forma_pagamento':
           return {
               type: 'SET_FORMA_PAGAMENTO',
               valor: valor
           }
       case 'moeda':
           return {
               type: 'SET_MOEDA',
               valor: valor
           }

       case 'valor':
           return {
               type: 'SET_VALOR',
               valor: valor
           }

       case 'descricao':
           return {
               type: 'SET_DESCRICAO',
               valor: valor
           }

       default:
            return {
                type: 'LIMPA_FORM'
            }    
    }
}

export const setValorCampo = (campo, valor) => {
   return dispatch => {
           dispatch(setForm(campo, valor))
   }
}

export const limpaForm = () =>{
    return dispatch => {
        dispatch(setForm())
    }
}
