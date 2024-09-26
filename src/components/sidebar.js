import React from 'react';
import './sidebar.css'; // Make sure to update this CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Mu_sigma_logo.jpg" alt="Logo" />
      </div>
      <div className="menu">
        <button className="menu-item production">Production</button>
        <button className="menu-item others">MRP</button>
        <button className="menu-item others">BOM</button>
      </div>
    </div>
  );
};

export default Sidebar;