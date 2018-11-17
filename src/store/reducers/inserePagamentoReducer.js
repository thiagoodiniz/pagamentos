
const INITIAL_STATE = {
    carregando: false,
    erro: false,
    camposComErro: []
}

export function inserePagamento(state = INITIAL_STATE, action){

    switch(action.type){

        case 'INSERE_PAGAMENTO_INICIO':
            return {
                carregando: true,
                erro: false,
                camposComErro: []
            }
            
        case 'INSERE_PAGAMENTO_SUCESSO':
            return {
                carregando: false,
                erro: false,
                camposComErro: []

            }

        case 'INSERE_PAGAMENTO_ERRO':
            return {
                carregando: false,
                erro: true,
                camposComErro: action.camposComErro
            }

        default: return state

    }
}
