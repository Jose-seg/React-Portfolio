import React from 'react';
import './About.css';
import myImage from '../../assests/hey-me.jpg';

const About = () => {
    return (
        <div className='about-container'>
            <img src={myImage} alt="The Developer" className='my-image'/>
            <div className='about-text'>
                <h2>About Me</h2>
                <p>
                    Hi, I'm a web developer with experience in building single-page applications using React. 
                    I have a passion for coding and love to learn new technologies. 
                    Take a look at my portfolio to see some of the projects I've worked on!
                </p>
            </div>
        </div>
    );
}

export default About;