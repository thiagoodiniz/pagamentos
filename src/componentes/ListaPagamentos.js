import React, {Component} from 'react';
import {Table} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux';
import buscaPagamentos from '../store/actions/listaPagamentosAction';

export class ListaPagamentos extends Component {

    renderLinhaPagamento(pagamento){
        console.log(pagamento);
        return(
            <Table.Row key={pagamento.id}>
                <Table.Cell>{pagamento.forma_pagamento}</Table.Cell>
                <Table.Cell>{pagamento.moeda}</Table.Cell>
                <Table.Cell>{pagamento.valor}</Table.Cell>
                <Table.Cell>{pagamento.descricao}</Table.Cell>
                <Table.Cell>{pagamento.data}</Table.Cell>
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
                        <Table.HeaderCell>Data</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>
    
                    <Table.Body>
                        {this.props.listaPagamentos.map((pagamento) => {
                            return this.renderLinhaPagamento(pagamento)
                        })}
 
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        listaPagamentos: state.listaPagamentos.listaPagamentos,
        carregando: state.listaPagamentos.carregando,
        erro: state.listaPagamentos.erro,
        erros: state.listaPagamentos.erros
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buscaListaPagamentos: () => {dispatch(buscaPagamentos())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListaPagamentos)

