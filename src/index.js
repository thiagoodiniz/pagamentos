import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import pagamentosBox from './pagamentos';
import { BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <div>
            <App>
                <Route path="/"/>
                <Route path="/pagamentos" component={pagamentosBox}/>
            </App>
        </div>
    </Router>
    , document.getElementById('root')
);

