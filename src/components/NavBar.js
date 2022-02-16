import React from 'react';
import { NavLink as NavLinkRR } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const NavLink = ({ to, children, ...props }) => (
  <NavLinkRR
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    className={({ isActive }) => (isActive ? 'active' : undefined)}
    to={to}
  >
    {children}
  </NavLinkRR>
);

const NavBar = () => (
  <header>
    <h1>Math Magicians</h1>
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/calculator">Calculator</NavLink></li>
        <li><NavLink to="/quote">Quote</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
