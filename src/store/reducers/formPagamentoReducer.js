const INITIAL_STATE = {
    pagamento: {
        forma_pagamento: '',
        moeda: '',
        valor: '',
        descricao: ''
    }
}

export function alteraForm(state = INITIAL_STATE, action){

    switch(action.type){
        case 'SET_FORMA_PAGAMENTO':
            return {
                pagamento: {
                    forma_pagamento: action.valor,
                    moeda: state.pagamento.moeda,
                    valor: state.pagamento.valor,
                    descricao: state.pagamento.descricao
                }
            }

        case 'SET_MOEDA':
            return {
                pagamento: {
                    forma_pagamento: state.pagamento.forma_pagamento,
                    moeda: action.valor,
                    valor: state.pagamento.valor,
                    descricao: state.pagamento.descricao
                }
            }

        case 'SET_VALOR':
            return {
                pagamento: {
                    forma_pagamento: state.pagamento.forma_pagamento,
                    moeda: state.pagamento.moeda,
                    valor: action.valor,
                    descricao: state.pagamento.descricao
                }
            }

        case 'SET_DESCRICAO':
            return {
                pagamento: {
                    forma_pagamento: state.pagamento.forma_pagamento,
                    moeda: state.pagamento.moeda,
                    valor: state.pagamento.valor,
                    descricao: action.valor
                }
            }
         
        case 'LIMPA_FORM':
            return {
                pagamento: {
                    forma_pagamento: '',
                    moeda: '',
                    valor: '',
                    descricao: ''
                }
            }
            
        default: return state
    }
}
