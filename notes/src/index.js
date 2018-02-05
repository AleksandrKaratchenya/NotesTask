import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store=createStore(reducer,action);

ReactDOM.render((
<Provider>
  <Router>
  <div>
    <Route exact path="/" component={App} />
    </div>
  </Router>
</Provider>
), document.getElementById('root'));
registerServiceWorker();
