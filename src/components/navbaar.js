import React from "react";
import { Link } from "react-router-dom";

const Navbaar = () =>{
    return(
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
        <Link to="/" className="navbar-brand ms-5">
          HOME
        </Link>
       </nav>
    );
}

export default Navbaar;