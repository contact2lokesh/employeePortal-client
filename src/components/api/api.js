import request from "./request";

// get all Employee data
export const getAllEmployee = () => {
  return request({
    url: `api/employees`,
    method: "GET",
  });
};

// add employees 
export const addEmployee = (data) => {
  return request({
    url: `api/employee`,
    method: "POST",
    data
  });
};

// edit employees
export const editEmployee = (id, data) => {
  return request({
    url: `api/employee/${id}`,
    method: "PUT",
    data
  });
};  

// update employee active/deactive status
export const editStatusEmployee = (id,action,) => {
  return request({
    url: `api/employee/${id}/${action}`,
    method: "PUT",
  });
};  