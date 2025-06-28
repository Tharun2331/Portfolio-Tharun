import { skillsJson } from "../Store";
import React from "react";

export default function Skills() {
  return (
    <div className="mt-2">
      <div className="text-terminal-green text-2xl font-medium mb-2">
        $ ls -la skills/
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-wrap">
        {Object.entries(skillsJson).map(([category, skillsList]) => (
          <div key={category}>
            <h3 className="text-terminal-yellow font-semibold text-lg capitalize mb-2 ml-2">
              {category}/
            </h3>
            <ul>
              {skillsList.map((skill) => (
                <li key={skill.name} className="mb-2 ml-6">
                  {`> ${skill.name}`}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}