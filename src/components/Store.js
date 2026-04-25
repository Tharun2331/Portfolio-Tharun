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
      "title": "Full Stack Developer",
      "company": "Booklzye",
      "duration": "Feb 2026 – Present",
      "responsibilities": [
        "Contributed to architecture and code reviews for Django backend systems and LLM-based production applications, identifying scalability bottlenecks and supporting performance improvements",
        "Authored and maintained comprehensive API documentation, improving developer onboarding and enabling faster debugging and incident resolution",
        "Applied object-oriented design principles and clean coding practices to enhance the maintainability, scalability, and readability of backend services",
        "Assisted in building and integrating RESTful APIs to support application functionality and seamless system communication",
        "Leveraged AI-assisted development tools to accelerate implementation, improve workflow efficiency, and support code optimization"
      ]
    },
    
    
    
    
    {
      "title": "AI Software Engineer Intern",
      "company": "GQ Consultancy Inc.",
      "duration": "Sep 2025 – Jan 2026",
      "responsibilities": [
        "Developed Node.js backend services using object-oriented design to orchestrate RAG pipelines, including document ingestion, vector embeddings, and Pinecone retrieval, reducing response latency",
        "Implemented unit tests, input validation, and secure JWT-based authentication flows for Firebase user management across staging environments",
        "Engineered cross-platform mobile features using React Native and TypeScript for AI-driven user experiences across iOS and Android platforms",
        "Integrated backend APIs and AI-powered workflows to support scalable application performance and reliable data flow",
        "Optimized backend logic and service integrations to improve application responsiveness, scalability, and overall user experience"
      ]
    },
    {
      "title": "Software Developer (Tax Analyst)",
      "company": "Ernst & Young Global Delivery Services",
      "duration": "Aug 2022 – Aug 2023",
      "responsibilities": [
        "Developed and enhanced an enterprise tax processing platform using React, Node.js, and MySQL, improving operational throughput and reducing page load times",
        "Applied object-oriented design principles to build scalable, maintainable application features supporting tax and business workflows",
        "Built reusable TypeScript and React components and optimized backend APIs, accelerating feature delivery and reducing development effort",
        "Delivered data-driven dashboards and reporting features that improved client decision-making and increased operational efficiency",
        "Collaborated with UI/UX designers and cross-functional teams to create intuitive user interfaces, contributing to an increase in client adoption"
      ]
    },
    
    {
      "title": "Software Engineer Intern",
      "company": "Mobiezy Solutions",
      "duration": "May 2022 – Jul 2022",
      "responsibilities": [
        "Assisted in developing and maintaining responsive web pages using HTML, CSS, JavaScript, and modern frontend frameworks to improve user experience and interface consistency",
        "Supported the implementation of reusable UI components and contributed to frontend enhancements for web applications across desktop and mobile devices",
        "Assisted in integrating APIs and dynamic data into web pages, helping deliver interactive and responsive application features",
        "Worked with version control tools such as Git and GitHub to manage code updates and contribute within a collaborative development environment"
      ]
    },
    {
      "title": "Machine Learning Intern",
      "company": "Verzeo",
      "duration": "Sep 2021 – Oct 2021",
      "responsibilities": [
        "Assisted in preprocessing and analyzing datasets for machine learning tasks, including data cleaning, transformation, and feature preparation", 
        "Built and evaluated basic machine learning models using Python and scikit-learn to support predictive analytics use cases",
        "Conducted exploratory data analysis and visualization to uncover trends, correlations, and potential data issues",
        "Supported model testing and validation using standard performance metrics to compare results and improve reliability"
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
  "email": "tharunsekar194@gmail.com",
  "phone": "+1-647-374-0315",
  "location": "Toronto, Ontario, Canada",
  "availability": "I work remotely across most time zones",
  "social": {
    "github": "https://github.com/Tharun2331",
    "linkedin": "https://www.linkedin.com/in/tharunsekar/",
    "twitter": "https://x.com/Tharun231311",
    "portfolio": "https://portfolio-tharun-sekar.netlify.app/"
  },
  "preferred_contact": "email"
}
