import React from 'react';
import data from './Data';
import CustomButton from './practicePage'

let eid='',nm='',sl=0;
class App extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            empid:'',
            name:'',
            sal:0,
            data:data,
            view: "practice-1"
        }
        this.acceptEmpId=this.acceptEmpId.bind(this);
        this.acceptName=this.acceptName.bind(this);
        this.acceptSalary=this.acceptSalary.bind(this);
        this.buttonUpdateHandler=this.buttonUpdateHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    acceptEmpId(e)
    {
        eid=e.target.value;
    }
    acceptName(e)
    {
        nm=e.target.value;
    }
    acceptSalary(e)
    {
        sl=parseInt(e.target.value);
    }
    buttonUpdateHandler()
    {
        this.setState({empid:eid,name:nm,sal:sl})
    }
    handleChange (){ 
        this.setState({view: "practice-2"})
    }
    render()
    {
        if (this.state.view === "practice-1"){ 
            return(<div>
                <table>
                    <tr>
                        <td>Enter Emp Id: </td>
                        <td><input type="text" onChange={this.acceptEmpId}/></td>
                    </tr>
                    <tr>
                        <td>Enter Emp Name: </td>
                        <td><input type="text" onChange={this.acceptName}/></td>
                    </tr>
                    <tr>
                        <td>Enter Salary: </td>
                        <td><input type="text" onChange={this.acceptSalary}/></td>
                    </tr>
                </table>
                <button type="button" onClick={this.buttonUpdateHandler}>Update</button>
                <p>{this.state.empid}</p>
                <p>{this.state.name}</p>
                <p>{this.state.sal}</p>
    
                <div>
              {this.state.data.map(val=>
                    <div>
                        <div>{val.empid}</div>
                        <div>{val.name}</div>
                        <div>{val.sal}</div>
                        </div>
              )}  
            </div>

            <button onClick={this.handleChange} >Change</button>
            <p>By pressing this button you're hitting a event</p>
    
            </div>
            )

        }
        if (this.state.view === "practice-2"){ 

            return ( 
                <div>
                    <h1>A new page was clicked</h1>
                        < CustomButton />
                </div>
            )
        }
        
    }
}

export default App;