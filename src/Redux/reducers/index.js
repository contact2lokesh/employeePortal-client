import { combineReducers } from "redux";
import {employeeReducer,addEmployeeReducer,editEmployeeReducer} from './employeeReducer'
export const rootReducer= combineReducers({
    employeeReducer,
    addEmployeeReducer,editEmployeeReducer})