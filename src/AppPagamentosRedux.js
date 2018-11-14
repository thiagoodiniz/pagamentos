import React from 'react';
import {FormPagamentos} from './componentes/FormPagamentos';
import {ListaPagamentos} from './componentes/ListaPagamentos';

export const PagamentosRedux = () => {
    return(
        <div className='container'>
            <FormPagamentos/>
            <ListaPagamentos/>
        </div>
    );
}

export default PagamentosRedux;