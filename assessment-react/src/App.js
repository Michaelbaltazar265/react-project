import React from 'react';
import empDet from './EmpDet';

////////// question 1 
// Sam wants to display an array of objects (e.g., Employee Details) on the
// browser and wants to apply filter and remove features on the basis of
// Employee ID. Please write down the requisite React code to fulfill his
// requirements. 

function searchId(id)
{
    return function(val)
    {
        return val.empid.toLowerCase()===id.toLowerCase();
    }
}

class Qestion1 extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            emp:empDet,
            eid:''
        }
        this.acceptEmpId=this.acceptEmpId.bind(this);
        this.onRemove=this.onRemove.bind(this);
    }
    acceptEmpId(e)
    {
        this.setState({eid:e.target.value})
    }
    onRemove(id)
    {
        let emp_upd=this.state.emp.filter(function(val){return(val.empid!=id)})
        this.setState({emp:emp_upd})
    }
    render()
    {
        return(<div>
         <form>
             <input type="text" onChange={this.acceptEmpId}/>
         </form>
          {this.state.emp.filter(searchId(this.state.eid)).map(props=>
                <div>
                    <div>{props.empid}</div>
                    <div>{props.name}</div>
                    <div>{props.year}</div>
                    <button type="button" onClick={()=>this.onRemove(props.empid)}>Remove</button>
                    </div>
          )}  
        </div>)
    }
}


//// question 2 is below /////////////////////////////////////////////
//2. Illustrate the difference between a stateful and stateless component in
//React with a proper program. 
//// state
class BooksClass extends React.Component  {
    constructor() {
      super()
      this.state = {
        book: "Harry Potter"
      }
    }
    render() {
       return ( 
        <div>
            { 
                `My favorite book is ${this.state.book}`
            }
        </div>
       )
    }
   } 

   // stateless 
   const bklist = ["harry potter1", "harry potter 2"];
   const BooksList = (books) => {
    return (
      <ul>
        {books.map(book => {
          return <li>book</li>
        })}
      </ul>
    )
   }




  
/// question 3 is below //////////////////// 
// John wants to create four text fields for entering the following data:
// Student Id, Name, Stream, Contact Number.
// He also wants to create a button so that the data entered within these
// text fields should get displayed on the browser. Write a code to help him
// out. 
const student = { 
    id: 0,
    name: '',
    stream: "",
    contactNumber: 0
};
 class Question3 extends React.Component { 
     constructor(props){ 
         super(); 
         this.state = { 
             id: 0,
             name: '',
             stream: '',
             contactNumber: 0

         }
         this.studentIdChange = this.studentIdChange.bind(this); 
         this.studentNameChange = this.studentNameChange.bind(this);
         this.studentstrChange = this.studentstrChange.bind(this);
         this.studentnumChange = this.studentnumChange.bind(this);
         this.handleStudentChange = this.handleStudentChange.bind(this); 

     } 
     studentIdChange(e){ 
         student.id = parseInt(e.target.value);
     }
     studentNameChange(e){ 
        student.name = e.target.value;
    }
    studentstrChange(e){ 
        student.stream = e.target.value;
    }
    studentnumChange(e){ 
        student.contactNumber = parseInt(e.target.value);
    }
handleStudentChange (){ 
    this.setState({ 
        id: student.id,
        name: student.name,
        stream: student.stream,
        contactNumber: student.contactNumber
    })
}



     render (){ 
         return( 
            <div>
            <label>Studenet ID</label>
            <input onChange={this.studentIdChange}></input>
            <label>Name</label>
            <input onChange={this.studentNameChange}></input>
            <label>Studenet stream</label>
            <input onChange={this.studentstrChange}></input>
            <label>Studenet number</label>
            <input onChange={this.studentnumChange}></input>
            <button onClick={this.handleStudentChange} >submit</button>
         <p>r{this.state.stream} </p>
             <p>r{this.state.id} </p>
             <p>r{this.state.name} </p>
             <p>r{this.state.contactNumber} </p>

        </div>
         )

     }
 }

 ///// question 8 
 // 8. Write a program to create four different components by considering one of
// them as a parent and the rest as child components. 


const student1 = { 
    id: 0,
    name: '',
    contactNumber: 0
};
 class Question8 extends React.Component { 
     constructor(props){ 
         super(); 
         this.state = { 
             id: 0,
             name: '',
             contactNumber: 0

         }
         this.studentIdChange = this.studentIdChange.bind(this); 
         this.studentNameChange = this.studentNameChange.bind(this);
         this.studentnumChange = this.studentnumChange.bind(this);
         this.handleStudentChange = this.handleStudentChange.bind(this); 

     } 
     studentIdChange(e){ 
         student1.id = parseInt(e.target.value);
     }
     studentNameChange(e){ 
        student1.name = e.target.value;
    }
    studentnumChange(e){ 
        student1.contactNumber = parseInt(e.target.value);
    }
handleStudentChange (){ 
    this.setState({ 
        id: student1.id,
        name: student1.name,
        contactNumber: student1.contactNumber
    })
}



     render (){ 
         return( 
            <div>
            <label>Studenet ID</label>
            <input onChange={this.studentIdChange}></input>
            <label>Name</label>
            <input onChange={this.studentNameChange}></input>
            <label>Studenet number</label>
            <input onChange={this.studentnumChange}></input>
            <button onClick={this.handleStudentChange} >submit</button>
             <p>r{this.state.id} </p>
             <p>r{this.state.name} </p>
             <p>r{this.state.contactNumber} </p>

        </div>
         )

     }
 }



////////////////// quesstion 6 is below //////////////////////////////////
///////// 6. Write a program to display the current time on the browser.

const DisplayTime = () => {

    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    return (<div>
        <p>{(hours >= 12) ? (hours - 12) : hours}:{(mins > 9) ? mins : `0${mins}`}:{(secs > 9) ? secs : `0${secs}`}</p>
    </div>)
}

////////////////// quesstion 9 is below //////////////////////////////////
// Write a program to apply CSS styles in JSX format on a text. (5 marks)

const style = {
    backgroundColor: "black",
    color: "green"
}
const StyleJSX = () => {
    return (
        <h1 className='title' style={style}> Hello World</h1>
    )
}


/////////////// Below is 5 [i] //////////////////////////// 
//5. Write a program to explain the working mechanism of following Lifecycle
// (i) getDerivedStateFromProps()
class GetStateFromProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            empid: 'E001 did it update',
            name: 'Peter did it update',
            year: 1991
        }
        this.buttonUpdateHandler = this.buttonUpdateHandler.bind(this);
    }
    buttonUpdateHandler() {
        //this.setState({empid:'E012',name:'Alex',sal:5100})
        this.setState({ empid: this.props.eid, name: this.props.nm, sal: this.props.year })
    }
    static getDerivedStateFromProps(props, state) {
        //return{empid:props.eid,name:props.nm,sal:props.sl}
        return { empid: 'E012Yes', name: 'Alex Yes', year: 2020 }
    }
    render() {
        return (<div>
            <button type="button" onClick={this.buttonUpdateHandler}>Update</button>
            <p>{this.state.empid}</p>
            <p>{this.state.name}</p>
            <p>{this.state.year}</p>
        </div>)
    }
}

/////////////// Below is 5 [ii] //////////////////////////// 
//5. Write a program to explain the working mechanism of following Lifecycle
// (ii) getSnapShotBeforeUpdate() 


class ColorChange extends React.Component {
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
        </div>
      );
    }
  }

/////////////////// question 7 is below //////////////////////////////////////
// Write a program that demonstrates destructuring of props.
const person1 = {
    firstName: "Lindsay",
    lastName: "Criswell",
    city: "NYC"
  }

  const { firstName, lastName, city } = person1;

const DemonDestructuring = () =>{ 
return ( 
    <>
    <div>{` hello my name is ${person1.firstName} i am from ${person1.city}`}</div>
    <div> {` helllo my name is ${firstName}` }</div>
    </>
)
}


////////////////// question 4 is below ///////////////////////////////////
// Write a program to illustrate the usage of componentDidMount().
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emp: []
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ emp: empDet })
        }, 5000)
    }
    render() {
        return (<div>
            {this.state.emp.map(props =>
                <div>
                    <div>{props.empid}</div>
                    <div>{props.name}</div>
                    <div>{props.year}</div>
                </div>
            )}
            <Qestion1/>
            <div>
                <GetStateFromProps />
            </div>  
           
            <  BooksClass />
            <  Question8 />
            <Question3/>
            <DisplayTime/>
            <ColorChange />
            <DemonDestructuring/>
            <StyleJSX />
        </div>)
    }
}

export default App;