const StudReducer=(state={studid:'S009',name:'Alex',stream:'MECH'},action)=>{
    switch(action.type)
    {
        case 'STUDENT':
            return action.payload;
        default:
            return state;
    }
}

export default StudReducer;