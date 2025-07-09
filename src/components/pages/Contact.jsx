import { useState } from "react";
import { contactJson } from "../Store";
import { Button } from "../ui/Button";
import { EmailIcon } from "../../assets/EmailIcon";
import { GithubIcon } from "../../assets/GithubIcon";
import { LinkedinIcon } from "../../assets/LinkedinIcon";
import { Email } from "./Email";

export default function Contact() {
  const [showEmailModal, setShowEmailModal] = useState(false);

  // Log to check if contactJson is loaded
  console.log("contactJson:", contactJson);

  return (
    <div className="mt-2">
      <div className="text-terminal-green text-2xl font-medium mb-4">
        $ cat contact.json
      </div>

      <div className="bg-terminal-gray-800 text-terminal-gray-200 p-4 rounded-sm font-mono text-sm border border-terminal-gray-500 overflow-x-auto">
        <pre>
          <code>{contactJson ? JSON.stringify(contactJson, null, 2) : "Loading contact data..."}</code>
        </pre>
      </div>

      <div className="mt-5 flex flex-col sm:flex-row gap-4 items-center">
        <Button
          size="md"
          text="Email Me"
          onClick={() => setShowEmailModal(true)}
          className="rounded-md"
          logo={<EmailIcon className="text-terminal-green group-hover:text-terminal-black transition-colors duration-200 " />}
          variant="primary"
        />

        <a href="https://www.linkedin.com/in/tharun-sekar-a587711b3/" target="_blank" rel="noreferrer">
          <Button
            size="md"
            text="LinkedIn"
            variant="secondary"
            className="rounded-md"
            logo={<LinkedinIcon className="text-info group-hover:text-terminal-black transition-colors duration-200 " />}
          />
        </a>

        <a href="https://github.com/Tharun2331" target="_blank" rel="noreferrer">
          <Button
            size="md"
            text="GitHub"
            variant="tertiary"
            className="rounded-md"
            logo={<GithubIcon className="text-purple group-hover:text-terminal-black transition-colors duration-200 " />}
          />
        </a>
      </div>

      <div className="border w-full mt-5 border-terminal-yellow p-4">
        <div className="text-terminal-yellow text-lg font-mono">
          <p className="mb-2">&gt; <span className="font-semibold">Currently Available For:</span></p>
          <div className="text-terminal-gray-300 space-y-1 pl-4">
            <p>&gt; Full-time opportunities in Software Development</p>
            <p>&gt; Freelance projects</p>
            <p>&gt; Open source collaborations</p>
          </div>
        </div>
      </div>

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50">
          <Email closeModal={() => setShowEmailModal(false)} />
        </div>
      )}
    </div>
  );
}