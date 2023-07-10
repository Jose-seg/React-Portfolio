import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ currentSection, setCurrentSection }) {
    return (
        <header>
            <h1>The Code Journey</h1>
            <Navigation 
                currentSection={currentSection} 
                setCurrentSection={setCurrentSection}
            />
        </header>
    );
}

export default Header;