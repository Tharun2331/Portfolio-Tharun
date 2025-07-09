import React, { useState, useEffect, useRef } from 'react';
import { DollarIcon } from '../../assets/DollarIcon';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

export const Sidebar = ({ activeSection: propActiveSection, setActiveSection: propSetActiveSection, clickedButton }) => {
  const [correctCommands] = useState([
    'about',
    'skills',
    'projects',
    'experience',
    'contact',
    'help',
    'clear',
  ]);
  const inputRef = useRef(null);
  const [command, setCommand] = useState('');
  const [showError, setShowError] = useState(false);
  const [commandHistory, setCommandHistory] = useState([]); // Track command outputs

  useEffect(() => {
    // Set default to "about" if propActiveSection is not set
    if (!propActiveSection) {
      propSetActiveSection('about');
    }
    // Focus input on mount for better mobile UX
    if (inputRef.current) inputRef.current.focus();
  }, [propActiveSection, propSetActiveSection]);

  const handleInputChange = (e) => {
    const input = e.target.value.toLowerCase();
    setCommand(input);
    setShowError(false); // Clear error when user starts typing again
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (command) {
      if (correctCommands.includes(command)) {
        // Add all valid commands to history
        setCommandHistory((prev) => [
          ...prev,
          {
            type: command,
            content: (
              <div>
                <div className="flex items-center gap-1 text-terminal-yellow">
                  <DollarIcon />
                  {command}
                </div>
                <div className="mt-1">
                  {command === 'help'
                    ? 'Available commands: about, skills, projects, experience, contact, help, clear'
                    : command === 'clear'
                    ? setCommandHistory([])
                    : `${command}`} {/* Neutral message for content commands */}
                </div>
              </div>
            ),
          },
        ]);
        if (command !== 'help' && command !== 'clear') {
          propSetActiveSection(command); // Update for content commands (about, skills, etc.)
        }
        setShowError(false);
      } else {
        setCommandHistory((prev) => [
          ...prev,
          {
            type: 'error',
            content: (
              <div>
                <div className="flex items-center gap-1 text-terminal-yellow">
                  <DollarIcon />
                  {command}
                </div>
                <div className="mt-1 text-terminal-red">
                  Command not recognized. Type "help" for available commands.
                </div>
              </div>
            ),
          },
        ]);
      }
      setCommand(''); // Clear input after submission
      if (inputRef.current) inputRef.current.focus(); // Focus input after submission
    }
  };

  const renderLeftSide = () => {
    return (
      <div className=" md:w-1/3 border-t border-terminal-gray-500 bg-terminal-black text-terminal-gray-300 p-4">
        <span className="text-sm">
          Welcome to Tharun's Portfolio Terminal <br />
          Type "help" to see available commands
        </span>
        {commandHistory.map((cmd, index) => (
          <div key={index} className={cmd.type === 'error' ? 'mt-2' : 'mt-2'}>
            {cmd.content}
          </div>
        ))}
        <div className="flex items-center gap-1 mt-4">
          <DollarIcon />
          <form onSubmit={handleSubmit} className="flex-1">
            <input
              ref={inputRef}
              type="text"
              className="w-full bg-terminal-black text-terminal-green border-0 focus:outline-none"
              placeholder="Type a command..."
              value={command}
              onChange={handleInputChange}
            />
          </form>
        </div>
        <div className="text-sm mt-5 opacity-50">
          Available commands: <br /> about, skills, projects, experience, contact, help, clear
        </div>
      </div>
    );
  };

  const renderRightSide = () => {
    const currentSection = propActiveSection;
    switch (currentSection) {
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
        return <About />; // Default to About page
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {renderLeftSide()}
      <div className="w-full md:w-2/3 border-t md:border-t md:border-l border-terminal-gray-500 bg-terminal-black text-terminal-gray-300 p-4">
        {renderRightSide()}
      </div>
    </div>
  );
};