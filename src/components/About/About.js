import React from 'react';
import './About.css';
import myImage from '../../assests/hey-me.jpg';

const About = () => {
    return (
        <div className='about-container'>
            <img src={myImage} alt="The Developer" className='my-image'/>
            <div className='about-text'>
                <h2>About Me</h2>
                <p>Hello! I'm Jose Segura, an ambitious and aspiring web developer with a keen interest in building interactive and user-friendly web applications. I've always been fascinated with the power of technology and how it allows us to create tools and experiences that are accessible to everyone, everywhere.</p>
  
  <p>During my journey into web development, I've been privileged to work with diverse teams, creating a multitude of projects that have challenged me and expanded my skills. On this website, you'll find a portfolio of my most impactful projects, all of which reflect my dedication to learning, growth, and the production of high-quality work.</p>
  
  <p>While I've included several team projects here, I am also looking forward to adding my personal projects in the near future. These projects, currently in the making, embody my creativity, personal style, and the depth of knowledge I've acquired during my web development cohort. Stay tuned!</p>
  
  <p>I'm always eager to learn, create, and overcome new challenges in the dynamic field of web development. I believe in the potential of technology to make the world a better place, and I can't wait to contribute my part.</p>
            </div>
        </div>
    );
}

export default About;