const INITIAL_STATE = {
    carregando: false,
    erro: false,
    msg: ''
}

export function alteraPagamento(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ALTERA_PAGAMENTO_INICIO':
            return {
                carregando: true,
                erro: false,
                msg: ''
            }

        case 'ALTERA_PAGAMENTO_SUCESSO':
            return {
                carregando: false,
                erro: false,
                msg: action.msg
            }
            
        case 'ALTERA_PAGAMENTO_ERRO':
            return {
                carregando: false,
                erro: true,
                msg: action.msg
            }
        
        case 'LIMPA_STATE':
            return {
                carregando: false,
                erro: false,
                msg: ''
            }

        default: return state; 
    }
}

export default alteraPagamento;