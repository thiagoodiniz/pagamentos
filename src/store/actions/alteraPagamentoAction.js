import axios from 'axios';
import buscaPagamentos from './listaPagamentosAction';

export const alteraPagamentoInicio = () => {
    return {
        type: 'ALTERA_PAGAMENTO_INICIO',
        carregando: true,
        erro: false,
        msg: ''
    }
}

export const alteraPagamentoSucesso = (msg) => {
    return {
        type: 'ALTERA_PAGAMENTO_SUCESSO',
        carregando: false,
        erro: false,
        msg: msg 
    }
}

export const alteraPagamentoErro = (msg) => {
    return {
        type: 'ALTERA_PAGAMENTO_ERRO',
        carregando: false,
        erro: true,
        msg: msg 
    }
}

export const limpa = () => {
    return {
        type: 'LIMPA_STATE',
        carregando: false,
        erro: true,
        msg: ''
    }
}

export const confirmaPagamento = (idPagamento) => {
    return dispatch  => {
        dispatch(alteraPagamentoInicio())
        console.log(`Confirmando o pagamento: ${idPagamento}`);
        axios.put(`http://localhost:2000/pagamentos/pagamento/${idPagamento}`)
            .then(() => {
                console.log(`Pagamento ${idPagamento} confirmado`);
                dispatch(alteraPagamentoSucesso('Pagamento confirmado com sucesso'))
                dispatch(buscaPagamentos());
            })
            .catch(() => {
                console.log(`Não foi possível confirmar o pagamento ${idPagamento}`);
                dispatch(alteraPagamentoErro())
            })
    }   
}

export const cancelaPagamento = (idPagamento) => {
    return dispatch => {
        console.log(`Cancelando o  pagamento: ${idPagamento}`);
        axios.delete(`http://localhost:2000/pagamentos/pagamento/${idPagamento}`)
            .then(() => {
                console.log(`Pagamento ${idPagamento} cancelado`);
                dispatch(alteraPagamentoSucesso('Pagamento cancelado com sucesso'))
                dispatch(buscaPagamentos());
            })
            .catch(() => {
                console.log(`Não foi possível confirmar o pagamento ${idPagamento}`);
                dispatch(alteraPagamentoErro())
            })
    }    
}

export const limpaState = () => {
    return dispatch => {
        dispatch(limpa())
    }
}