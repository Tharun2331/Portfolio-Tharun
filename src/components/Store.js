export const skillsJson = {
  "Languages": [
    { "name": "JavaScript", "score": 90 },
    { "name": "TypeScript", "score": 85 },
    { "name": "Python", "score": 85 },

  ],
  "Frameworks": [
    { "name": "React.js", "score": 85 },
    { "name": "React Native", "score": 85 },
    { "name": "Next.js", "score": 75 },
    { "name": "Node.js", "score": 80 },
    { "name": "Express.js", "score": 75 },
    { "name": "Expo", "score": 75 },
    { "name": "Vite", "score": 75 }
  ],
  "Libraries": [
    { "name": "Redux", "score": 75 },
    { "name": "Tailwind CSS", "score": 80 },
    { "name": "LangChain", "score": 80 },
    { "name": "Scikit-learn", "score": 70 },
    { "name": "Hugging Face", "score": 75 },
    { "name": "Pandas", "score": 80 },
    { "name": "Zod", "score": 75 },
    { "name": "OpenAI SDK", "score": 75 },
    { "name": "Shadcn/ui", "score": 75 },
    { "name": "Prisma", "score": 70 },
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
    { "name": "Docker", "score": 70 },
    { "name": "Postman", "score": 80 },
    { "name": "Firebase", "score": 75 },
    { "name": "Decisions", "score": 70 },
    { "name": "Lucidchart", "score": 75 },
    { "name": "Azure Boards", "score": 70 },
    { "name": "VS Code", "score": 85 },
    { "name": "Cursor", "score": 90 },
    { "name": "Windows", "score": 95 },
    {"name": "Jira", "score":90}
  ],
  "devOps": [
    {"name": "AWS", "score": 70 },
    {"name":"github-actions", "score":75},
    { "name": "Git", "score": 90 },
    { "name": "GitHub", "score": 85 },
    {"name": "AWS-IAM", "score": 70 },
    {"name": "AWS-S3", "score": 70 },
    {"name": "AWS-VPC", "score": 70 },
    {"name": "AWS-EC2", "score": 70 },
    {"name": "AWS-CloudWatch", "score": 70 },
    {"name":"docker", "score":70},
    {"name": "docker-compose", "score":75}
  ]
}
export const experienceJson = {
  "experience": [
    {
      "title": "AI Software Engineer Intern",
      "company": "GQ Consultancy Inc.",
      "duration": "Sep 2025 – Present",
      "responsibilities": [
        "Built cross-platform applications using TypeScript, React Native, and NodeJS with RAG-based AI workflows, delivering intelligent responses and scalable services across iOS and Android.",
        "Optimized PostgreSQL queries and connection pooling, and integrated Pinecone vector database for semantic search, reducing latency by 30% for AI-powered mobile applications.",
        "Implemented real-time AI features, RAG retrieval systems, and Firebase authentication, enhancing engagement through intelligent interfaces.",
        "Developed reusable components and modular backend services with AI integration, accelerating feature delivery."
      ]
    },
    {
      "title": "Software Developer (Tax Analyst)",
      "company": "Ernst & Young Global Delivery Services",
      "duration": "Aug 2022 – Aug 2023",
      "responsibilities": [
        "Developed full-stack tax web applications using React, Node.js, and Redux with RESTful APIs increasing operational efficiency by 25%.",
        "Built scalable backend services and optimized database queries with SQL, implementing data pipelines ensuring high data integrity and faster response times.",
        "Created reusable frontend components and modular backend architecture accelerating full-stack feature delivery by 30%.",
        "Configured CI/CD pipelines using GitHub Actions enabling automated testing, builds, and deployments reducing release cycles by 40%.",
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
      "title": "Brainly - AI Content Management Platform",
      "githubLink": "https://github.com/Tharun2331/Brainly_Web_App_2025",
      "liveLink": "https://brainly-v0.netlify.app/",
      "description": [
        "Full-stack knowledge management system with AI semantic search using OpenAI embeddings and Pinecone vector database for intelligent content discovery across tweets, videos, articles, and notes.",
        "RESTful API with JWT authentication, Zod validation, and 20+ endpoints; Redux Toolkit state management with mobile-responsive React UI featuring real-time search and dark mode.",
        "Shareable public links with hash-based routing, MongoDB schema optimization with population strategies, and async vector indexing for scalable search performance.",
        "Docker Compose containerization for local development; shareable public links with hash-based routing, MongoDB schema optimization and async vector indexing for scalable search performance."
      ],
      "technologies": [
        "Node.js", "Express.js", "MongoDB", "React", "Redux Toolkit", "Vite", "Docker", 
        "Tailwind CSS", "TypeScript", "Pinecone", "OpenAI", "JWT", "Zod", 
        "Bcrypt", "Axios"
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
