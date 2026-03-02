import { useState } from 'react';
import './Navbar.css'
import logo from '../../assets/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="logo" />

      <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>handleMenuClick()}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={20} href='#about'><p onClick={()=>handleMenuClick()}>About Me</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={20} href='#contact'><p onClick={()=>handleMenuClick()}>Contact</p></AnchorLink></li>
        <div className='nav-connect mobile-connect'><AnchorLink className='anchor-link' offset={20} href='#contact'>Connect With Me</AnchorLink></div>
      </div> 

      <div className='nav-connect desktop-connect'><AnchorLink className='anchor-link' offset={20} href='#contact'>Connect With Me</AnchorLink></div>
      
      <div className='hamburger' onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>
    </div>
  );
};

export default Navbar;
