import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/LOGO.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [Menu,SetMenu] = useState("home");
  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" />
      <ul className="nav-menu">
        <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=> SetMenu("home")}>Home</p></AnchorLink>{Menu==="home"?<img src={underline} alt=""/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=> SetMenu("about")}>About Me</p></AnchorLink>{Menu==="about"?<img src={underline} alt=""/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#education'><p onClick={()=> SetMenu("education")}>Education</p></AnchorLink>{Menu==="education"?<img src={underline} alt=""/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=> SetMenu("projects")}>Projects</p></AnchorLink>{Menu==="projects"?<img src={underline} alt=""/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50}href='#contact'><p onClick={()=> SetMenu("contact")}>Contact</p></AnchorLink>{Menu==="contact"?<img src={underline} alt=""/>:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50}href='#contact'><p onClick={()=> SetMenu("contact")}>Contact</p></AnchorLink>Connect With Me</div>
    </div>
  );
};

export default Navbar;
