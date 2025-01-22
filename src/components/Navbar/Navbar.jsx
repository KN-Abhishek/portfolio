import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/LOGO.png';
import underline from '../../assets/nav_underline.svg';

const Navbar = () => {
  const [Menu,SetMenu] = useState("home");
  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" />
      <ul className="nav-menu">
        <li><p onClick={()=> SetMenu("home")}>Home</p>{Menu==="home"?<img src={underline} alt=""/>:<></>}</li>
        <li><p onClick={()=> SetMenu("about")}>About Me</p>{Menu==="about"?<img src={underline} alt=""/>:<></>}</li>
        <li><p onClick={()=> SetMenu("contact")}>Contact</p>{Menu==="contact"?<img src={underline} alt=""/>:<></>}</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
