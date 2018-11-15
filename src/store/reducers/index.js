
import {combineReducers} from 'redux';
import {inserePagamento} from './inserePagamentoReducer';
import {alteraForm} from './formPagamentoReducer';
import listaPagamentos from './listaPagamentosReducer';

const rootReducer = combineReducers({
    inserePagamento, alteraForm, listaPagamentos
});

export default rootReducer;