import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Reducer} from './reducers/Reducers';
import logger from './middleware/logger';

const store = createStore(
    Reducer,
    applyMiddleware(logger)
);
console.log('*****', store.getState());



const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
