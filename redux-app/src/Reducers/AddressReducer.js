const AddressReducer=(state={},action)=>{
    switch(action.type)
    {
        case "Address":
            return action.payload;
        default:
            return state;
    }
}

export default AddressReducer;