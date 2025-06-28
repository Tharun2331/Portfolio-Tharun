import React, { useState } from 'react';
import Terminal from './components/pages/Terminal';
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Experience from './components/pages/Experience';
import Contact from './components/pages/Contact';

function App() {
  const [section,setSection] = useState("terminal");
  const [theme,setTheme] = useState("theme-dark")

  // Theme options based on index.css
  const themes = ['theme-matrix', 'theme-light', 'theme-dracula', 'theme-dark'];

  const setNewTheme = (newTheme) => {
    if(themes.includes(newTheme)){
      setTheme(newTheme)
    }
  }

  const renderSection = () => {
    switch(section)
    {
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      case 'contact':
        return <Contact />;
      default:
        return <Terminal setSection={setSection} setTheme={setNewTheme} />
    }
  }

  return <div className={`${theme} min-h-screen`}>
      {renderSection()}
  </div>
}

export default App
