import { experienceJson } from "../Store";
import React from "react";




export default function Experience() {
  
  let getBorderColorClass = (title) => {
    switch (title) {
      case "Software Developer":
        return "border-l-[var(--primary)]"; // Green (#4ade80)
      case "Machine Learning Intern":
        return "border-l-[var(--secondary)]"; // Yellow (#facc15)
      case "Software Engineer Intern":
        return "border-l-[var(--info)]"; // Blue (#5fa3f7)
      default:
        return "border-l-[var(--primary)]"; // Default border color (#4b5563)
    }
  };
  
  return (
    <div className="mt-2">
      <div className="text-terminal-green text-2xl font-medium mb-4">
        $ cat experience.log
      </div>
      <div className="space-y-6">
        {experienceJson.experience.map((exp, index) => (
          <div key={index}
           className={`border-l-2 pl-4  ${getBorderColorClass(exp.title)}`}>
            <div className="flex justify-between items-center">
              <h3 className="text-terminal-yellow font-bold text-lg">{exp.title}</h3>
              <span className="text-terminal-gray-400 text-sm">{exp.duration}</span>
            </div>
            <h4 className="text-terminal-blue text-md font-semibold">{exp.company}</h4>
            <ul className="mt-2 list-none space-y-1">
              {exp.responsibilities.map((item, idx) => (
                <li key={idx} className="text-terminal-gray-300">
                  <span className="text-terminal-gray mr-2">{">"}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
