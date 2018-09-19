import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from './';

const state = {};

export const makeStore = (initialState = state) => createStore(
  reducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  )
);
