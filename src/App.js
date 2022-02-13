import Navbaar  from './components/navbaar';
import Home  from './components/home';
import AddEmployee from './components/addEmployee'
import EditEmpoyee from './components/editEmpoyee';
import './App.css';
import {ToastContainer} from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
const App = () =>{
  return (
    <div className="App">
      <ToastContainer/>
      <Navbaar/>
      <Routes>
        <Route exact path="/api/employees/" element={<Home/>}/>     
        <Route exact path="/api/employee/add" element={<AddEmployee/>}/>     
        <Route exact path="/edit/:id" element={<EditEmpoyee/>}/>   
        <Route exact path="/api/employee/:id/:action" element={<Home/>}/>     

      </Routes>
        
    </div>
  );
}

export default App;
