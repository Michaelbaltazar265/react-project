const EmpReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'EMPLOYEE':
            return action.payload;
        default:
            return state;
    }
}

export default EmpReducer;