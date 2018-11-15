
const INITIAL_STATE = {
    listaPagamentos: [],
    carregando: false,
    erro: false
}

export default function inserePagamento(state = INITIAL_STATE, action){

    switch(action.type){
        case 'INSERE_PAGAMENTO_INICIO':
            return {
                carregando: true,
                erro: false
            }
            
        case 'INSERE_PAGAMENTO_SUCESSO':
            return {
                listaPagamentos: action.listaPagamentos,
                carregando: false,
                erro: false
            }

        case 'INSERE_PAGAMENTO_ERRO':
            return {
                carregando: false,
                erro: true
            }

        default: return state

    }

}
