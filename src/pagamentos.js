
import React,{Component} from 'react';
import InputCustomizado from'./componentes/InputCustomizado';

export class formularioPagamentos extends Component{

constructor(){
    super();
    this.state = {formaPagamento: '', valor: '', moeda: '', descricao: ''};
    this.setValue = this.setValue.bind(this); 
    }

 setValue(event){
    this.setState({[event.target.id]:event.target.value});
 }

  render(){
    return(
      <div>  
        <div className="header">
            <h1>Pagamentos</h1>
        </div>
        <div className="content">
            <form className="pure-form pure-form-stacked">
                <fieldset>
                    <div className="pure-g">

                        <InputCustomizado label="Forma Pagamento" id="formaPagamento" type="text" value={this.state.formaPagamento} onChange={this.setValue}/>
                        <InputCustomizado label="Valor" id="valor" type="text" value={this.state.valor} onChange={this.setValue}/>
                        <InputCustomizado label="Moeda" id="moeda" type="text" value={this.state.moeda} onChange={this.setValue}/>

                        <div className="pure-u-1 pure-u-md-1-3">
                            <label htmlFor="descricao">Descrição</label>
                            <textarea className="pure-input-1-2" id="descricao" type="text" value={this.state.descricao} onChange={this.setValue}/>
                        </div>
                    </div>

                    <button type="submit" className="pure-button pure-button-primary">Confirmar</button>
                </fieldset>
            </form>
        </div>
      </div>  
    );
  }
}