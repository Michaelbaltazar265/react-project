export const EmpAction=()=>{
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

export const UserAction=(dispatch)=>{
    fetch('http://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(res=>dispatch({type:'USER',payload:res}))
}