import React from 'react';

const Navigation = ({ setCurrentSection }) => {
    return (
        <nav>
            <ul>
                <li onClick={() => setCurrentSection('About Me')}>About Me</li>
                <li onClick={() => setCurrentSection('Contact Me')}>Contact Me</li>
                <li onClick={() => setCurrentSection('Portfolio')}>Portfolio</li>
                <li onClick={() => setCurrentSection('Resume')}>Resume</li>
            </ul>
        </nav>
    );
};

export default Navigation;