import React from 'react'
import App from './components/App'
import routes from './routes'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise'


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
 <Provider store={createStoreWithMiddleware(reducers)}> 
    <BrowserRouter>
      <App/>
    </BrowserRouter>
 </Provider>, document.getElementById('app'));
   

    