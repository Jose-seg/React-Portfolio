import React, { useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [currentSection, setCurrentSection] = useState('About Me');

  return (
    <div>
      <Header setCurrentSection={setCurrentSection} />
    </div>
  );
};

export default App;
