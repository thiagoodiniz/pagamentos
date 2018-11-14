import React from 'react';
import {Table} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export const ListaPagamentos = (lista) => {
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
                <Table.Row>
                    <Table.Cell>John Lilki</Table.Cell>
                    <Table.Cell>September 14, 2013</Table.Cell>
                    <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                    <Table.Cell>No</Table.Cell>
                    <Table.Cell>No</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Jamie Harington</Table.Cell>
                    <Table.Cell>January 11, 2014</Table.Cell>
                    <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                    <Table.Cell>Yes</Table.Cell>
                    <Table.Cell>No</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Jill Lewis</Table.Cell>
                    <Table.Cell>May 11, 2014</Table.Cell>
                    <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                    <Table.Cell>Yes</Table.Cell>
                    <Table.Cell>No</Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>
        </div>
    );
}