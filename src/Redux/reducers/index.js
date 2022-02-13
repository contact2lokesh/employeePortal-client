import { combineReducers } from "redux";
import {employeeReducer,addEmployeeReducer,editEmployeeReducer,editStatusEmployeeReducer} from './employeeReducer'
export const rootReducer= combineReducers({
    employeeReducer,
    addEmployeeReducer,editEmployeeReducer,editStatusEmployeeReducer})