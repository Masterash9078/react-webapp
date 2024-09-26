import React from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';
import './layout.css';
import Production from '../pages/production';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content-area">
          <Production />
        </div>
      </div>
    </div>
  );
};

export default Layout;