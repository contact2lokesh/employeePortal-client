import {GET_ALL_EMPLOYEE_PENDING,
    GET_ALL_EMPLOYEE_SUCCESS,
    GET_ALL_EMPLOYEE_ERROR,
    ADD_EMPLOYEE_PENDING,
    ADD_EMPLOYEE_SUCCESS,
    ADD_EMPLOYEE_ERROR,EDIT_EMPLOYEE_ERROR,EDIT_EMPLOYEE_PENDING,EDIT_EMPLOYEE_SUCCESS, EDIT_EMPLOYEE_STATUS_PENDING, EDIT_EMPLOYEE_STATUS_SUCCESS, EDIT_EMPLOYEE_STATUS_ERROR} from '../type';

const initialState = {
    employeeList: [],
    addEmployee:{},
    editEmployee:{},
    editEmployeestatus:{},
}

export const employeeReducer = (
    state = initialState,
    { type, payload }
  ) => {
    switch (type) {
      case GET_ALL_EMPLOYEE_PENDING:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case GET_ALL_EMPLOYEE_SUCCESS:
        return {
          ...state,
          loading: false,
          employeeList: payload,
          error: null,
        };
      case GET_ALL_EMPLOYEE_ERROR:
        return {
          ...state,
          loading: false,
         employeeList: [],
          error: payload,
        };
  
      default:
        return state;
    }
  };

  export const addEmployeeReducer = (
    state = initialState,
    { type, payload }
  ) => {
    switch (type) {
      case ADD_EMPLOYEE_PENDING:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case ADD_EMPLOYEE_SUCCESS:
        return {
          ...state,
          loading: false,
          addEmployee: payload,
          error: null,
        };
      case ADD_EMPLOYEE_ERROR:
        return {
          ...state,
          loading: false,
         addEmployee:{},
          error: payload,
        };
  
      default:
        return state;
    }
  };
 
  export const editEmployeeReducer = (
    state = initialState,
    { type, payload }
  ) => {
    switch (type) {
      case EDIT_EMPLOYEE_PENDING:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case EDIT_EMPLOYEE_SUCCESS:
        return {
          ...state,
          loading: false,
          editEmployee: payload,
          error: null,
        };
      case EDIT_EMPLOYEE_ERROR:
        return {
          ...state,
          loading: false,
         editEmployee:{},
          error: payload,
        };
  
      default:
        return state;
    }
  };
 
  export const editStatusEmployeeReducer = (
    state = initialState,
    { type, payload }
  ) => {
    switch (type) {
      case EDIT_EMPLOYEE_STATUS_PENDING:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case EDIT_EMPLOYEE_STATUS_SUCCESS:
        return {
          ...state,
          loading: false,
          editEmployeestatus: payload,
          error: null,
        };
      case EDIT_EMPLOYEE_STATUS_ERROR:
        return {
          ...state,
          loading: false,
         editEmployeestatus:{},
          error: payload,
        };
  
      default:
        return state;
    }
  };


export default employeeReducer;