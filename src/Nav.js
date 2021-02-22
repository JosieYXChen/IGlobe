import React, {useState, useEffect} from 'react';
import {Link, useLocation } from 'react-router-dom'
import './Nav.css'

const Nav = (props) => {
  const [isNavActive, setNavActive] = useState('false')
  const currentRoute = useLocation().pathname;
  const { isSignedIn } = props;

  const handleClick = () => {
    setNavActive(!isNavActive);
  }

  useEffect(() => {
    setNavActive(false)
  },[])

  return (
    <div id="nav-bar">
      <div className={isNavActive? "activeMenu": "menu"}>
        {currentRoute !== '/' && <Link to='/' className="nav-link"><span className="nav-text">Home</span></Link>}
        {currentRoute !== '/app' && !isSignedIn && <Link to='/app' className="nav-link"><span className="nav-text">Start</span></Link>}
        {currentRoute !== '/auth' && <Link to='/auth' className="nav-link"><span className="nav-text">Log In</span></Link>}
      </div>
      <div className="menu-btn">
        {!isNavActive?
        <i className="fas fa-bars" onClick={handleClick}></i> :
        <i className="fas fa-times-circle" onClick={handleClick}></i>
        }
      </div>
    </div>
  )
}

export default Nav;
