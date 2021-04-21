import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore,combineReducers} from 'redux';




///// learning Redux
//////////////////////////////////////////////////////////////////////////////////
// Part 1 
// what the teacher created
const EmpAction=()=>{
    return{
        type:'EMPLOYEE',
        payload:'Seconded one'
    }
}
// what I created
const OneAction = () => { 
    return { 
        type: "One",
        payload: "Hello there"
    }
}
// what I created 
const OneReducer=(state='hows it going', action) => { 
    if (action.type === "One"){ 
        return action.payload;
    }else { 
        return state;
    }
}

// teacher
const EmpReducer=(state='First one',action)=>{
    switch(action.type)
    {
        case 'EMPLOYEE':
            return action.payload;
        default:
            return state;
    }
}

let myStore=createStore(EmpReducer);
let myStoreOne = createStore(OneReducer);
// console.log(myStoreOne.getState());

// console.log(myStore.getState());

// myStore.dispatch(EmpAction());

// console.log(myStore.getState()); 

// myStoreOne.dispatch(OneAction());

// console.log(myStoreOne.getState());

//////////////////////////////////////////////////////////////////////////////////
// Part 2 

//(2) index.js
//--------------

/// teacher
const EmpAction1 =()=>{
    return{
        type:'EMPLOYEE',
        payload:'E001'
    }
}

// Me 
const Example2Action = () => { 
    return{
        type:'Ex2',
        payload:'Example 2'
    }
}

/// teacher
const EmpReducer1=(state='',action)=>{
    switch(action.type)
    {
        case 'EMPLOYEE':
            return action.payload;
        default:
            return state;
    }
} 

/// Me 
const Ex2Reducer=(state='',action)=>{
    switch(action.type)
    {
        case 'Ex2':
            return action.payload;
        default:
            return state;
    }
}


let initialState='E005';
let initialStateEx2 ='Example 2 with a variable';
let myStore1=createStore(EmpReducer1,initialState);
let myStore2 = createStore(Ex2Reducer, initialStateEx2);

// console.log(myStore2.getState());

// console.log(myStore1.getState());

// myStore.dispatch(EmpAction1());

// myStore2.dispatch(Example2Action());

// console.log(myStore2.getState());

// console.log(myStore1.getState());

/////////////////////////////////////////////////////////////////////////////////
/// part 3

//// teacher
const EmpAction3=()=>{
    return{
        type:'EMPLOYEE',
        payload:{empid:'E001',name:'John',contact:225588,dept:'ADMIN'}
    }
};
/// Me
const ExAction3 = () =>{ 
    return { 
        type:'Address',
        payload:{ street: "123 Main St", city: "Long Beach", area: "CA", bedRooms: 5}
    }
}
///// teacher
const EmpReducer3=(state={},action)=>{
    switch(action.type)
    {
        case 'EMPLOYEE':
            return action.payload;
        default:
            return state;
    }
}

/// me 

const ExReducer3 = (state={}, action) => { 
    if (action.type === "Address"){return action.payload;}
    else {return state;}
}

let initialState3={empid:'E004',name:'James',contact:225552,dept:'MKTG'};
let intStateEx3 = { street: "235 CarFax", city: "Lakewood", area: "AZ", bedRooms: 3};
let myStore3=createStore(EmpReducer3,initialState3);
let myStoreEx3 = createStore(ExReducer3, intStateEx3);

// console.log(myStoreEx3.getState());

// console.log(myStore3.getState());

// myStore3.dispatch(EmpAction3());
// myStoreEx3.dispatch(ExAction3());

// console.log(myStore3.getState());
// console.log(myStoreEx3.getState()); 

/////////////////////////////////////////////////////////////////////////////////
// Part 4
//// teacher
const EmpAction4=()=>{
    return{
        type:'EMPLOYEE',
        payload:{empid:'E001',name:'John',contact:225588,dept:'ADMIN'}
    }
}
/// Me
const ExAction4 = ()=>{ 
    return { 
        type:'Address',
        payload:{ street: "123 Main St", city: "Long Beach", area: "CA", bedRooms: 5}
    }
}


/// teacher
const StudAction4=()=>{
    return{
        type:'STUDENT',
        payload:{studid:'S001',name:'Peter',stream:'IT'}
    }
}
/// Me
const StudActionEx4 = ()=> { 
    return{
        type:'STUDENT',
        payload:{studid:'S001',name:'Michael',Grade: "A"}
    }
}

/// teacher
const EmpReducer4=(state={},action)=>{
    switch(action.type)
    {
        case 'EMPLOYEE':
            return action.payload;
        default:
            return state;
    }
}
// Me
const ExReducer4 = (state={}, action)=> { 
    switch(action.type)
    {
        case 'Address':
            return action.payload;
        default:
            return state;
    }
}

/// teacher
const StudReducer4=(state={},action)=>{
    switch(action.type)
    {
        case 'STUDENT':
            return action.payload;
        default:
            return state;
    }
}

/// Me
const StudReducerEx4=(state={},action)=>{
    switch(action.type)
    {
        case 'STUDENT':
            return action.payload;
        default:
            return state;
    }
}

//teacher
let reducersCombination4=combineReducers({emp:EmpReducer4,stud:StudReducer4});
// Me
let reducersEx4 = combineReducers({stud:StudActionEx4, house:StudReducerEx4 });
// teacher
let initialState4={emp:{empid:'E004',name:'James',contact:225552,dept:'MKTG'},stud:{studid:'S009',name:'Alex',stream:'MECH'}};
// Me
let intState4 = {stud:{studid:'S11',name:'Romeo',Grade: "B"},house:{ street: "235 CarFax", city: "Lakewood", area: "AZ", bedRooms: 3}};
// teacher
let myStore4=createStore(reducersCombination4,initialState4);
let myStoreEx4 = createStore(reducersEx4, intState4);

console.log(myStore4.getState());
console.log(myStoreEx4.getState());
myStore4.dispatch(EmpAction4());
myStoreEx4.dispatch(ExAction4());
myStoreEx4.dispatch(StudActionEx4());
myStore.dispatch(StudAction4());
console.log(myStoreEx4.getState());

console.log(myStore4.getState());

ReactDOM.render(
   
<App/>

,document.getElementById('root'));