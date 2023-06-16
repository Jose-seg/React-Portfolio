import React from 'react';
import Navigation from './Navigation';

const Header = ({ setCurrentSection }) => {
    return (
        <header>
            <h1>Jose Segura</h1>
            <Navigation setCurrentSection={setCurrentSection} />
        </header>
    );
};

export default Header;