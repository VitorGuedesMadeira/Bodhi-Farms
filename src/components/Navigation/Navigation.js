import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa'
import logo from '../../assets/images/logos/BodhiFarmLogo.png'

// styles
import './Navigation.css';

const Navigation = () => {
  const [isHamburgerActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isHamburgerActive);
  };

  return (
    <nav className="navigation-container">
      <img className="navigation-logo" src={logo} alt="logo" />

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

        <span>Get high!</span>
      </div>

      <div onClick={toggleClass} className={isHamburgerActive ? 'hamburger-menu on' : 'hamburger-menu'}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
};

export default Navigation;
