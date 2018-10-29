
import React, { Component } from 'react';

export default class InputCustomizado extends Component{
    render(){
        return(
            <div className="pure-u-1 pure-u-md-1-3">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input id={this.props.id} type={this.props.type} value={this.props.value} onChange={this.props.onChange}/>
            </div>
        );
    }
}
