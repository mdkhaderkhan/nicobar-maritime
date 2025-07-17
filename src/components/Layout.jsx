// src/components/Layout.jsx
import React from 'react';
import {  Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
  return (
    <div>
      {/* Global Navigation Bar */}
      <Navbar/>

    
      <Outlet />
    </div>
  );
}

export default Layout;
