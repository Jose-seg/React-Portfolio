import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

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
            {currentSection === 'Resume' && <Resume />}
            <Footer />
        </div>
    );
}

export default App;
