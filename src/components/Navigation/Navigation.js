import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleDown, FaSun, FaMoon } from 'react-icons/fa';

// styles
import './Navigation.css';

const Navigation = () => {
  const [isHamburgerActive, setActive] = useState(false);
  const [isDarkModeActive, setDarkMode] = useState(true);

  const toggleClass = () => {
    setActive(!isHamburgerActive);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkModeActive);
    if (isDarkModeActive) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  return (
    <nav className="navigation-container">
      <span className="navigation-logo">Bodhi Farm</span>

      <div className="navigation-menu-div">
        <ul className="navigation-ul">
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active-link link-2' : 'none')} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active-link link-1' : 'none')} to="/secondPage">
              Services
              <FaAngleDown className="drop-down-icon" />
              <ul className="drop-down">
                <li>
                  <NavLink className={({ isActive }) => (isActive ? 'active-link link-2' : 'none')} to="option1">
                    option 1
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => (isActive ? 'active-link link-2' : 'none')} to="option2">
                    option 2
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => (isActive ? 'active-link link-2' : 'none')} to="option3">
                    option 3
                  </NavLink>
                </li>
              </ul>
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active-link link-1' : 'none')} to="thirdPage">
              Team
              <FaAngleDown className="drop-down-icon" />
              <ul className="drop-down">
                <li>
                  <NavLink className={({ isActive }) => (isActive ? 'active-link link-2' : 'none')} to="option1">
                    option 1
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => (isActive ? 'active-link link-2' : 'none')} to="option2">
                    option 2
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => (isActive ? 'active-link link-2' : 'none')} to="option3">
                    option 3
                  </NavLink>
                </li>
              </ul>
            </NavLink>
          </li>
        </ul>

        <input onClick={toggleDarkMode} type="checkbox" className="checkbox" id="chk" />
        <label className="label" htmlFor="chk">
          <FaSun className="fa-sun" />
          <FaMoon className="fa-moon" />
          <div className="ball" />
        </label>
      </div>

      <div onClick={toggleClass} className={isHamburgerActive ? 'hamburger-menu on' : 'hamburger-menu'}>
        <div />
        <div />
        <div />
      </div>
    </nav>
  );
};

export default Navigation;
