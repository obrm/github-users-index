import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-dark">
      <div className="container">
        <h1 className='logo'>
          <i className='fab fa-github' />
          <Link to="/">אינדקס גיטהאב</Link>
        </h1>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
              בית
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
              אודות
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
