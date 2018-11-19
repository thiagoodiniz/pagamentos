
const INITIAL_STATE = {
    carregando: false,
    erro: false,
    msg: '',
    erros: {
        camposComErro: [],
        msg: []
    }  
}

export function inserePagamento(state = INITIAL_STATE, action){

    switch(action.type){

        case 'INSERE_PAGAMENTO_INICIO':
            return {
                carregando: true,
                erro: false,
                msg: '',
                erros: {
                    camposComErro: [],
                    msg: []
                } 
            }
            
        case 'INSERE_PAGAMENTO_SUCESSO':
            return {
                carregando: false,
                erro: false,
                msg: action.msg,
                erros: {
                    camposComErro: [],
                    msg: []
                } 

            }

        case 'INSERE_PAGAMENTO_ERRO':
            return {
                carregando: false,
                erro: true,
                msg: '',
                erros: action.erros
            }

        case 'LIMPA_MSG':
            return {
                carregando: false,
                erro: false,
                msg: '',
                erros: state.erros
            }    

        default: return state

    }
}
