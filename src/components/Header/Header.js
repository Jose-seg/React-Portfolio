import React from 'react';
import Navigation from './Navigation';
import './Header.css';

function Header({ currentSection, setCurrentSection }) {
    return (
        <header>
            <h1>Jose Segura</h1>
            <Navigation 
                currentSection={currentSection} 
                setCurrentSection={setCurrentSection}
            />
        </header>
    );
}

export default Header;