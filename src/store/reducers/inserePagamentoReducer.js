
const INITIAL_STATE = {
    carregando: false,
    erro: false,
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
                erros: {
                    camposComErro: [],
                    msg: []
                } 
            }
            
        case 'INSERE_PAGAMENTO_SUCESSO':
            return {
                carregando: false,
                erro: false,
                erros: {
                    camposComErro: [],
                    msg: []
                } 

            }

        case 'INSERE_PAGAMENTO_ERRO':
            return {
                carregando: false,
                erro: true,
                erros: action.erros
            }

        default: return state

    }
}
