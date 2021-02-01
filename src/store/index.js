import { createStore, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducer from './../reducers';

const composeEnhanchers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const stateInitial = {};
export const store = createStore(reducer, stateInitial, composeEnhanchers(applyMiddleware(promiseMiddleware)))