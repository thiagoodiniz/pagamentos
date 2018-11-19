import React, {Component} from 'react';
import {Table} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux';
import buscaPagamentos from '../store/actions/listaPagamentosAction';
import {confirmaPagamento, cancelaPagamento, limpaState} from '../store/actions/alteraPagamentoAction';

export class ListaPagamentos extends Component {

    renderLinhaPagamento(pagamento){
        return(
            <Table.Row key={pagamento.id}>
                <Table.Cell>{pagamento.forma_pagamento}</Table.Cell>
                <Table.Cell>{pagamento.moeda}</Table.Cell>
                <Table.Cell>{pagamento.valor}</Table.Cell>
                <Table.Cell>{pagamento.descricao}</Table.Cell>
                <Table.Cell>{pagamento.status}</Table.Cell>
                <Table.Cell>
                    {pagamento.status === 'CRIADO' && 
                        <div>
                            <i title="Cancelar pagamento" onClick={() => {this.props.cancelaPagamento(pagamento.id)}} style={{cursor:'pointer'}} className="red times icon"></i>
                            <i title="Confirmar pagamento" onClick={() => {this.props.confirmaPagamento(pagamento.id)}} style={{cursor:'pointer'}}className="green check icon"></i>
                        </div>
                    }

                </Table.Cell>
            </Table.Row>
        );
    }

    componentDidMount(){
        this.props.buscaListaPagamentos();
    }
    
    render(){
        return(
            <div className='lista-pagamentos'>
                <h1>Lista de pagamentos</h1>
    
                <Table singleLine>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Forma Pagamento</Table.HeaderCell>
                        <Table.HeaderCell>Moeda</Table.HeaderCell>
                        <Table.HeaderCell>Valor</Table.HeaderCell>
                        <Table.HeaderCell>Descrição</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Ações</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>
    
                    <Table.Body>
                        {this.props.listaPagamentos.listaPagamentos.map((pagamento) => {
                            return this.renderLinhaPagamento(pagamento)
                        })}
 
                    </Table.Body>
                </Table>
                {   
                    this.props.listaPagamentos.carregando &&(
                        <div className="ui active centered inline loader"></div>
                    )
                }
                {   
                    this.props.listaPagamentos.erro &&(
                        <div className="ui negative message transition">
                            <i className="close icon"></i>
                        <div className="header">
                           Não foi possível obter a lista de pagamentos
                        </div>
                        </div>
                    )
                }
                {   this.props.alteraPagamentos.msg && (
                                        <div className="ui info message">
                                        <i className="close icon" onClick={this.props.removeMsg}></i>
                                        <div className="header">
                                            {this.props.alteraPagamentos.msg}
                                        </div>
                                    </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        listaPagamentos: state.listaPagamentos,
        alteraPagamentos: state.alteraPagamentos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buscaListaPagamentos: () => {dispatch(buscaPagamentos())},
        confirmaPagamento: (idPagamento) => {dispatch(confirmaPagamento(idPagamento))},
        cancelaPagamento: (idPagamento) => {dispatch(cancelaPagamento(idPagamento))},
        removeMsg: () => {dispatch(limpaState())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListaPagamentos)

