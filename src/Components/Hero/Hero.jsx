import React from 'react'
import './Hero.css'
// import profile_img from '../../assets/my.jpg'
import profile_img from '../../assets/prof_pro.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />

        <h1>Hi, <span>I'm Abhay Narkhede,</span> <br /> Frontend Developer | React & JavaScript</h1>
        <p>B.Tech CSE student focused on building responsive web apps and improving problem-solving through DSA. Actively seeking frontend internships.</p>

        <div className="hero-action">
            <div className="hero-hire"><AnchorLink className='anchor-link' offset={20} href='#contact'>Hire Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
      
    </div>
  )
}

export default Hero
