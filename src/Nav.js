import React from 'react';
import {Link, useLocation } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  const currentRoute = useLocation().pathname;
  return (
    <div id="nav-bar">
      {currentRoute !== '/' && <Link to='/' className="nav-link"><span className="nav-text">Home</span></Link>}
      {currentRoute !== '/app' && <Link to='/app' className="nav-link"><span className="nav-text">Start</span></Link>}
      {currentRoute !== '/auth' && <Link to='/auth' className="nav-link"><span className="nav-text">Log In</span></Link>}
    </div>
  )
}

export default Nav;
