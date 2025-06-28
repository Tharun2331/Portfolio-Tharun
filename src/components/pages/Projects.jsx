import { ShareIcon } from "../../assets/ShareIcon";
import { GithubIcon } from "../../assets/GithubIcon";
import { projectsJson } from "../Store";

export default function Projects() {
  return (
    <div className="mt-2">
      <div className="text-terminal-green text-2xl font-medium mb-4">
        $ find ./projects -name "*.md" -exec cat \;
      </div>
      <div>
        {projectsJson.projects.map((proj, index) => (
          <div key={index} className="border border-terminal-gray-500 mb-10 p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-terminal-yellow text-lg font-medium">{proj.title}</h3>
              <div className="flex items-center gap-3"> {/* Icon alignment */}
                {proj.liveLink && (
                  <a href={proj.liveLink} target="_blank" rel="noopener noreferrer">
                    <ShareIcon className="text-terminal-gray hover:text-terminal-green cursor-pointer w-5 h-5" />
                  </a>
                )}
                {proj.githubLink && (
                  <a href={proj.githubLink} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="text-terminal-gray hover:text-terminal-green cursor-pointer w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            <ul className="mt-2 list-none space-y-1">
              {proj.description.map((item, idx) => (
                <li key={idx} className="text-terminal-gray">
                  <span className="text-terminal-gray mr-2">{">"}</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="text-terminal-gray-500 mt-2">
              <span className="text-terminal-gray-500 mr-2">{">"}</span>
              Tech: {proj.technologies.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
