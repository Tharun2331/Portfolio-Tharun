import React, { useState } from 'react';
import { FeaturesButton } from '../ui/FeaturesButton';
import { TerminalIcon } from '../../assets/TerminalIcon';
import { Sidebar } from './Sidebar';

export default function Terminal() {
  const [clickedButton, setClickedButton] = useState('about'); // Track which button is clicked
  const [activeSection, setActiveSection] = useState('about');
  // The handleClick function now accepts the button's text as an argument
  const handleClick = (buttonText) => {
    // If the clicked button is already the active one, deselect it. Otherwise, set it as active.
    setClickedButton(buttonText);
    setActiveSection(buttonText);

  };

  return (
    <div className="p-4">
      <div className="flex items-center gap-2">
        <TerminalIcon />
        <span className="text-xl font-normal">tharun@portfolio:$</span>
      </div>
      <div className="flex gap-2 mt-4">
        <FeaturesButton text="about" variant="primary" size="sm" isClicked={clickedButton === "about"} onClick={() => handleClick("about")} />
        <FeaturesButton text="skills" variant="primary" size="sm" isClicked={clickedButton === "skills"} onClick={() => handleClick("skills")} />
        <FeaturesButton text="projects" variant="primary" size="sm" isClicked={clickedButton === "projects"} onClick={() => handleClick("projects")} />
        <FeaturesButton text="experience" variant="primary" size="sm" isClicked={clickedButton === "experience"} onClick={() => handleClick("experience")} />
        <FeaturesButton text="contact" variant="primary" size="sm" isClicked={clickedButton === "contact"} onClick={() => handleClick("contact")} />
      </div>

      <div className='mt-2'>
        <Sidebar activeSection={activeSection} setActiveSection={handleClick} clickedButton={clickedButton}/>
      </div>

    </div>
  );
}