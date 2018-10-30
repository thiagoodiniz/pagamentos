
import {Component} from 'react';
import PubSub from 'pubsub-js';

export default class TratadorErros extends Component{

    static publicaErros(erros){
        console.log('TratadorErros');
        for(var i =0; i < erros.length; i++){
            PubSub.publish('erro-validacao', erros[i]);
        }
    }

}