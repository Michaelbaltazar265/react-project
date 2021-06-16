const CarReducer = (state={}, action)=> { 
    switch(action.type)
    {
        case "Car":
            return action.payload;
        default:
            return state;
    }
}

export default CarReducer;