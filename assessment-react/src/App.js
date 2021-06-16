import React from 'react';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';


// 1. Explain Redux Architecture with a suitable example. (10 marks)


//  Actions/index.js
// ------------------------
export const HouseAction=()=>{
    return{
        type:'House',
        payload:{address: "123 Mian"}
    }
}

export const CarAction=()=>{
    return{
        type:'Car',
        payload:{brand: "Honda"}
    }
}
// -------------------------------
// Reducers/HouseReducer.js
// -------------------------------
const HouseReducer=(state={},action)=>{
    if (action.type === 'House'){ 
        return action.payload;
    } else { 
        return state;
    }
    
}

export default HouseReducer;
// -------------------------------
// Reducers/CarReducer.js
// -------------------------------
const CarReducer=(state={},action)=>{
    if (action.type === 'Car'){ 
        return action.payload;
    } else { 
        return state;
    }
}

export default  CarReducer;
// -------------------------------
// Reducers/index.js
// -------------------------------
import HouseReducer from './HouseReducer';
import CarReducer from './CarReducer';
import {combineReducers} from 'redux';

let reducersCombination=combineReducers({house:HouseReducer,car:CarReducer});

export default reducersCombination;
-------------------------------
Store/index.js
------------------
import {createStore} from 'redux';
import reducersCombination from './../Reducers/index';
import {HouseAction,CarAction} from './../Actions/index';

let initialState={house:{address: "6754 Carfax"},car: {brand: "Lexus"}};

let myStore=createStore(reducersCombination,initialState);

console.log(myStore.getState());

myStore.dispatch(HouseAction());

myStore.dispatch(CarAction());

console.log(myStore.getState());

export default myStore;
-------------------------------
src/index.js
-------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import myStore from './Store/index';


ReactDOM.render(<App/>,document.getElementById('root'));

// -------------------------------
// App.js
// ---------
import React from 'react';

function App()
{
    return(<div>
        <p1>App</p1>
    </div>)
}

export default App;
// -------------------------------



// 2. Explain the working mechanism of connect and Provider in React-Redux with
// a proper program. (5 marks) 

//// all in App.js 
 const CarAction= () => { 
    return { 
        type: "Car", 
        payload: {carId:101 , brand: "Toyota", model: "4Runner", type: "SUV"}
    }
} 

 const AddressAction= () => { 
    return { 
        type: "Address", 
        payload: {address: "2020 pet", city: "New York", state: "NYC", zipcode: 20045}
    }
}  

const AddressReducer=(state={},action)=>{
    switch(action.type)
    {
        case "Address":
            return action.payload;
        default:
            return state;
    }
} 

const CarReducer = (state={}, action)=> { 
    switch(action.type)
    {
        case "Car":
            return action.payload;
        default:
            return state;
    }
} 

let reducersCombination=combineReducers({car:CarReducer,add:AddressReducer});

let initialState={
    car:{carId:221,brand:"Honda", model:"S2000", type:"Sports"}, 
    add:{address:"123 Main Street", city:"Long Beach", state:"CA", zipcode: 90815}
};

let myStore=createStore(reducersCombination,initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


function Question2 () { 
    return ( 

        <table border="1">
        <thead>
            <tr>
            <td>Car Id</td>
                <td>Brand</td>
                <td>Model</td>
                <td>Type</td>
            </tr>
        </thead>
        <tbody>
        <tr>
                <td>{props.car.carId}</td>
                <td>{props.car.brand}</td>
                <td>{props.car.model}</td>
                <td>{props.car.type}</td>
            </tr>
        </tbody>
    </table><br/>
    <button type="button" onClick={props.CarAct}>Update Car</button> 


    <table border="1">
        <thead>
            <tr>
                <td>Address</td>
                <td>City</td>
                <td>State</td>
                <td>Zipcode</td>
            </tr>
        </thead>
        <tbody>
        <tr>
                <td>{props.add.address}</td>
                <td>{props.add.city}</td>
                <td>{props.add.state}</td>
                <td>{props.add.zipcode}</td>
            </tr>
        </tbody>
    </table><br/>
    <button type="button" onClick={props.AddAct}>Update Address</button>

    )
} 

const mapStateToProps=(state)=>{
    return{
       
        car:state.car,
        add:state.add,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
  
        CarAct:()=>{dispatch(CarAction())},
        AddAct:()=>{dispatch(AddressAction())}
        
    }
} 






export default connect(mapStateToProps,mapDispatchToProps) (App);


// index.js 
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import myStore from './App';
// import {Provider} from 'react-redux';

// ReactDOM.render(<Provider store={myStore}>
//     <App/>
//     </Provider>,
//     document.getElementById('root'));

// 3. Illustrate a simple CRUD operation in React. (5 marks)

const student = {
    id: 1001,
    name: 'Nick'
 };
 
class Crud extends React.Component {
    constructor(props){
        super();
        this.state = {
            id: student.id,
            name: student.name
            
 
        }
        this.studentIdChange = this.studentIdChange.bind(this);
        this.studentNameChange = this.studentNameChange.bind(this);
        this.handleStudentChange = this.handleStudentChange.bind(this);
        this.deleteId = this.deleteId.bind(this);
        this.deleteName = this.deleteName.bind(this);
 
    }
    studentIdChange(e){
        student.id = parseInt(e.target.value);
    }
    studentNameChange(e){
       student.name = e.target.value;
   }
 
handleStudentChange (){
   this.setState({
       id: student.id,
       name: student.name,
       
   })
} 

deleteId (){ 
    this.setState({id: ""})
};
 
deleteName(){ 
    this.setState({name: ""})
}
 
 
    render (){
        return(
           <div>
           <label>Studenet ID</label>
           <input onChange={this.studentIdChange}></input>
           <button onClick={this.deleteId}>Delete</button>
           <label>Name</label>
           <input onChange={this.studentNameChange}></input>
           <button onClick={this.deleteName}>Delete</button>
         <br/>
         <button onClick={this.handleStudentChange} >Submit</button>
            <p>{this.state.id} </p>
            <p>{this.state.name}</p>
           
 
       </div>
        )
 
    }
}





// 4. Explain the following with a suitable program (5*5= 25 marks)
// (i) filter()

//  const names = ['Michael', "Mary", "Romeo", "Anthony", "Ashley"];

// function exFilter (arr){ 
//    const result = arr.filter(name => name.length > 6);
//     return result;
// }

// console.log(exFilter(names));


// (ii) componentDidUpdate() 

class Color extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({favoritecolor: "yellow"})
      }, 1000)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
      document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.favoritecolor;
    }
    componentDidUpdate() {
      document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
    }
    render() {
      return (
        <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <div id="div1"></div>
          <div id="div2"></div>

          <div>
              <br/>
          </div>

          <div>
              <ExRender/>
              <br/>
          </div>

          <div>
              <Greeting/>
              <br/>
          </div>
          <div>
              <br/>
             < Crud/>
          </div>
        </div>
      );
    }
  }
  
// (iii) sort()
const arr = [1, 30, 4, 21, 100000, 5, 45];
function exSort (arr){ 
    let result = arr.sort((a,b) => a - b);
    return result;
}

console.log(exSort(arr));

// (iv) setState()
class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
        this.state = {
            greeting: 'Hello!'
        };
    }
    click(e) {
        this.setState({
              greeting: 'Hello World!'
        });
    }
    render() {
        return(
            <div>
                <p>{this.state.greeting}</p>
                <button onClick={this.click}>setState</button>
            </div>
        );
    }
    
}

// (v) render() 

class ExRender extends React.Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
        this.state = {
            name: 'Hello Name is Michael'
        };
    }
    click(e) {
        this.setState({
              name: 'Hello Name is John'
        });
    }
    render() {
        return(
            <div>
                <p>{this.state.name}</p>
                <button onClick={this.click}>Render</button>
            </div>
        );
    }
    
}


// 5. Explain variable hoisting in JavaScript with a proper example. (5 marks)

function hoisting (){ 
    sen="This we will because its a var keyword";
console.log(sen);
var sen;

senTwo="Its not going to show up because its let";
console.log(senTwo);
let senTwo;

seThree="Its not going to show up because its a const";
console.log(senThree);
const senThree=10;
}
hoisting();


export default Color;