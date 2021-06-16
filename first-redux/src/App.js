import React from 'react';
import {connect} from 'react-redux';
import {combineReducers} from 'redux';

/////////////////////////////////////////////////////////////////////////////////

const EmpAction4=()=>{
  return{
      type:'EMPLOYEE',
      payload:{empid:'E001',name:'John',contact:225588,dept:'ADMIN'}
  }
} 

export const StudAction=()=>{
  return{
      type:'STUDENT',
      payload:{studid:'S001',name:'Peter',stream:'IT'}
  }
}

const EmpReducer4=(state={},action)=>{
  switch(action.type)
  {
      case 'EMPLOYEE':
          return action.payload;
      default:
          return state;
  }
} 

const StudReducer=(state={},action)=>{
  switch(action.type)
  {
      case 'STUDENT':
          return action.payload;
      default:
          return state;
  }
}



function App(props)
{
    return(<div>
      <table border="1">
          <thead>
              <tr>
                  <td>Emp Id</td>
                  <td>Name</td>
                  <td>Contact No</td>
                  <td>Department</td>
              </tr>
          </thead>
          <tbody>
          <tr>
                  <td>{props.em.empid}</td>
                  <td>{props.em.name}</td>
                  <td>{props.em.contact}</td>
                  <td>{props.em.dept}</td>
              </tr>
          </tbody>
      </table><br/>
      <button type="button" onClick={props.EAct}>Update Employee</button><br/><br/>
      <table border="1">
          <thead>
              <tr>
                  <td>Stud Id</td>
                  <td>Name</td>
                  <td>Stream</td>
              </tr>
          </thead>
          <tbody>
          <tr>
                  <td>{props.sd.studid}</td>
                  <td>{props.sd.name}</td>
                  <td>{props.sd.stream}</td>
              </tr>
          </tbody>
      </table><br/>
      <button type="button" onClick={props.SAct}>Update Student</button>
        </div>
        )
        };

        

        const mapStateToProps = (state)=>{
          return{
            em:state.emp,
            sd:state.stud,
          }
      }
      
      const mapDispatchToProps = (dispatch)=>{
          return{
            EAct:()=>{dispatch(EmpAction4())},
            SAct:()=>{dispatch(StudAction())},            
          }
      } 

      let reducersCombination=combineReducers({emp:EmpReducer4,stud:StudReducer});


        
      // connect(mapStateToProps,mapDispatchToProps)
      //  export default connect(mapStateToProps,mapDispatchToProps) (App);
       
  

 export default connect(mapStateToProps,mapDispatchToProps) (App);
