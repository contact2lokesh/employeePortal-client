import {GET_ALL_EMPLOYEE_PENDING,
    GET_ALL_EMPLOYEE_SUCCESS,
    GET_ALL_EMPLOYEE_ERROR,
    ADD_EMPLOYEE_PENDING,
    ADD_EMPLOYEE_SUCCESS,
    ADD_EMPLOYEE_ERROR,
  EDIT_EMPLOYEE_ERROR,EDIT_EMPLOYEE_PENDING,EDIT_EMPLOYEE_SUCCESS, EDIT_EMPLOYEE_STATUS_ERROR, EDIT_EMPLOYEE_STATUS_SUCCESS, EDIT_EMPLOYEE_STATUS_PENDING} from '../type';
    import { addEmployee, editEmployee, editStatusEmployee, getAllEmployee } from '../../components/api/api';
var Alert;

    export const getAllEmployeeAction = () => {
    return async (dispatch) => {
      dispatch({ type: GET_ALL_EMPLOYEE_PENDING, loading: true });
      try {
        const EmploeeResult = await getAllEmployee();
        return dispatch({
          type: GET_ALL_EMPLOYEE_SUCCESS,
          payload: EmploeeResult,
        });
      } catch (err) {
        if (!!err && !!err.response && !!err.response.data) {
        //   Alert = {
        //     type: "error",
        //     isOpen: true,
        //     message: err.response.data.message,
        //   };
          dispatch({
            type: GET_ALL_EMPLOYEE_ERROR,
            payload: err,
          });
        //   dispatch(closeLoader());
        //   return dispatch(openGlobalSnackbar(err.message, true, "error"));
        } else {
          Alert = { type: "error", isOpen: true, message: err.statusText };
        //   dispatch(closeLoader());
          dispatch({ type: GET_ALL_EMPLOYEE_ERROR, payload: Alert });
        //   return dispatch(openGlobalSnackbar(err.statusText, true, "error"));
        }
      }
    };
  };

  export const addEmployeeAction = (data) => {
    return async (dispatch) => {
      dispatch({ type: ADD_EMPLOYEE_PENDING, loading: true });
      try {
        const EmploeeResult = await addEmployee(data);
        return dispatch({
          type: ADD_EMPLOYEE_SUCCESS,
          payload: EmploeeResult,
        });
      } catch (err) {
        if (!!err && !!err.response && !!err.response.data) {
          dispatch({
            type: ADD_EMPLOYEE_ERROR,
            payload: err,
          });
        //   dispatch(closeLoader());
        //   return dispatch(openGlobalSnackbar(err.message, true, "error"));
        } else {
          Alert = { type: "error", isOpen: true, message: err.statusText };
        //   dispatch(closeLoader());
          dispatch({ type: ADD_EMPLOYEE_ERROR, payload: Alert });
        //   return dispatch(openGlobalSnackbar(err.statusText, true, "error"));
        }
      }
    };
  };

  export const editEmployeeAction = (id,data) => {
    return async (dispatch) => {
      dispatch({ type: EDIT_EMPLOYEE_PENDING, loading: true });
      try {
        const EmploeeResult = await editEmployee(id,data);
        return dispatch({
          type: EDIT_EMPLOYEE_SUCCESS,
          payload: EmploeeResult,
        });
      } catch (err) {
        if (!!err && !!err.response && !!err.response.data) {
          dispatch({
            type: EDIT_EMPLOYEE_ERROR,
            payload: err,
          });
        //   dispatch(closeLoader());
        //   return dispatch(openGlobalSnackbar(err.message, true, "error"));
        } else {
          Alert = { type: "error", isOpen: true, message: err.statusText };
        //   dispatch(closeLoader());
          dispatch({ type: EDIT_EMPLOYEE_ERROR, payload: Alert });
        //   return dispatch(openGlobalSnackbar(err.statusText, true, "error"));
        }
      }
    };
  };

  
  export const editStatusEmployeeAction = (id,action) => {
    return async (dispatch) => {
      dispatch({ type: EDIT_EMPLOYEE_STATUS_PENDING, loading: true });
      try {
        const EmploeeResult = await editStatusEmployee(id,action);
        return dispatch({
          type: EDIT_EMPLOYEE_STATUS_SUCCESS,
          payload: EmploeeResult,
        });
      } catch (err) {
        if (!!err && !!err.response && !!err.response.data) {
          dispatch({
            type: EDIT_EMPLOYEE_STATUS_ERROR,
            payload: err,
          });
        //   dispatch(closeLoader());
        //   return dispatch(openGlobalSnackbar(err.message, true, "error"));
        } else {
          Alert = { type: "error", isOpen: true, message: err.statusText };
        //   dispatch(closeLoader());
          dispatch({ type: EDIT_EMPLOYEE_STATUS_ERROR, payload: Alert });
        //   return dispatch(openGlobalSnackbar(err.statusText, true, "error"));
        }
      }
    };
  };