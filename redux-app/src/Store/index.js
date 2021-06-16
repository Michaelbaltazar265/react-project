import {createStore} from 'redux';
 import reducersCombination from './../Reducers/index';



let initialState={
    emp:{empid:'E004',name:'James',contact:225552,dept:'MKTG'},
    stud:{studid:'S009',name:'Alex',stream:'MECH'},
    car:{carId:221,brand:"Honda", model:"S2000", type:"Sports"}, 
    add:{address:"123 Main Street", city:"Long Beach", state:"CA", zipcode: 90815}
};

let myStore=createStore(reducersCombination,initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



export default myStore;
