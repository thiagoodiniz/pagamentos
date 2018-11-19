
import {combineReducers} from 'redux';
import {inserePagamento} from './inserePagamentoReducer';
import {alteraForm} from './formPagamentoReducer';
import listaPagamentos from './listaPagamentosReducer';
import alteraPagamentos from './alteraPagamentoReducer';

const rootReducer = combineReducers({
    inserePagamento, alteraForm, listaPagamentos, alteraPagamentos
});

export default rootReducer;