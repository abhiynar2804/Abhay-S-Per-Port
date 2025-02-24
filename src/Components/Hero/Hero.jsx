import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.webp'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />

        <h1>Hi, <span>I'm Abhay Narkhede,</span> a passionate Web Developer and Programmer</h1>
        <p>Who believes in crafting <u>Pixel-Perfect</u> designs and writing <u>Flawless Code</u>. From intuitive user interfaces to seamless functionality, my work reflects creativity, precision, and innovation.</p>

        <div className="hero-action">
            <div className="hero-hire"><AnchorLink className='anchor-link' offset={20} href='#contact'>Hire Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
      
    </div>
  )
}

export default Hero
