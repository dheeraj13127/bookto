import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import Amplify from "aws-amplify";
import {createStore,applyMiddleware} from 'redux'
import { rootReducer } from './components/redux/reducers';
import thunk from 'redux-thunk'
import './polyfill'
import awsExports from "./aws-exports.js";
const store=createStore(rootReducer,applyMiddleware(thunk))

Amplify.configure(awsExports);
ReactDOM.render(
 <Provider store={store}>
    <App />
 </Provider>,


  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
