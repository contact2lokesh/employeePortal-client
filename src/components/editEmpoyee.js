import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import React from "react";
import { editEmployeeAction } from "../Redux/actions/action";

const EditEmpoyee = () => {
  // validation store//
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

  const { id } = useParams();

  //get Employee list//
  const employees = useSelector((state) => state.employeeReducer.employeeList);
  const dispatch = useDispatch();
  // render to home page
  const navigate = useNavigate();

  // edit employee through  id//
  const currentEmployee =
    employees && employees.find((employee) => employee._id === parseInt(id));
   console.log(currentEmployee);

  // edit empolyee
  useEffect(() => {
    if(currentEmployee){setFname(currentEmployee.fname);
    setLname(currentEmployee.lname);
    setEmail(currentEmployee.email);
    setMobileNumber(currentEmployee.mobileNumber);
    setGender(currentEmployee.gender);
    setDesignation(currentEmployee.designation);
    setDateOfJoining(currentEmployee.dateOfJoining);
    setReportingManager(currentEmployee.reportingManager);
    setSalary(currentEmployee.salary);
    setEmployeeCode(currentEmployee.employeeCode);
    setLocation(currentEmployee.location);
    setState(currentEmployee.state);
    setCountry(currentEmployee.country);
    setDepartment(currentEmployee.department);}
  }, [currentEmployee]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //check email Exists or  not//
    const checkEmail = employees.find((employee) => employee.email === email);
    //   console.log(checkEmail);
    // check Number Exists or  not
    const checkMobileNumber = employees.find(
      (employee) => employee.mobileNumber === parseInt(mobileNumber)
    );
    //   console.log(checkMobileNumber);

    if (!fname || !lname || !email || !mobileNumber) {
      return toast.warning("Please fill all the Fields!");
    }

    if (checkEmail) {
      return toast.error("This email is already exists!");
    }
    if (checkMobileNumber) {
      return toast.error("This Mobile Number is already exists!");
    }

    //Add data in store//
    const data = {
      id: parseInt(id),
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
    // console.log(data);
 dispatch(editEmployeeAction(id,data))
    navigate("/");
  };
  return (
    <div className="container">
      {currentEmployee ? (
        <>
          <h1 className="display-3 my-3 text-center">Update Employee {id}</h1>
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
                    placeholder="Date of Joining"
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
                    value="Update Employee"
                    className="btn btn-primary"
                  />
                  <Link to="/" className="btn btn-danger ms-3">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-3 text-center text-warning">
          Employee with id {id} not exists.
        </h1>
      )}
    </div>
  );
};
export default EditEmpoyee;
