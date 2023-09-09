import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/habit_tracker" className="navbar-brand">
            Habit Tracker
          </Link>
        </div>
        <ul className="nav navbar-nav">
          <li className="active">
            <Link to="/habit_tracker">Day View</Link>
          </li>
          <li className="active">
            <Link to="/weekly">Weekly View</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
