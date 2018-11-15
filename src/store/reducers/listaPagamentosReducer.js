const INITIAL_STATE = {
    listaPagamentos: [],
    carregando: false,
    erro: false
}

export default function buscaPagamentos(state = INITIAL_STATE, action){

    switch(action.type){
        case 'BUSCA_PAGAMENTOS_INICIO':
            return {
                listaPagamentos: state.listaPagamentos,
                carregando: true,
                erro: false
            }

        case 'BUSCA_PAGAMENTOS_SUCESSO':
            return {
                listaPagamentos: action.listaPagamentos,
                carregando: false,
                erro: false
            }

        case 'BUSCA_PAGAMENTOS_ERRO':
            return {
                listaPagamentos: [],
                carregando: false,
                erro: true
            }
        
        default: 
        return state
    }

}