import React from "react";
import { NavLink } from "react-router-dom";

function Navber() {
  return (
    <nav>
      <h4>Store<span className="active" style={{fontWeight: "900"}}>.</span></h4>
      <ul>
        {/* <NavLink to="/" className="nav-link">
          Home
        </NavLink> */}
        <NavLink to="/books" className="nav-link">
          Books
        </NavLink>
        <NavLink to="/add-book" className="nav-link">
          Add Book
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navber;
