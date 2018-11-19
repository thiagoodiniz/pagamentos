import React, {Component} from 'react';
import FormPagamentos    from './componentes/FormPagamentos';
import ListaPagamentos from './componentes/ListaPagamentos';
import {Provider} from 'react-redux';
import store from './store';

class PagamentosRedux extends Component {
    render(){
        return(
           <Provider store={store}>
            <div className='container'>
                <FormPagamentos/>
                <ListaPagamentos/>
            </div>
           </Provider>            
        )
    }
}

export default PagamentosRedux;