import React, {Component} from 'react';
import {Form, Input, TextArea, Button, Select} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux';
import {inserePagamento} from '../store/actions/inserePagamentosAction';
import {setValorCampo} from '../store/actions/formPagamentosAction';

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
        this.setValorCampo = this.setValorCampo.bind(this);
        this.selectFormaPagamento = this.selectFormaPagamento.bind(this);
        this.selectMoeda = this.selectMoeda.bind(this);
    }

    setValorCampo(e){
        this.props.setValorCampo(e.target.id, e.target.value);
    }

    selectFormaPagamento(e){   
        this.props.setValorCampo('forma_pagamento', e.target.childNodes[0].textContent);
    }
    selectMoeda(e){
        this.props.setValorCampo('moeda', e.target.childNodes[0].textContent);
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
                        value={this.props.pagamento.forma_pagamento}
                        onChange={this.selectFormaPagamento}
                    />
                    <Form.Field
                        control={Select}
                        options={tiposMoedas}
                        label={{ children: 'Moeda', htmlFor: 'moeda' }}
                        placeholder='Selecione...'
                        search
                        id='moeda'
                        value={this.props.pagamento.moeda}
                        onChange={this.selectMoeda}
                    />
                    <Form.Field
                        id='valor'
                        control={Input}
                        label='Valor'
                        placeholder='Digite o valor'
                        value={this.props.pagamento.valor}
                        onChange={this.setValorCampo}
                    />
                    </Form.Group>
                    <Form.Field
                        width='7'
                        id='descricao'
                        control={TextArea}
                        label='Descrição do pagamento'  
                        placeholder='Digite a descrição'
                        value={this.props.pagamento.descricao}
                        onChange={this.setValorCampo}
                        />
                    <Form.Field
                        control={Button}
                        content='Enviar os dados'
                        onClick={() => {this.props.inserePagamento(this.props.pagamento)}}
                    />
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pagamento: state.alteraForm.pagamento
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inserePagamento : (pagamento) => {dispatch(inserePagamento(pagamento))},
        setValorCampo: (campo, valor) => {dispatch(setValorCampo(campo, valor))}
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPagamentos);