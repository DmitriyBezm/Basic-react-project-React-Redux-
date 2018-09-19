import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/common.scss';
import {Provider} from 'react-redux';
import { makeStore } from './reducers/store'

const store = makeStore()


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
