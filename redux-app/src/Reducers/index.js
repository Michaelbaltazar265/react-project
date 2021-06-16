import EmpReducer from './EmpReducer';
import StudReducer from './StudReducer';
import CarReducer from './CarReducer';
import AddressReducer from './AddressReducer';
import {combineReducers} from 'redux';

let reducersCombination=combineReducers({emp:EmpReducer,stud:StudReducer, car:CarReducer,add:AddressReducer});

export default reducersCombination;