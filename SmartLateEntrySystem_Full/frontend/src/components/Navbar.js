import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/register">Register Student</Link></li>
      <li><Link to="/late-entry">Late Entry</Link></li>
      <li><Link to="/dashboard">Supervisor Dashboard</Link></li>
    </ul>
  </nav>
);

export default Navbar;
