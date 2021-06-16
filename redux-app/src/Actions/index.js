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

export const CarAction= () => { 
    return { 
        type: "Car", 
        payload: {carId:101 , brand: "Toyota", model: "4Runner", type: "SUV"}
    }
} 

export const AddressAction= () => { 
    return { 
        type: "Address", 
        payload: {address: "2020 pet", city: "New York", state: "NYC", zipcode: 20045}
    }
} 