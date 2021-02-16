import React from 'react';
import {Link, useLocation } from 'react-router-dom'
import './Nav.css'

const Nav = (props) => {
  const currentRoute = useLocation().pathname;
  const { isSignedIn } = props;

  return (
    <div id="nav-bar">
      {currentRoute !== '/' && <Link to='/' className="nav-link"><span className="nav-text">Home</span></Link>}
      {currentRoute !== '/app' && !isSignedIn && <Link to='/app' className="nav-link"><span className="nav-text">Start</span></Link>}
      {currentRoute !== '/auth' && <Link to='/auth' className="nav-link"><span className="nav-text">Log In</span></Link>}
    </div>
  )
}

export default Nav;
