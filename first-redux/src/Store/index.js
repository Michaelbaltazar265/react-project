import {createStore} from 'redux';
import reducersCombination from './../App'


let initialState={
    emp:{empid:'E004',name:'James',contact:225552,dept:'MKTG'},
    stud:{studid:'S009',name:'Alex',stream:'MECH'}
};

let myStore=createStore(reducersCombination,initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



export default myStore;