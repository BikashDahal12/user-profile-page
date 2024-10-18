import React from 'react';
import './Sidebar.css'; // Import CSS for Sidebar styling

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Pegasus</h2>
      <ul>
        <li>Home</li>
        <li>Calendar</li>
        <li>Task Time</li>
        <li>Pomodoro</li>
        <li>New Task List</li>
        <li>Lists</li>
        <li>Profile</li>
      </ul>
      <div className="project-members">
        <p>Project Members</p>
        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
}

export default Sidebar;
