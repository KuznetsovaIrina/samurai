import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.css';

const Sidebar = () => {
    return (
      <aside className={s.sidebar}>
        <nav className={s.menu}>
          <ul>
            <li><NavLink className = { navData => navData.isActive ? s.active : '' } to="/">Profile</NavLink></li>
            <li><NavLink className = { navData => navData.isActive ? s.active : '' } to="/dialogs">Messages</NavLink></li>
            <li><NavLink className = { navData => navData.isActive ? s.active : '' } to="/news">News</NavLink></li>
            <li><NavLink className = { navData => navData.isActive ? s.active : '' } to="/music">Music</NavLink></li>
            <li><NavLink className = { navData => navData.isActive ? s.active : '' } to="/settings">Settings</NavLink></li>
          </ul>
        </nav>
      </aside>
    );
}

export default Sidebar;