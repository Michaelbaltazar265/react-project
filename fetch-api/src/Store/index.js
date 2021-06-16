


import {createStore,applyMiddleware,compose} from 'redux';
import reducersCombination from './../Reducers/index';
import thunk from 'redux-thunk';

const middleware=[thunk];

let myStore=createStore(reducersCombination,compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default myStore;