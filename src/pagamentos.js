
import React,{Component} from 'react';
import InputCustomizado from'./componentes/InputCustomizado';
import axios from 'axios';
import TratadorErros from './TratadorErros';
import PubSub from 'pubsub-js';
import Loading from './css/loading.gif';

class FormularioPagamentos extends Component{

constructor(){
    super();
    this.state = {forma_pagamento: '', valor: '', moeda: '', descricao: ''};
    this.setValue = this.setValue.bind(this); 
    this.enviaForm = this.enviaForm.bind(this);
    }

 setValue(event){
    this.setState({[event.target.id]:event.target.value});
 }

 enviaForm(event){
     event.preventDefault();
     console.log('Enviando os dados');

     PubSub.publish('limpa-erros', {});
     axios.post('http://localhost:2000/pagamentos/pagamento', {pagamento: this.state})
        .then(result =>{
            console.log('Sucesso ao inserir um novo pagamento');
            this.setState({forma_pagamento: '', valor: '', moeda: '', descricao: ''});
            PubSub.publish('atualiza-lista-pagamentos', result);
         })
        .catch(erro =>{
            console.log('Erro ao inserir um novo pagamento');
            console.log(erro.response);
            if(erro.response.status === 400){
                new TratadorErros.publicaErros(erro.response.data);
            }
         });
 }

  render(){
    return(
      <div>  
            <form className="pure-form pure-form-stacked">
                <fieldset>
                    <div className="pure-g">

                        <InputCustomizado label="Forma Pagamento" id="forma_pagamento" type="text" value={this.state.forma_pagamento} onChange={this.setValue}/>
                        <InputCustomizado label="Valor" id="valor" type="text" value={this.state.valor} onChange={this.setValue}/>
                        <InputCustomizado label="Moeda" id="moeda" type="text" value={this.state.moeda} onChange={this.setValue}/>

                        <div className="pure-u-1 pure-u-md-1-3">
                            <label htmlFor="descricao">Descrição</label>
                            <textarea className="pure-input-1-2" id="descricao" type="text" value={this.state.descricao} onChange={this.setValue}/>
                        </div>
                    </div>

                    <button onClick={this.enviaForm} className="pure-button pure-button-primary">Confirmar</button>
                </fieldset>
            </form>
      </div>  
    );
  }
}

class TabelaPegamentos extends Component{

    confirmaPagamento(idPagamento){
        console.log(`confirmar pagamento ${idPagamento}`);
        
        axios.put(`http://localhost:2000/pagamentos/pagamento/${idPagamento}`)
            .then(result =>{
                console.log('Pagamento confirmado');
                PubSub.publish('atualiza-lista-pagamentos');
            })
            .catch(erro =>{
                    console.log('houve um erro');
                    console.log(erro);
            })
    }

    cancelarPagamento(idPagamento){
        console.log(`cancelar pagamento ${idPagamento}`);
        
        axios.delete(`http://localhost:2000/pagamentos/pagamento/${idPagamento}`)
            .then(result =>{
                console.log('Pagamento cancelado');
                PubSub.publish('atualiza-lista-pagamentos');
            })
            .catch(erro =>{
                    console.log('houve um erro');
                    console.log(erro);
            })
    }

    render(){
        if(this.props.isLoading){
            return(
             <div>   
                <label>Carregando a lista de pagamentos</label>
             <div>
               <img src={Loading} alt="Carregando lista de pagamentos"/>
              </div>
              </div> 
            )    
        }else{
            return(
                <table className="pure-table">
                    <thead>
                        <tr>
                            <th>Forma Pagamento</th>
                            <th>Valor</th>
                            <th>Moeda</th>
                            <th>Descrição</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
    
                    <tbody>
                        {   
                            this.props.listaPagamentos.map(pagamento =>{
                                return( 
                                    <tr key={pagamento.id} className="pure-table-odd">
                                        <td>{pagamento.forma_pagamento}</td>
                                        <td>{pagamento.valor}</td>
                                        <td>{pagamento.moeda}</td>
                                        <td>{pagamento.descricao}</td>
                                        <td>{pagamento.status}</td>
                                        <td>              
                                            {pagamento.status === 'CRIADO' &&
                                              <div>                           
                                                <button onClick={()=>{this.confirmaPagamento(pagamento.id)}} className="button-success pure-button">Confirmar</button>
                                                <button onClick={()=>{this.cancelarPagamento(pagamento.id)}} className="button-error pure-button">Cancelar</button>
                                              </div>
                                             }
                                       </td>
                                    </tr>
                                );
                            })
                        }
    
                    </tbody>
                </table>
            );
        }
    }
}

export default class pagamentosBox extends Component{

    constructor(){
        super();
        this.state = {listaPagamentos: [], isLoading: true};
    }

    componentDidMount(){

        this.buscaLista();

        PubSub.subscribe('atualiza-lista-pagamentos', () => {
            this.setState({listaPagamentos: [], isLoading: true});
            this.buscaLista();
        })
    }

    buscaLista(){
        axios.get('http://localhost:2000/pagamentos/lista')
            .then(lista => { 
                this.setState({listaPagamentos: lista.data, isLoading: false});   
            })
            .catch(erro =>{
                console.log(erro);
            });
    }

    render(){
        return(
           <div> 
                <div className="header">
                    <h1>Pagamentos</h1>
                </div>
                <div className="content">
                        <FormularioPagamentos/>
                        <TabelaPegamentos listaPagamentos={this.state.listaPagamentos} isLoading={this.state.isLoading}/>
                </div>
            </div>
        );
    }
}