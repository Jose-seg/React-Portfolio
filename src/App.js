import React, {useState} from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Project from './components/Project/Project'

const projects = [
    // Add your projects here
    // { id: 1, title: 'Project 1', image: 'url', deployedUrl: 'url', githubUrl: 'url' },
    // ...
];

function App() {
    const [currentSection, setCurrentSection] = useState('About');

    return (
        <div>
            <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
            {currentSection === 'About' && <About />}
            {currentSection === 'Portfolio' && <Portfolio projects={projects} />}
            {currentSection === 'Contact' && <Contact />}
            <Footer />
        </div>
    );
}

export default App;
