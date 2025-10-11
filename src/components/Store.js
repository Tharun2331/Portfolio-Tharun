export const skillsJson = {
  "Languages": [
    { "name": "JavaScript", "score": 90 },
    { "name": "TypeScript", "score": 85 },
    { "name": "Python", "score": 85 },
    { "name": "C++", "score": 70 },
    { "name": "SQL", "score": 75 }
  ],
  "Frameworks": [
    { "name": "React.js", "score": 85 },
    { "name": "React Native", "score": 85 },
    { "name": "Next.js", "score": 75 },
    { "name": "Node.js", "score": 80 },
    { "name": "Express.js", "score": 75 },
    { "name": "NestJS", "score": 70 },
    { "name": "Expo", "score": 75 },
    { "name": "Vite", "score": 75 }
  ],
  "Libraries": [
    { "name": "Redux", "score": 75 },
    { "name": "Zustand", "score": 70 },
    { "name": "React Query", "score": 70 },
    { "name": "Axios", "score": 80 },
    { "name": "Tailwind CSS", "score": 80 },
    { "name": "LangChain", "score": 80 },
    { "name": "Scikit-learn", "score": 70 },
    { "name": "PyTorch", "score": 70 },
    { "name": "TensorFlow", "score": 70 },
    { "name": "Hugging Face", "score": 75 },
    { "name": "Pandas", "score": 80 },
    { "name": "NumPy", "score": 75 },
    { "name": "Matplotlib", "score": 70 }
  ],
  "databases": [
    { "name": "PostgreSQL", "score": 80 },
    { "name": "MongoDB", "score": 75 },
    { "name": "MySQL", "score": 75 },
    { "name": "Neo4j", "score": 65 },
    { "name": "Pinecone", "score": 70 },
    { "name": "ChromaDB", "score": 65 }
  ],
  "Tools": [
    { "name": "Git", "score": 90 },
    { "name": "GitHub", "score": 85 },
    { "name": "Docker", "score": 70 },
    { "name": "Postman", "score": 80 },
    { "name": "Prisma", "score": 70 },
    { "name": "TypeORM", "score": 75 },
    { "name": "Firebase", "score": 75 },
    { "name": "UIPath", "score": 70 },
    { "name": "Decisions", "score": 70 },
    { "name": "Lucidchart", "score": 75 },
    { "name": "Azure Boards", "score": 70 },
    { "name": "VS Code", "score": 85 },
    { "name": "Cursor", "score": 90 },
    { "name": "Windows", "score": 95 }
  ],
  "devOps": [
    { "name": "AWS", "score": 70 },
    { "name": "Azure", "score": 65 },
    { "name": "Google Cloud (GCP)", "score": 65 },
    { "name": "SageMaker", "score": 60 }
  ]
}
export const experienceJson = {
  "experience": [
    {
      "title": "Full Stack Mobile Developer Intern",
      "company": "GQ Consultancy Inc.",
      "duration": "Sep 2025 – Present",
      "responsibilities": [
        "Built cross-platform applications using TypeScript, React Native, and NestJS delivering responsive UI and scalable backend services.",
        "Developed modular components enabling faster feature iterations across iOS and Android platforms.",
        "Integrated TypeORM with PostgreSQL reducing query latency and improving performance by 30%.",
        "Implemented real-time features and Firebase authentication enhancing user engagement and security.",
        "Deployed applications on Google Cloud Platform ensuring scalable infrastructure with high availability."
      ]
    },
    {
      "title": "RPA Developer / Software Developer (Tax Analyst)",
      "company": "Ernst & Young Global Delivery Services",
      "duration": "Aug 2022 – Aug 2023",
      "responsibilities": [
        "Engineered tax web applications using React, Node.js, and Redux increasing operational efficiency by 25%.",
        "Automated taxation workflows using UIPath and Decisions reducing manual work by 30%.",
        "Built reusable UI components and optimized backend APIs accelerating feature delivery by 30%.",
        "Developed SQL databases and data pipelines with high data integrity and faster queries.",
        "Delivered data-driven dashboards improving client decision-making and increasing adoption by 15%."
      ]
    },
    {
      "title": "Machine Learning Intern",
      "company": "Verzeo",
      "duration": "Sep 2021 – Oct 2021",
      "responsibilities": [
        "Developed machine learning models using Scikit-learn and PyTorch for predictive analytics and NLP tasks.",
        "Performed EDA, data preprocessing, and pipeline design using Pandas and NumPy.",
        "Fine-tuned Hugging Face transformer models for domain-specific text classification.",
        "Deployed ML workflows on AWS with MongoDB integration and monitored performance using Matplotlib visualizations."
      ]
    },
    {
      "title": "Software Engineer Intern",
      "company": "Mobiezy Solutions",
      "duration": "May 2022 – Jul 2022",
      "responsibilities": [
        "Developed responsive web applications using React.js, Node.js, and MongoDB improving front-end load times by 30%.",
        "Integrated RESTful APIs, ensuring secure and efficient communication between front-end and back-end.",
        "Collaborated in an Agile team to deliver scalable solutions with reusable UI components.",
        "Deployed containerized applications using Docker, managed GitHub CI/CD pipelines, and optimized performance monitoring dashboards."
      ]
    }
  ]
}

export const projectsJson = {
  "projects": [
    {
      "title": "Brainly (In Progress)",
      "githubLink": "https://github.com/Tharun2331/Brainly_Web_App_2025",
      "liveLink": "https://brainly-v0.netlify.app/",
      "description": [
        "AI-assisted personal knowledge management platform for curating links/videos with a dynamic dashboard.",
        "Backend: Node.js, Express.js, MongoDB, JWT, Zod; Frontend: React, Vite, Tailwind CSS.",
        "Shareable links (/share/<hash>), Axios-optimized APIs, and planned real-time/SSE updates."
      ],
      "technologies": [
        "Node.js", "Express.js", "MongoDB", "React", "Vite", "Tailwind CSS",
        "Axios", "JWT", "Zod", "Bcrypt", "Pinecone", "OpenAI", "TypeScript"
      ]
    },
    {
      "title": "Cross-Platform Mobile Wallet",
      "githubLink": "https://github.com/Tharun2331/React-Native-Wallet-Frontend",
      "liveLink": "https://github.com/Tharun2331/React-Native-Wallet",
      "description": [
        "React Native + Expo wallet app (iOS/Android) with Express.js + PostgreSQL backend.",
        "Clerk authentication, Redis-based rate limiting, and transaction CRUD with real-time balance.",
        "Deployed backend on Render; optimized PostgreSQL queries (TypeORM) for ~30% faster responses."
      ],
      "technologies": [
        "React Native", "Expo", "Clerk", "Express.js", "PostgreSQL", "Redis", "Node.js", "TypeORM"
      ]
    },
    {
      "title": "GraphRAG Pipeline for Evidence-Based Medical QA (Paper)",
      "githubLink": "https://github.com/kushal-ml/MS_Project_Fall24",
      "liveLink": "https://www.medrxiv.org/content/10.1101/2025.05.03.25325604v1",
      "description": [
        "Integrated Neo4j + Pinecone for USMLE-style QA; ~25% better retrieval on MedQA and ~90% citation accuracy.",
        "UMLS knowledge graph with 1,000+ semantic links enabling 3-hop reasoning; Streamlit interface.",
        "Hybrid strategies (LLM-Only, Context-Strict, LLM-Informed) with query expansion and re-ranking."
      ],
      "technologies": [
        "Python", "Neo4j", "Pinecone", "LangChain", "UMLS", "MedQA",
        "LLMs", "Pandas", "Matplotlib", "SentenceTransformer", "Streamlit"
      ]
    },
    {
      "title": "Course Selling Platform Backend",
      "githubLink": "https://github.com/Tharun2331/Course_Selling_App_Backend",
      "liveLink": "",
      "description": [
        "Secure, scalable backend enabling course admin and purchase flows.",
        "JWT + bcrypt auth, Zod validation, and robust error handling; creator-tracked course management."
      ],
      "technologies": ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "Zod"]
    }
  ]
}

export const contactJson = {
  "name": "Tharun Sekar",
  "email": "tharunsd23@gmail.com",
  "phone": "+1-807-707-4181",
  "location": "Toronto, Ontario, Canada",
  "availability": "I work remotely across most time zones",
  "social": {
    "github": "https://github.com/Tharun2331",
    "linkedin": "https://www.linkedin.com/in/tharun-sekar-a587711b3/",
    "twitter": "https://x.com/Tharun231311",
    "portfolio": "https://portfolio-tharun-sekar.netlify.app/"
  },
  "preferred_contact": "email"
}
