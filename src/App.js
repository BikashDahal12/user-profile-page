import React from 'react';
import Sidebar from './components/Sidebar';
import UserProfile from './components/UserProfile';
import './App.css'; // Main App styling

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <UserProfile />
    </div>
  );
}

export default App;
