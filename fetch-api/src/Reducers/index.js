import EmpReducer from './EmpReducer';
import StudReducer from './StudReducer';
// import CarReducer from './CarReducer';
// import AddressReducer from './AddressReducer';
import UserReducer from './UserReducer';
import {combineReducers} from 'redux';

let reducersCombination=combineReducers({emp:EmpReducer,stud:StudReducer, user:UserReducer});

export default reducersCombination;