import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ser from './ser';
import fire from './fire';
import { Link,browserHistory,Router,Route } from 'react-router'

ReactDOM.render((
	<Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/login" component={ser}/>

     </Router>
  ), document.getElementById('root')
);