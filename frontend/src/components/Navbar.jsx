import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <h2 className="brand">Student Portal</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/students">View Students</Link>
        <Link to="/add" className="nav-btn">+ Add Student</Link>
      </div>
    </div>
  );
}

export default Navbar;