import React from 'react'; 
import movies from './Movies';
import empDet from './emp';


function searchId(id)
{
    return function(val)
    {
        // return val.empid.toLowerCase().includes(id.toLowerCase());
         return val.empid.toLowerCase()===id.toLowerCase();
    }
}

class CustomButton extends React.Component { 
    constructor(props){ 
        super(props); 
        this.state = {
            isClicked: false,
            movies: movies,
            emp:empDet,
            eid:''
        }; 
        this.HandleChange2 = this.HandleChange2.bind(this);
        this.acceptEmpId=this.acceptEmpId.bind(this);
        this.onRemove=this.onRemove.bind(this);
    }

    HandleChange2(e){ 

        this.setState({isClicked: true})
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

    render (){ 

        // if(this.state.view === 'Practice-2'){ 

            return ( 
                <>
            <div> Hello Michael this is CustomButton</div>
            <div>
    
            { this.state.movies.map(val=>
                <div>
                    <div>{val.empid}</div>
                    <div>{val.name}</div>
                    <div>{val.year}</div>
                    </div>
          )}
          </div>
          <div> 
          <button onClick={this.HandleChange2} >Change to next page</button>
          </div> 

                <p>This is for Day 10 React learning </p>

                <div>
         <form>
             <input type="text" onChange={this.acceptEmpId}/>
         </form>
          {this.state.emp.filter(searchId(this.state.eid)).map(val=>
                <div>
                    <div>{val.empid}</div>
                    <div>{val.name}</div>
                    <div>{val.sal}</div>
                    <button type="button" onClick={()=>this.onRemove(val.empid)}>Remove</button>
                    </div>
          )}  
        </div>


          </>
            )

        }
    // }
}

export default CustomButton;
