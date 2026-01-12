import React, { useState } from 'react';
import './Navbar.css'
import logo from '../../assets/Logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {

  const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={logo} alt="" />

      <ul className='nav-menu'>
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"}</li>
        <li><AnchorLink className='anchor-link' offset={20} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"}</li>
        <li><AnchorLink className='anchor-link' offset={20} href='#services'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"}</li>
        <li><AnchorLink className='anchor-link' offset={20} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"}</li>
      </ul> 

      <div className='nav-connect'><AnchorLink className='anchor-link' offset={20} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  );
};

export default Navbar;
