import React from 'react';
import { NavLink } from 'react-router-dom';

// styles
import './Navigation.css';

const Navigation = () => (
  <nav className="navigation-container">
    <div className="navigation-logo">
      <span>MyLOGO</span>
    </div>

    <ul className="navigation-ul">
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="/">
          FirstPage
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="secondPage">
          SecondPage
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="thirdPage">
          ThirdPage
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
