import React, { useState } from "react";
import "./style.css";

export default function Navbar({ onGroupingChange, onSortingChange }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [gp, setGp] = useState();
  const [st, setSt] = useState();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleGroupingChange = (event) => {
    setGp(event.target.value);
    onGroupingChange(event.target.value);
  };

  const handleSortingChange = (event) => {
    setSt(event.target.value);
    onSortingChange(event.target.value);
  };

  return (
    <nav>
      <div className="dropdown">
        <button className="dropdown-btn" onClick={toggleDropdown}>
          <i className="fas fa-sliders-h"></i>
          Display
          <i className="fas fa-angle-down"></i>
        </button>
        {showDropdown && (
          <div className="dropdown-content">
            <div className="dropdown-section">
              <p>Grouping</p>
              <select
                className="dropdown-btn"
                value={gp}
                onChange={handleGroupingChange}
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="dropdown-section">
              <p>Ordering</p>
              <select
                className="dropdown-btn"
                value={st}
                onChange={handleSortingChange}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
