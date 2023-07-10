import React from 'react';
import './Navigation.css';

function Navigation({ currentSection, setCurrentSection }) {
    const sections = ['About', 'Portfolio', 'Contact'];

    return (
        <nav>
            <ul className="nav-links">
                {sections.map(section => (
                    <li 
                        className={`nav-item${currentSection === section ? ' active' : ''}`} 
                        key={section}
                        onClick={() => setCurrentSection(section)}
                    >
                        {section}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;