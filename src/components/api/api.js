import request from "./request";

// get all Canvas api
export const getAllEmployee = () => {
  return request({
    url: `api/employees`,
    method: "GET",
  });
};

export const addEmployee = (data) => {
  return request({
    url: `api/employee`,
    method: "POST",
    data
  });
};
export const editEmployee = (id, data) => {
  return request({
    url: `api/employee/${id}`,
    method: "PUT",
    data
  });
};  