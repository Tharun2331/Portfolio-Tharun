export default function About() {
  return (
    <div className="mt-2">
      <div className="text-terminal-green text-2xl  font-medium mb-2">
        <span>$ cat about.txt</span>
      </div>
      <div className="text-lg text-terminal-gray leading-relaxed font-mono whitespace-pre-wrap">
        <p>
          {`> Hello! I'm Tharun Sekar, a passionate Software Developer and AI Researcher

> 🚀 Experience across Ernst & Young, Verzeo, and multiple startups building scalable full-stack and ML solutions

> 💻 Skilled in React, Node.js, JavaScript, Python, and GraphRAG-based medical QA systems

> 🎯 Currently focused on AI-powered applications, Retrieval-Augmented Generation (RAG), and cloud-native development

> 📍 Based in Ontario, Canada | Open to global opportunities

> When I’m not coding, you’ll find me grinding through sci-fi RPGs or battling friends over pizza toppings like it’s the final round of a multiplayer showdown.`}
        </p>
      </div>
    </div>
  );
}
