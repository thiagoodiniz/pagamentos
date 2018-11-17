import React, {Component} from 'react';
import {Table} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux';
import buscaPagamentos from '../store/actions/listaPagamentosAction';

export class ListaPagamentos extends Component {

    renderLinhaPagamento(pagamento){
        return(
            <Table.Row key={pagamento.id}>
                <Table.Cell>{pagamento.forma_pagamento}</Table.Cell>
                <Table.Cell>{pagamento.moeda}</Table.Cell>
                <Table.Cell>{pagamento.valor}</Table.Cell>
                <Table.Cell>{pagamento.descricao}</Table.Cell>
                <Table.Cell>{pagamento.status}</Table.Cell>
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
                        <div class="ui active centered inline loader"></div>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        listaPagamentos: state.listaPagamentos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buscaListaPagamentos: () => {dispatch(buscaPagamentos())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListaPagamentos)

