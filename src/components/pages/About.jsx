export default function About() {
  return (
    <div className="mt-2">
      <div className="text-terminal-green text-2xl  font-medium mb-2">
        <span>$ cat about.txt</span>
      </div>
      <div className="text-lg text-terminal-gray leading-relaxed font-mono whitespace-pre-wrap">
        <p>
          {`> Hello! I'm Tharun Sekar, a passionate Software Developer and AI Enthusiast

> 🚀 With experience at Ernst & Young, Verzeo, and multiple startups, I’ve built scalable full-stack applications and machine learning solutions that drive real-world impact.

> 💻 My toolkit includes React, Node.js, JavaScript, TypeScript, React Native, Next.js, Python, and cutting-edge GraphRAG-powered medical QA systems.

> 🎯 I’m currently focused on Full Stack Development and AI-driven applications, especially leveraging Retrieval-Augmented Generation (RAG) for smarter, more reliable systems.

> 📍 Based in Ontario, Canada, but open to global opportunities.

> 🎮 When I’m not coding, I’m usually exploring sci-fi RPGs or arguing over pizza toppings with friends like it’s a high-stakes multiplayer match.`}
        </p>
      </div>
    </div>
  );
}
