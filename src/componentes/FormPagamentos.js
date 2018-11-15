import React, {Component} from 'react';
import {Form, Input, TextArea, Button, Select} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux';
import {inserePagamento} from '../store/actions/pagamentosAction';

const opcoesPagamento = [
    { key: 'DEBITO', text: 'DEBITO', value: 'DEBITO' },
    { key: 'CREDITO', text: 'CREDITO', value: 'CREDITO' },
    { key: 'DINHEIRO', text: 'DINHEIRO', value: 'DINHEIRO' }
  ]
 
  const tiposMoedas = [
    { key: 'BRL', text: 'BRL', value: 'BRL' },
    { key: 'USD', text: 'USD', value: 'USD' },
    { key: 'EUR', text: 'EUR', value: 'EUR' }
  ]

export class FormPagamentos extends Component {
    
    constructor(){
        super();
        this.state = {forma_pagamento:'', moeda:'', valor:'', descricao:''}
        this.setValor = this.setValor.bind(this);
        this.selectFormaPagamento = this.selectFormaPagamento.bind(this);
        this.selectMoeda = this.selectMoeda.bind(this);
    }

    setValor(e){
        this.setState({[e.target.id]: e.target.value});
    }

    selectFormaPagamento(e){   
        this.setState({forma_pagamento: e.target.childNodes[0].textContent});
    }
    selectMoeda(e){
        this.setState({moeda: e.target.childNodes[0].textContent});
    }
    
    render(){
        return(
            <div className='form-pagamentos'>
                <h1>Cadastrar Pagamento</h1>
                <Form size='tiny'>
                    <Form.Group>
                    <Form.Field 
                        control={Select}
                        options={opcoesPagamento}
                        label={{ children: 'Forma de Pagamento', htmlFor: 'forma_pagamento' }}
                        placeholder='Selecione...'
                        search
                        searchInput='forma_pagamento'
                        value={this.state.forma_pagamento}
                        onChange={this.selectFormaPagamento}
                    />
                    <Form.Field
                        control={Select}
                        options={tiposMoedas}
                        label={{ children: 'Moeda', htmlFor: 'moeda' }}
                        placeholder='Selecione...'
                        search
                        id='moeda'
                        value={this.state.moeda}
                        onChange={this.selectMoeda}
                    />
                    <Form.Field
                        id='valor'
                        control={Input}
                        label='Valor'
                        placeholder='Digite o valor'
                        value={this.state.valor}
                        onChange={this.setValor}
                    />
                    </Form.Group>
                    <Form.Field
                        width='7'
                        id='descricao'
                        control={TextArea}
                        label='Descrição do pagamento'  
                        placeholder='Digite a descrição'
                        value={this.state.descricao}
                        onChange={this.setValor}
                        />
                    <Form.Field
                        control={Button}
                        content='Enviar os dados'
                        onClick={() => {this.props.inserePagamento(this.state)}}
                    />
                </Form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inserePagamento : (pagamento) => {dispatch(inserePagamento(pagamento))}
    }
    
}

export default connect(null, mapDispatchToProps)(FormPagamentos);