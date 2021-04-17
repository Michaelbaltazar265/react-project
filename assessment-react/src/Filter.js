// import React from 'react';
// import MovieTitle from './Movies';

// function searchId(id)
// {
//     return function(val)
//     {
//         //return val.empid.toLowerCase().includes(id.toLowerCase());
//         return val.empid.toLowerCase()===id.toLowerCase();
//     }
// }

// class App extends React.Component{
//     constructor(props)
//     {
//         super(props);
//         this.state={
//             emp:empDet,
//             eid:''
//         }
//         this.acceptEmpId=this.acceptEmpId.bind(this);
//         this.onRemove=this.onRemove.bind(this);
//     }
//     acceptEmpId(e)
//     {
//         this.setState({eid:e.target.value})
//     }
//     onRemove(id)
//     {
//         let emp_upd=this.state.emp.filter(function(val){return(val.empid!=id)})
//         this.setState({emp:emp_upd})
//     }
//     render()
//     {
//         return(<div>
//          <Input acptid={this.acceptEmpId}/>
//          <Search_Remove em={this.state.emp} e_id={this.state.eid} rm={this.onRemove}/>
//         </div>)
//     }
// }
// function Input({acptid})
// {
//     //const{acptid}=props;
//     return(<div>
//         <form>
//              <input type="text" onChange={acptid}/>
//          </form>
//     </div>)
// }
// function Search_Remove({em,e_id,rm})
// {
//     //const{em,e_id,rm}=props;
//     return(<div>
//         {em.filter(searchId(e_id)).map(val=>
//                 <div>
//                     <div>{val.empid}</div>
//                     <div>{val.name}</div>
//                     <div>{val.sal}</div>
//                     <button type="button" onClick={()=>rm(val.empid)}>Remove</button>
//                     </div>
//           )} 
//     </div>)
// }

// export default App;