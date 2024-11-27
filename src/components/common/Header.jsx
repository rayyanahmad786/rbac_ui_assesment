
import React from 'react';
import '../../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">RBAC Dashboard</div>
      <nav className="nav">
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/users">Users</a></li>
          <li><a href="/roles">Roles</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
