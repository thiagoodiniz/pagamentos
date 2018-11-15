import axios from 'axios';

export const buscaPagamentosInicio = () => {
    return {
        type: 'BUSCA_PAGAMENTOS_INICIO',
        carregando: true,
        erro: false
    }   
}

export const buscaPagamentosSucesso = (listaPagamentos) => {
    return {
        type: 'BUSCA_PAGAMENTOS_SUCESSO',
        listaPagamentos: listaPagamentos,
        carregando: false,
        erro: false
    }   
}

export const buscaPagamentosErro = (erro) => {
    return {
        type: 'BUSCA_PAGAMENTOS_SUCESSO',
        listaPagamentos: [],
        carregando: false,
        erro: true        
    }
}

export const buscaPagamentos = () => {
    return dispatch => {
        console.log('Buscando a lista de pagamentos');
        dispatch(buscaPagamentosInicio())
        axios.get('http://localhost:2000/pagamentos/lista')
            .then(lista => { 
                console.log('Sucesso ao obter a lista de pagamentos');
                dispatch(buscaPagamentosSucesso(lista.data))   
            })
            .catch(erro =>{
                console.log('Ocorreu um erro ao buscar a lista de pagamentos');
                dispatch(buscaPagamentosErro(erro))
        });

    }
}

export default buscaPagamentos;