import React from 'react';
import {connect} from 'react-redux';
import {EmpAction} from './Actions/index';
import {StudAction} from './Actions/index';
import {CarAction } from './Actions/index';
import {AddressAction} from './Actions/index';
import {UserAction} from './Actions/index';

//npm install react-redux

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
        <button type="button" onClick={props.UAct}>Show Details</button>
        <p>
          {props.ur.map(val=>
            <div>
                <table border="1">
                <tr key={val.id}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                </tr>
                </table>
            </div>
            )}
            </p>


    </div>
    )
}



const mapStateToProps=(state)=>{
    return{
        em:state.emp,
        sd:state.stud,
        car:state.car,
        add:state.add,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        EAct:()=>{dispatch(EmpAction())},
        SAct:()=>{dispatch(StudAction())},
        CarAct:()=>{dispatch(CarAction())},
        AddAct:()=>{dispatch(AddressAction())}
        
    }
} 






export default connect(mapStateToProps,mapDispatchToProps) (App);