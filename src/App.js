import React, {useState} from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
    const [currentSection, setCurrentSection] = useState('About');
    const [projects, setProjects] = useState([
      {
        id: 1,
        title: 'Passion of The Greens',
        image: '',
        deployedUrl: 'https://the-passion-of-the-greens.github.io/The-Passion-Of-The-Greens/',
        githubUrl: 'https://github.com/The-Passion-of-the-Greens/The-Passion-Of-The-Greens'
      },
      {
        id: 2,
        title: 'Resume-pocalypse',
        image: '',
        deployedUrl: 'https://resume-pocalypse.herokuapp.com/',
        githubUrl: 'https://github.com/wasteland-career-solutions/resume-pocalypse'
      }
      
    ]);


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
