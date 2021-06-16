const EmpReducer=(state={empid:'E004',name:'James',contact:225552,dept:'MKTG'},action)=>{
    switch(action.type)
    {
        case 'EMPLOYEE':
            return action.payload;
        default:
            return state;
    }
}

export default EmpReducer;