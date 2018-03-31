import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware,createStore } from 'redux';
import {Provider} from "react-redux";
import reducer from "./reducer";
import logger from 'redux-logger'
import thunk from "redux-thunk";


  const store = createStore(reducer,applyMiddleware(logger,thunk))

ReactDOM.render(
<Provider store={store}> 
<App store={store}/>
</Provider>

, document.getElementById('root'));
registerServiceWorker();
