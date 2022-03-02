import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './redux/reducers/index.js'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

//const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const logger = createLogger({collapsed: true})
const store = createStore (allReducers, compose(applyMiddleware(thunk,logger)));

store.subscribe (()=>console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
  document.getElementById('root')
);
