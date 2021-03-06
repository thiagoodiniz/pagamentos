import React, {Component} from 'react';
import {Form, Input, TextArea, Button, Select} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux';
import {inserePagamento, limpaMsg} from '../store/actions/inserePagamentosAction';
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
    
    constructor(props){
        super(props);
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
                <Form>
                    <Form.Group>
                        <Form.Field 
                            error={this.props.inserePagamentosState.erros.camposComErro.includes('pagamento.forma_pagamento')}
                            control={Select}
                            options={opcoesPagamento}
                            label={{ children: 'Forma de Pagamento', htmlFor: 'forma_pagamento' }}
                            placeholder='Selecione...'
                            searchInput='forma_pagamento'
                            value={this.props.alteraForm.pagamento.forma_pagamento}
                            onChange={this.selectFormaPagamento}
                        />
                        <Form.Field
                            error={this.props.inserePagamentosState.erros.camposComErro.includes('pagamento.moeda')}
                            control={Select}
                            options={tiposMoedas}
                            label={{ children: 'Moeda', htmlFor: 'moeda' }}
                            placeholder='Selecione...'
                            id='moeda'
                            value={this.props.alteraForm.pagamento.moeda}
                            onChange={this.selectMoeda}
                        />
                        <Form.Field
                            error={this.props.inserePagamentosState.erros.camposComErro.includes('pagamento.valor')}
                            id='valor'
                            control={Input}
                            label='Valor'
                            placeholder='Digite o valor'
                            value={this.props.alteraForm.pagamento.valor}
                            onChange={this.setValorCampo}
                        />
                    </Form.Group>
                    <Form.Field
                        id='descricao'
                        control={TextArea}
                        label='Descrição do pagamento'  
                        placeholder='Digite a descrição'
                        value={this.props.alteraForm.pagamento.descricao}
                        onChange={this.setValorCampo}
                        />
                    {   
                        this.props.inserePagamentosState.carregando &&(
                            <div className="ui active centered inline loader"></div>
                        )
                    }
                    {   
                        this.props.inserePagamentosState.erro &&(
                            <div className="ui negative message transition">
                                <i className="close icon" onClick={this.props.removeMsg}></i>
                                <div className="header">
                                    Ocorreu um erro ao inserir o pagamento.
                                </div>
                                <ul className="list">
                                {this.props.inserePagamentosState.erros.msg.map((msg) => {
                                    return <li key={msg}>{msg}</li>
                                })}
                                </ul>
                            </div>
                        )
                    }
                    {   this.props.inserePagamentosState.msg && (
                            <div className="ui info message">
                                <i className="close icon" onClick={this.props.removeMsg}></i>
                                <div className="header">
                                    {this.props.inserePagamentosState.msg}
                                </div>
                            </div>
                        )
                    }
                    <Form.Field
                        control={Button}
                        content='Enviar os dados'
                        onClick={() => {this.props.inserePagamento(this.props.alteraForm.pagamento)}}
                    />
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        alteraForm: state.alteraForm,
        inserePagamentosState: state.inserePagamento
        }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inserePagamento : (pagamento) => {dispatch(inserePagamento(pagamento))},
        setValorCampo: (campo, valor) => {dispatch(setValorCampo(campo, valor))},
        removeMsg: () => {dispatch(limpaMsg())}
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPagamentos);