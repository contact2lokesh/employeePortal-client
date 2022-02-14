import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addEmployeeAction } from "../Redux/actions/action";

const AddEmployee = () => {
  // validatio store//
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gender, setGender] = useState("");
  const [designation, setDesignation] = useState("");
  const [dateOfJoining, setDateOfJoining] = useState("");
  const [reportingManager, setReportingManager] = useState("");
  const [salary, setSalary] = useState("");
  const [employeeCode, setEmployeeCode] = useState("");
  const [location, setLocation] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [department, setDepartment] = useState("");

  // getting Data//
  const employees = useSelector((state) => state.employeeReducer.employeeList);
  const dispatch = useDispatch();

  // render to home page
  const navigate = useNavigate();

  // Form Validation//
  const handleSubmit = (e) => {
    e.preventDefault();
    //check email Exists or  not//
    const checkEmail = employees.find((employee) => employee.email === email);
    // check Number Exists or  not
    const checkMobileNumber = employees.find(
      (employee) => employee.mobileNumber === parseInt(mobileNumber)
    );

    if (
      !fname ||
      !lname ||
      !email ||
      !mobileNumber ||
      !gender ||
      !designation ||
      !dateOfJoining ||
      !reportingManager ||
      !salary ||
      !employeeCode ||
      !location ||
      !state ||
      !country ||
      !department
    ) {
      return toast.warning("Please fill all the Fields!");
    }

    if (checkEmail) {
      return toast.error("This email is already exists!");
    }
    if (checkMobileNumber) {
      return toast.error("This Mobile Number is already exists!");
    }

    //gettinh data from input //
    const data = {
      id: employees.length,
      fname,
      lname,
      mobileNumber,
      email,
      gender,
      designation,
      dateOfJoining,
      reportingManager,
      salary,
      employeeCode,
      location,
      state,
      country,
      department,
    };

    dispatch(addEmployeeAction(data));

    navigate("/api/employees");
    return toast.success("Employee Added Successfully!");
  };

  return (
    <div className="container">
      <h1 className="display-3 my-3 text-center">Add New Employee</h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="First Name"
                className="form-control my-3"
                value={fname}
                onChange={(e) => {
                  setFname(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="form-control my-3"
                value={lname}
                onChange={(e) => {
                  setLname(e.target.value);
                }}
              />
              <input
                type="email"
                placeholder="Email"
                className="form-control my-3"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="number"
                placeholder="Mobile Number"
                className="form-control my-3"
                value={mobileNumber}
                onChange={(e) => {
                  setMobileNumber(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Gender"
                className="form-control my-3"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Designation"
                className="form-control my-3"
                value={designation}
                onChange={(e) => {
                  setDesignation(e.target.value);
                }}
              />
              <input
                type="date"
                placeholder="Date of Joining: &nbsp;"
                className="form-control my-3"
                value={dateOfJoining}
                onChange={(e) => {
                  setDateOfJoining(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Reporting Manager"
                className="form-control my-3"
                value={reportingManager}
                onChange={(e) => {
                  setReportingManager(e.target.value);
                }}
              />
              <input
                type="number"
                placeholder="Salary"
                className="form-control my-3"
                value={salary}
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
              />
              <input
                type="number"
                placeholder="EmployeeCode"
                className="form-control my-3"
                value={employeeCode}
                onChange={(e) => {
                  setEmployeeCode(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Location"
                className="form-control my-3"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="State"
                className="form-control my-3"
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Country"
                className="form-control my-3"
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Department"
                className="form-control my-3"
                value={department}
                onChange={(e) => {
                  setDepartment(e.target.value);
                }}
              />
              <input
                type="submit"
                value="Add Employee"
                className="btn btn-primary"
              />
              <Link to="/api/employees" className="btn btn-danger ms-3">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
