import { DeveloperProfile, Project, SkillGroup, SocialLink } from '../types';

const assessmentPortal2 = new URL('../assets/images/ass_portal_2.png', import.meta.url).href;
const assessmentPortal3 = new URL('../assets/images/ass_portal_3.png', import.meta.url).href;
const assessmentPortal4 = new URL('../assets/images/ass_portal_4.png', import.meta.url).href;
const babybot1 = new URL('../assets/images/babybot1.png', import.meta.url).href;
const babybot2 = new URL('../assets/images/babybot2.jpg', import.meta.url).href;
const babybot3 = new URL('../assets/images/babybot3.jpg', import.meta.url).href;
const ab1 = new URL('../assets/images/ab1.jpg', import.meta.url).href;
const ab2 = new URL('../assets/images/ab2.jpg', import.meta.url).href;
const ab3 = new URL('../assets/images/ab3.jpg', import.meta.url).href;


export const developerProfile: DeveloperProfile = {
  name: 'Jewelle Joy Vergara',
  title: 'Full-Stack Developer',
  headline: 'Building practical, production-ready web applications that combine reliable backend systems, modern interfaces, APIs, databases, and AI.',
  bio: 'I build practical web applications that combine reliable backend systems, modern interfaces, APIs, databases, and AI to solve real-world business problems.',
  availability: 'Available for full-time roles & high-impact projects',
  location: 'Pampanga, PH / Remote',
  email: 'vergarajewelle02@gmail.com',
  yearsOfExperience: '1',
  projectsCompleted: '4',
  uptimeReliability: '99.9%',
  aiPipelinesBuilt: '14+'
};

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & LLM Systems' },
  { id: 'fullstack', label: 'Full-Stack Web Apps' },
  { id: 'backend', label: 'Backend & Infrastructure' }
] as const;

export const projectsData: Project[] = [
  {
    id: 'project 1',
    title: 'Automated Events Crowd Management System Using YOLO and Deep Sort Algorithm',
    projectType: 'AI Web Application',
    purpose: 'Event organizers often rely on manual crowd counting, making it difficult to maintain an accurate view of facility occupancy. Our team developed a system that monitors attendance in real time and alerts administrators when the venue reaches its configured capacity.',
    myRole: "I developed the web application and system integration, including the JavaScript frontend, Flask backend, MySQL database, REST APIs, authentication, administrator dashboard, and WebSocket-based real-time updates.I also collaborated with the team responsible for the YOLO and DeepSORT computer vision component, contributed to dataset annotation, and integrated its occupancy data into the web application.",

    keyFeatures: [
      'Integrated real-time crowd-count data from the computer vision system into the web application.',
      'Used WebSockets to continuously update the administrator dashboard without manual refreshes.',
      'Connected facility capacity rules with alerts and automated entrance control.',
      'Collaborated across different components and performed system integration and testing.'
    ],
    technologies: ['Python', 'Flask', 'MySql', 'JavaScript', 'WebSocket', 'FastAPI'],
    outcome: 'The system successfully detected and tracked people from a video feed, reduced duplicate counting through object tracking, and gave administrators a centralized dashboard for monitoring facility occupancy in real time.',
    category: 'ai',
    featured: true,
    screenshots: [
      {
        id: 'nexus-1',
        title: '',
        caption: '',
        imageUrl: babybot1,
        viewType: "dashboard"
      },
      {
        id: 'nexus-2',
        title: '',
        caption: '',
        imageUrl: babybot2,
        viewType: 'dashboard'
      },
      {
        id: 'nexus-3',
        title: '',
        caption: '',
        imageUrl: babybot3,
        viewType: 'dashboard'
      }
    ],
  },

 {
    id: 'project 2',
    title: 'AI Assessment System',
    projectType: 'Professional Project · Internal Business Application',
    purpose: `A web-based assessment platform developed to transition the company's applicant assessments from an onsite process to an online system. It allows candidates to complete assessments remotely while providing administrators with centralized tools to manage, monitor, and evaluate submissions.
\n
The previous process relied heavily on onsite participation and manual coordination. The platform was designed to make assessments more accessible while giving the recruitment team better visibility into applicant progress, submissions, and results.`,
    myRole: "I developed and deployed the application, working across the frontend, backend, database, APIs, authentication, and third-party integrations. I also implemented features for continuous assessment recording, automated notifications, result management, and AI-assisted evaluation.",

    keyFeatures: [
      'Built admin tools for managing assessments, job roles, question sets, applicants, and submissions.',
      'Integrated an AI Assessor to analyze and assist with evaluating applicant responses.',
      'Deployed the frontend and backend as separate services and connected them for production use.',
      'Debugged issues involving media uploads, long-running recordings, API errors, AI payload limits, and production integrations.'
    ],
    technologies: ['TypeScript', 'Node.js', 'REST API', 'Supabase', 'Gemini API', 'Vercel', 'Render'],
    outcome: 'The system provided the company with an online assessment workflow where applicants could take assessments remotely and administrators could manage submissions, monitor completion, review results, and use AI-assisted evaluation from a centralized application.',
    category: 'ai',
    featured: true,
    screenshots: [
      {
        id: 'nexus-1',
        title: '',
        caption: '',
        imageUrl: assessmentPortal2,
        viewType: 'applicant view'
      },
      {
        id: 'nexus-2',
        title: '',
        caption: '',
        imageUrl: assessmentPortal3,
        viewType: 'admin view'
      },
      {
        id: 'nexus-3',
        title: '',
        caption: '',
        imageUrl: assessmentPortal4,
        viewType: 'admin view'
      }
    ],
  },
  {
    id: 'project 3',
    title: 'AI Biography Web Application  ',
    projectType: 'Professional · Team Project',
    targetAudience: 'Enterprise Legal, Risk & Finance Teams',
    purpose: `An AI-assisted biography platform designed to help people digitally preserve their own life stories or the stories of their loved ones, making meaningful memories and experiences easier to document, share, and preserve as a personal legacy.

Users can choose between a DIY experience, where they build and manage their own biography website using customizable templates and AI-assisted writing tools, or a Professional Service, where they provide their materials and requirements for the team to create the biography website on their behalf.`,
    myRole: `I work as the backend developer with project coordination responsibilities, translating business requirements into backend functionality while coordinating implementation with the frontend developer and tester.

My responsibilities include requirements analysis and planning, database design, REST API development, authentication, AI Writing functionality, membership and payment systems, backend testing, and coordinating API requirements and application workflows across the team.`,
keyFeatures: [
      'Designed backend workflows and database relationships supporting biography websites, content management, membership, and payments.',
      'Developed REST APIs connecting the CMS frontend with backend services and persistent data.',
      'Integrated DeepSeek API for AI-assisted Generate, Rewrite, Improve, and Expand writing features.',
      'Coordinated API contracts, application flows, testing issues, and integration requirements with frontend and QA teammates.'
    ],
    technologies: ['Python', 'Flask', 'MySql', 'JavaScript', 'WebSocket', 'FastAPI'],
    outcome: 'Built the core backend foundation for an AI-assisted biography platform, supporting content management, AI writing, authentication, and membership workflows while establishing clear API integration across the development team.',
    category: 'ai',
    featured: true,
    screenshots: [
      {
        id: 'nexus-1',
        title: '',
        caption: '',
        imageUrl: ab3,
        viewType: 'User portal'
      },
      {
        id: 'nexus-2',
        title: '',
        caption: '',
        imageUrl: ab2,
        viewType: 'dashboard'
      },
      {
        id: 'nexus-3',
        title: '',
        caption: '',
        imageUrl: ab1,
        viewType: 'CMS portal'
      }
    ],

  }
];

export const skillsData: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Responsive, accessible, and high-performance interfaces',
    iconName: 'Layout',
    skills: [
      { name: 'React', category: 'frontend', tag: 'Core', description: 'Hooks, Context, Performance Optimization & React 19' },
      { name: 'TypeScript', category: 'frontend', tag: 'Language', description: 'Strict typing, Generics, Component contracts' },
      { name: 'JavaScript', category: 'frontend', tag: 'Core', description: 'ES2024+, Async/Await, Web APIs, DOM' },
      { name: 'Tailwind CSS', category: 'frontend', tag: 'Styling', description: 'Utility-first styling, Responsive systems, Tokens' },
      { name: 'Vite & Next.js', category: 'frontend', tag: 'Tooling', description: 'Fast bundling, SSR/SSG workflows, optimization' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Systems & APIs',
    subtitle: 'Scalable services, business logic, and API architecture',
    iconName: 'Server',
    skills: [
      { name: 'Java', category: 'backend', tag: 'Language', description: 'Modern Java (17/21), OOP, Concurrency, JVM tuning' },
      { name: 'Spring Boot', category: 'backend', tag: 'Framework', description: 'REST controllers, Spring Security, JPA/Hibernate' },
      { name: 'Python', category: 'backend', tag: 'Language', description: 'FastAPI, async services, data transformation' },
      { name: 'Node.js', category: 'backend', tag: 'Runtime', description: 'Express, asynchronous event loop, microservices' },
      { name: 'REST APIs', category: 'backend', tag: 'Architecture', description: 'Contract design, OpenAPI, rate limiting, auth' }
    ]
  },
  {
    id: 'database',
    title: 'Database & Infrastructure',
    subtitle: 'Data modeling, persistence, and containerized deployments',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL / Supabase', category: 'database', tag: 'RDBMS', description: 'Complex joins, indexing, migrations, pgvector' },
      { name: 'MySQL', category: 'database', tag: 'RDBMS', description: 'Normalized schemas, transaction safety, tuning' },
      { name: 'Docker', category: 'database', tag: 'DevOps', description: 'Multi-stage builds, container orchestration, compose' },
      { name: 'Git / GitHub', category: 'database', tag: 'Workflow', description: 'Branching strategies, CI/CD Actions, code review' }
    ]
  },
  {
    id: 'ai-integration',
    title: 'AI & Integration',
    subtitle: 'Practical LLM integration, intelligent workflows, and automation',
    iconName: 'Cpu',
    skills: [
      { name: 'LLM API Integration', category: 'ai', tag: 'Core AI', description: 'Gemini 1.5, OpenAI, Anthropic, streaming responses' },
      { name: 'AI-Powered Applications', category: 'ai', tag: 'Full-Stack AI', description: 'Multimodal apps, OCR, document parsing, chat' },
      { name: 'Prompt Engineering', category: 'ai', tag: 'AI Craft', description: 'Structured JSON outputs, few-shot prompting, guardrails' },
      { name: 'AI Automation', category: 'ai', tag: 'Pipelines', description: 'Function calling, autonomous agents, workflow triggers' },
      { name: 'API Integration', category: 'ai', tag: 'Protocols', description: 'Webhooks, OAuth2, payment gateways, third-party APIs' }
    ]
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    label: 'github.com/wey02',
     url: 'https://github.com/wey02', 
     icon: 'Github',
    actionType: 'link'
  },
  {
    platform: 'LinkedIn',
    label: 'linkedin.com/in/jewelle-joy-vergara-a97a4b339',
    url: 'https://www.linkedin.com/in/jewelle-joy-vergara-a97a4b339',
    icon: 'Linkedin',
    actionType: 'link'
  },
  {
    platform: 'Email',
    label: 'vergarajewelle02@gmail.com',
    url: 'mailto:vergarajewelle02@gmail.com',
    icon: 'Mail',
    actionType: 'email'
  }
];

export const experienceData = [
  {
    period: 'Feb 2026 — Aug 2026',
    role: 'AI Officer',
    company: 'Dadi Coach Corp.',
    location: 'Pampanga, PH',
    description: 'Developing software and AI solutions that improve internal processes, combining backend development, data management, automation, and technical project coordination.',
    highlights: [
      `Manage the development and implementation of internal software and AI initiatives, translating business
requirements into technical solutions and coordinating projects from planning through delivery.`,
      `Develop and maintain backend services, APIs, and database systems for company applications, with
responsibility for system functionality, data management, and technical implementation.`,
      `Design and implement AI agents, chatbots, and workflow automations to reduce manual processes and support
day-to-day business operations.`,
],
    tech: ['React', 'TypeScript', 'Python', 'FastAPI', 'Spring Boot', 'PostgreSQL', 'Docker', 'Gemini API']
  },
  {
    period: 'Sep 2025 — Jan 2026',
    role: 'Data Processing Representative',
    company: 'Swak BPO Corp.',
    location: 'Pampanga, PH',
    description: 'Processed and verified licensing and invoice data, investigating discrepancies and maintaining accurate records across structured business workflows.',
    highlights: [
      `Maintained and validated licensing and invoice records, ensuring accuracy, completeness, and compliance with established data standards.`,
      `Identified and investigated data discrepancies and processing errors, coordinating with underwriters to resolve issues and maintain accurate records.`,
      `Supported quality assurance and process consistency through accurate documentation, record management, and adherence to established procedures.`,
    ],
    tools: ['Microsoft Excel', 'Microsoft Teams', 'ALIS', 'Mail']
  }
];
