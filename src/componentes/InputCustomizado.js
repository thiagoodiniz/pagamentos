
import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default class InputCustomizado extends Component{

    constructor(){
        super();
        this.state = {msgErro: ''}    
    }

    componentDidMount(){
        PubSub.subscribe('erro-validacao', (topico, erro) =>{
            if(erro.param === `pagamento.${this.props.id}`){
                this.setState({msgErro: erro.msg});
             }
        });

        PubSub.subscribe('limpa-erros', (topico, erro) =>{
             this.setState({msgErro: ''});   
        });
    }

    render(){
        return(
            <div className="pure-u-1 pure-u-md-1-3">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input id={this.props.id} type={this.props.type} value={this.props.value} onChange={this.props.onChange}/>{this.state.msgErro}
            </div>
        );
    }
}
