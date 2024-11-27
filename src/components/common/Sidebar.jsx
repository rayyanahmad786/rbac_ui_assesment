import React from 'react';
import '../../styles/Header.css';
import { Link } from 'react-router-dom';


export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/roles">Roles</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
