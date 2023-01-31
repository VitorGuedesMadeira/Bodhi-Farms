import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSortDown } from 'react-icons/fa'
// styles
import './Navigation.css';

const Navigation = () => {
  const [isHamburgerActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isHamburgerActive);
  };

  return (
    <nav className="navigation-container">
      <div className="navigation-logo">
        <span>MyLOGO</span>
      </div>

      <div className="navigation-menu-div">
        <ul className="navigation-ul">
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active-link link-1' : 'none')} to="/">
              FirstPage
              <FaSortDown />
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
            <NavLink className={({ isActive }) => (isActive ? 'active-link link-2' : 'none')} to="secondPage">
              SecondPage
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active-link link-1' : 'none')} to="thirdPage">
              ThirdPage
              <FaSortDown />
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
        <div className="navigation-logo">
          <span>MyContact</span>
        </div>
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
