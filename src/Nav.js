import React from 'react';
import {Link} from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <div id="nav-bar">
      <Link to='/app' className="nav-link"><span className="nav-text">Start</span></Link>
      <Link to='/auth' className="nav-link"><span className="nav-text">Log In</span></Link>
    </div>
  )
}

export default Nav;
