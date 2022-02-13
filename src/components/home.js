import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editStatusEmployeeAction, getAllEmployeeAction } from "../Redux/actions/action";
import { useEffect, useState } from "react";

import React from "react";

const Home = () => {
  const [employeeData, setEmployeeData] = useState([]);
  // const [status, setStatus] = useState("activate");
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getAllEmployeeAction());
  }, [dispatch]);

  const employeeDataCont = useSelector(
    (state) => state.employeeReducer.employeeList
  );

  const Addedemployee = useSelector(
    (state) => state.addEmployeeReducer.addEmployee
  );

  const employeeStatus = useSelector(
    (state) => state.editStatusEmployeeReducer.editEmployeestatus
  )

  useEffect(() => {
    setEmployeeData(employeeDataCont);
  }, [employeeDataCont]);

  useEffect(() => {
    dispatch(getAllEmployeeAction());
  }, [Addedemployee, dispatch,employeeStatus]);

  

  useEffect(() => {
    if (params.action) {
      dispatch(editStatusEmployeeAction(params.id, params.action))
    }
  }, [window.location.pathname]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-end">
          <Link to="/api/employee/add" className="btn btn-outline-dark">
            Add Employee
          </Link>
        </div>
        <div className="col-md-10 mx-auto">
          <h1 className="my-3 text-center text-info">
            Welcome to Employee Portal
          </h1>
          <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col"> </th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {employeeData &&
                employeeData.map((emp, index) => {
                  const { _id, fname, lname, email, mobileNumber } = emp;
                  return (
                    <tr key={index}>
                      <td>{_id}</td>
                      <td>{fname}</td>
                      <td>{lname}</td>
                      <td>{email}</td>
                      <td>{mobileNumber}</td>
                      <td>
                        <Link
                          to={`/edit/${_id}`}
                          className="btn btn-small btn-primary me-3"
                        >
                          Edit
                        </Link>
                        <Link
                          to={
                           employeeStatus.DeletedAt &&employeeStatus.DeletedAt !== null
                           ? `/api/employee/${_id}/activate`
                           : `/api/employee/${_id}/deactivate`
                          } 
                          className={emp.DeletedAt &&emp.DeletedAt !== null ? "btn btn-small btn-danger me-3" : "btn btn-small btn-primary me-3"}
                        >
                          Active/Deactive
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
