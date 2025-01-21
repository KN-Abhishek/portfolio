import React from 'react';
import './Hero.css'
import profile_image from '../../assets/Profilepic.png';

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_image} alt="Logo" style={{ width: '300px', height: 'auto' }} />
      <h1><span>Hi I'm Abhishek,</span>Welcome to my Portfolio!</h1>
      <p>"Welcome to my portfolio! I’m an Associate Software Engineer with a strong foundation in Electronics and Communication Engineering, </p>
      <p> blending innovative problem-solving with hands-on expertise in cutting-edge projects that bridge hardware and software seamlessly."</p>
      <div className="hero_action"></div>
      <div className="hero-connect">Connect With Me</div>
      <div className="hero-resume">My Resume</div>
    </div>
  );
};

export default Hero;
