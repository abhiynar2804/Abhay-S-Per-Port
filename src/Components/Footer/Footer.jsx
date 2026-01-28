import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="top-left">
            <img src={logo} alt="" />
        </div>
        <div className="footer-social-links">
            <a href="https://github.com/abhiynar2804" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/abhay-narkhede-016376282/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <FaLinkedin size={24} />
            </a>
            <a href="https://x.com/abhiynar2804" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/_abhay_narkhede_" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <FaInstagram size={24} />
            </a>
        </div>
        {/* <div className="top-right">
            <div className="footer-email">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div> */}
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="bottome-left">&#169; 2025 Abhay Narkhede. All right reserved.</p>
        <div className="bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
