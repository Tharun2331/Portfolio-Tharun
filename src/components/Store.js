export const skillsJson = {
  "Languages": [
    { "name": "Python", "score": 85 },
    { "name": "C++", "score": 70 },
    { "name": "Java", "score": 65 },
    { "name": "JavaScript", "score": 85 },
    { "name": "TypeScript", "score": 60 }
  ],
  "Frameworks": [
    { "name": "Tailwind", "score": 75 },
    { "name": "React.js", "score": 80 },
    { "name": "Node.js", "score": 75 },
    { "name": "Express", "score": 70 },
    {"name":"Vite", "score":70},

  ],
  "Libraries": [
    { "name": "Scikit-learn", "score": 70 },
    { "name": "TensorFlow", "score": 70 },
    { "name": "PyTorch", "score": 70 },
    { "name": "Hugging Face", "score": 75 },
    {"name": "LangChain", "score":80}
  ],
  "databases": [
    { "name": "MongoDB", "score": 75 },
    { "name": "MySQL", "score": 75 },
    { "name": "Neo4j", "score": 60 }
  ],
  "Tools": [
    
    {"name":"VS Code","score":85},
    {"name":"Cursor","score":90},
    {"name":"Windows","score":95}
  ],
    "devOps": [
    { "name": "AWS", "score": 70 },
    {"name":"Heroku", "score":75},
    {"name":"Postman","score":80},
    { "name": "GitHub", "score": 85 },
  ]
}

export const experienceJson = {
  "experience": [
    {
      "title": "Software Developer",
      "company": "Ernst & Young Global Delivery Services",
      "duration": "Aug 2022 - Aug 2023",

      "responsibilities": [
        "Worked in agile environments and built web applications with React.js, Node.js, and Redux, boosting efficiency by 25% via optimized state management.",
        "Designed RPA workflows using UI Path and Decisions, automating tasks and cutting manual workload by 30%.",
        "Managed SQL databases in Decisions, enhancing data retrieval for automation and web apps.",
        "Used Azure Boards to track and resolve tickets, improving system performance for web and RPA solutions.",
        "Created Lucidchart diagrams to streamline automation logic and align stakeholders.",
        "Mentored 2 interns, providing knowledge transfer and codebase setup for sprint contributions."
      ]
    },
    {
      "title": "Machine Learning Intern",
      "company": "Verzeo",
      "duration": "Sep 2022 – Oct 2022",
      "responsibilities": [
        "Conducted EDA and data preprocessing to uncover key insights and prepare datasets for high-accuracy model development.",
        "Built and deployed machine learning models using AWS services like S3, EC2, Lambda, and SageMaker, ensuring scalable and efficient performance.",
        "Fine-tuned pretrained models from Hugging Face, significantly reducing development time while improving task-specific performance.",
        "Monitored and optimized model performance in production with AWS CloudWatch and Elasticsearch, ensuring reliability and real-time insights."
      ]
    },
    {
      "title": "Software Engineer Intern",
      "company": "Mobiezy Solutions",
      "duration": "May 2022 - July 2022",
      "responsibilities": [
        "Developed and deployed responsive web applications using React.js, Node.js, and MongoDB, delivering high-performance, user-friendly interfaces.",
        "Integrated RESTful APIs and optimized front-end performance while collaborating with back-end developers and designers to implement secure, scalable solutions.",
        "Managed application state with React Hooks and improved data handling using efficient query techniques, reducing load times by 30%.",
        "Deployed applications with Docker containers, streamlined version control with GitHub, and built interactive dashboards for real-time performance monitoring in an Agile development environment."
      ]
    }
  ]
}


export const projectsJson = {
  "projects": [
    {
      "title": "Course Selling Platform Backend",
      "githubLink": "https://github.com/Tharun2331/Course_Selling_App_Backend",
      "liveLink": "",
      "description": [
        "Developed a secure and scalable backend API for a course selling platform, enabling administrators to manage courses and users to browse and purchase educational content.",
        "Implemented robust authentication and authorization using JWT and bcrypt for secure sign-in and sign-up functionalities, with password hashing to protect user credentials.",
        "Designed flexible course management endpoints to create, update, view, and delete courses, tracking the creator for accountability and efficient management.",
        "Ensured data integrity and application security with Zod for input validation, MongoDB for database operations, and effective error handling for seamless performance."
      ],
      "technologies": ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "Zod"]
    },
    {
      "title": "Thesis Project: GraphRAG Pipeline for Evidence Based Medical Question Answering",
      "githubLink": "https://github.com/kushal-ml/MS_Project_Fall24.git",
      "liveLink": "https://www.medrxiv.org/content/10.1101/2025.05.03.25325604v1",
      "description": [
        "Developed a GraphRAG pipeline integrating Neo4j and Pinecone for USMLE-style medical QA, reducing LLM hallucination with hybrid retrieval, query expansion, and re-ranking.",
        "Built a UMLS Metathesaurus knowledge graph with 1,000+ semantic relationships and 3-hop paths, featuring a Streamlit interface.",
        "Implemented Pinecone RAG with MedQA (textbooks dataset), boosting retrieval efficiency by 25% using text-embedding-3-large and ThreadPoolExecutor.",
        "Fused Neo4j and RAG data with GPT-4o-mini across LLM-Only, Context-Strict, and LLM-Informed strategies, achieving 90% citation accuracy.",
        "Evaluated with a 30-question MedQA ablation study, using a 0.6·Evidence + 0.4·Correctness score and metrics like Concept Coverage and Hallucination Detection.",
        "Acknowledgment: Supervised by Dr. Sabah Mohammed, Lakehead University."
      ],
      "technologies": [
        "Python", "Neo4j", "Pinecone", "LangChain", "UMLS", "MedQA", "LLMs", "Pandas",
        "Matplotlib", "SentenceTransformer", "Streamlit", "OpenAI text-embedding-3-large", "RecursiveCharacterTextSplitter"
      ]
    },
    {
      "title": "Brainly (In Progress)",
      "githubLink": "https://github.com/Tharun2331/Brainly_Web_App_2025",
      "liveLink": "",
      "description": [
        "Developing a full-stack personal knowledge management system to store, organize, and share curated content (e.g., Twitter links, YouTube videos) via a dynamic dashboard.",
        "Designing a secure backend with Node.js, Express.js, MongoDB, and JWT, with ongoing enhancements for robust authentication and scalability.",
        "Building an interactive frontend with React.js, Vite, and Tailwind CSS, featuring a shareable link system (/share/<hash>).",
        "Optimizing APIs with Axios for 25% faster load times, exploring manual refresh and SSE for updates.",
        "Ensuring security with Zod validation and error handling, managing 50+ content items with plans for growth."
      ],
      "technologies": [
        "Node.js", "Express.js", "MongoDB", "React.js", "Vite", "Tailwind CSS",
        "Axios", "JWT", "Zod", "Bcrypt"
      ]
    }
  ]
}

export const contactJson = {

    "name": "Tharun Sekar",
    "email": "tharunsd23@gmail.com",
    "location": "Ontario, Canada",
    "availability": "I work remotely across most time zones",
    "social": { 
      "github": "https://github.com/Tharun2331",
      "linkedin": "linkedin.com/in/tharun-sekar-a587711b3",
      "twitter": "https://x.com/Tharun231311"
    },
    "preferred_contact": "email"
  
}
