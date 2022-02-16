import React from 'react';
import { NavLink as NavLinkRR } from 'react-router-dom';

const NavLink = ({ to, children, ...props }) => {
  return (
  <NavLinkRR 
    {...props}
    className={({ isActive }) => isActive ? 'active' : undefined}
    to={to}
    >{children}
  </NavLinkRR>
  )
}

const NavBar = () => {
return ( 
  <header>
      <h1>Math Magicians</h1>
      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/calculator'>Calculator</NavLink></li>
          <li><NavLink to='/quote'>Quote</NavLink></li>
        </ul>
      </nav>
    </header>
)
}

export default NavBar;
