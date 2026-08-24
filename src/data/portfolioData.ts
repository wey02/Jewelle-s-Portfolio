import { DeveloperProfile, Project, SkillGroup, Certification, SocialLink } from '../types';

export const developerProfile: DeveloperProfile = {
  name: 'Jewelle',
  title: 'Full-Stack Developer & AI Systems Engineer',
  headline: 'Building practical, production-ready web applications that combine reliable backend systems, modern interfaces, APIs, databases, and AI.',
  bio: 'I build practical web applications that combine reliable backend systems, modern interfaces, APIs, databases, and AI to solve real-world business problems.',
  availability: 'Available for full-time roles & high-impact projects',
  location: 'San Francisco, CA / Remote',
  email: 'jewelle.dev@example.com',
  yearsOfExperience: '5+',
  projectsCompleted: '28+',
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
    id: 'nexus-ai',
    title: 'NexusAI — Intelligent Document & Contract Intelligence Platform',
    projectType: 'AI Web Application',
    targetAudience: 'Enterprise Legal, Risk & Finance Teams',
    purpose: 'Built to solve the operational bottleneck of manually transcribing, reconciling, and auditing complex 50+ page financial statements, commercial contracts, and technical compliance PDFs. Organizations previously lost hundreds of analyst hours each quarter verifying tabular records with zero citation traceability.',
    myRole: 'Architected and built the full-stack system from the ground up: developed the responsive React 19 / TypeScript workspace with interactive visual document bounding-box overlays, engineered the Python FastAPI backend service orchestrating Google Gemini multimodal extraction, and configured PostgreSQL with pgvector for hybrid semantic document retrieval.',
    keyFeatures: [
      'Multimodal document parser extracting structural tables, signatures, and nested clauses',
      'Real-time streaming conversational analysis with verifiable visual bounding-box citations',
      'Automated schema-conforming JSON export with direct webhook dispatch to enterprise ERPs',
      'Background batch ingestion pipeline with live WebSocket progress and status updates'
    ],
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Gemini API', 'Docker', 'Tailwind CSS'],
    category: 'ai',
    featured: true,
    screenshots: [
      {
        id: 'nexus-1',
        title: 'Interactive Document Workspace & Citation Grounding',
        caption: 'Split-view interface showing real-time conversational Q&A with live bounding-box citation highlights linked directly to source PDF clauses.',
        imageUrl: '/screenshots/nexus-workspace.svg',
        viewType: 'ai-feature'
      },
      {
        id: 'nexus-2',
        title: 'Structured Financial Table Extraction & Schema Validator',
        caption: 'Automated table recognition converting complex balance sheets into validated JSON schemas with confidence ratings.',
        imageUrl: '/screenshots/nexus-extraction.svg',
        viewType: 'output'
      },
      {
        id: 'nexus-3',
        title: 'Enterprise Batch Queue & Throughput Analytics',
        caption: 'Administrative dashboard monitoring concurrent OCR worker nodes, token consumption, and P95 processing latency.',
        imageUrl: '/screenshots/nexus-analytics.svg',
        viewType: 'dashboard'
      }
    ],
    githubUrl: 'https://github.com/example-username/nexus-ai-platform',
    liveUrl: 'https://nexus-ai-demo.example.com',
    isPrivate: false,
    metrics: [
      { label: 'Extraction Accuracy', value: '98.4%' },
      { label: 'P95 Ingestion Speed', value: '1.4s / doc' },
      { label: 'Analyst Time Saved', value: '85%' }
    ]
  },
  {
    id: 'omni-cloud',
    title: 'OmniCloud — Microservices Orchestrator & Live Telemetry Console',
    projectType: 'Internal Business System & Full-Stack Platform',
    targetAudience: 'Platform Engineering & DevOps Operations Teams',
    purpose: 'Designed for enterprise platform operations to eliminate visibility blind spots across 30+ distributed Java Spring Boot microservices. Prevents cascading failures during upstream outages and provides instant manual replay controls for dead-letter queues.',
    myRole: 'Led the end-to-end backend service architecture and frontend control plane. Implemented high-throughput Spring Boot 3 reactive event listeners, established Redis distributed lock guards for queue replays, structured relational MySQL audit logs, and built the Vue 3 / TypeScript operational dashboard.',
    keyFeatures: [
      'Real-time STOMP/WebSocket telemetry streaming with sub-second latency anomaly triggers',
      'One-click dead-letter queue (DLQ) transactional replay engine with strict idempotency guards',
      'Comprehensive Role-Based Access Control (RBAC) enforcing dual-approval for production interventions',
      'Dynamic topology map visualizing inter-service HTTP/gRPC dependency latency in real time'
    ],
    technologies: ['Java', 'Spring Boot', 'Vue', 'TypeScript', 'MySQL', 'Redis', 'Docker', 'REST APIs', 'WebSockets'],
    category: 'fullstack',
    featured: true,
    screenshots: [
      {
        id: 'omni-1',
        title: 'Live Service Topology & Circuit Breaker Console',
        caption: 'Real-time telemetry map showing distributed microservice health, throughput, and one-click circuit breaker controls.',
        imageUrl: '/screenshots/omni-topology.svg',
        viewType: 'dashboard'
      },
      {
        id: 'omni-2',
        title: 'Dead-Letter Queue Transaction Inspector & Replay Engine',
        caption: 'Granular payload inspector allowing engineers to review failed JSON messages, edit headers, and execute safe replays.',
        imageUrl: '/screenshots/omni-dlq.svg',
        viewType: 'workflow'
      },
      {
        id: 'omni-3',
        title: 'RBAC Security Policies & Immutable Audit Trail',
        caption: 'Enterprise compliance dashboard tracking all manual interventions, operator approvals, and configuration diffs.',
        imageUrl: '/screenshots/omni-rbac.svg',
        viewType: 'admin-portal'
      }
    ],
    isPrivate: true,
    accessNote: 'Internal Enterprise Tool — Built for private enterprise infrastructure (live demo environment available).',
    liveUrl: 'https://omnicloud-demo.example.com',
    metrics: [
      { label: 'Peak Throughput', value: '14k req/s' },
      { label: 'MTTR Reduction', value: '45%' },
      { label: 'Service Uptime', value: '99.99%' }
    ]
  },
  {
    id: 'prompt-ops',
    title: 'PromptOps — Automated LLM Benchmark & Regression Suite',
    projectType: 'Automation Tool & AI Developer Platform',
    targetAudience: 'Software Engineering Teams Building with AI',
    purpose: 'Created for developer teams shipping LLM-backed applications who previously lacked automated regression suites to test prompt variations, detect structural JSON format drift, and track cost spikes before deploying prompt changes to production.',
    myRole: 'Engineered the CLI test runner and web analysis workbench. Implemented the asynchronous Node.js execution engine to dispatch parallel prompt queries across model endpoints, built the semantic similarity scoring matrix in Python, and developed the React UI with interactive latency and cost comparison graphs.',
    keyFeatures: [
      'Parallel multi-model benchmark matrix executing 100+ prompt test cases simultaneously',
      'Automated JSON-Schema conformity scorer identifying breaking output format mutations',
      'Semantic drift analysis calculating Cosine similarity against verified golden baselines',
      'GitHub Actions CI/CD step that fails pull requests if response accuracy drops below thresholds'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Python', 'LLM API Integration', 'Tailwind CSS', 'Git / GitHub'],
    category: 'ai',
    featured: false,
    screenshots: [
      {
        id: 'prompt-1',
        title: 'Prompt Matrix & Multi-Model Diff Workspace',
        caption: 'Side-by-side prompt variation runner displaying token usage, generation latency, and output schema adherence.',
        imageUrl: '/screenshots/prompt-matrix.svg',
        viewType: 'ai-feature'
      },
      {
        id: 'prompt-2',
        title: 'CI/CD Regression Scorecard & Token Cost Analytics',
        caption: 'Automated test suite report scoring hallucination rates, semantic drift, and projected monthly API expenditure.',
        imageUrl: '/screenshots/prompt-metrics.svg',
        viewType: 'analytics'
      },
      {
        id: 'prompt-3',
        title: 'Latency & Token Cost Optimization Leaderboard',
        caption: 'Multi-endpoint benchmark comparison tracking token reduction, response variance, and P95 execution speed across release versions.',
        imageUrl: '/screenshots/prompt-leaderboard.svg',
        viewType: 'dashboard'
      }
    ],
    githubUrl: 'https://github.com/example-username/prompt-ops-eval',
    liveUrl: 'https://prompt-ops.example.com',
    isPrivate: false,
    metrics: [
      { label: 'Token Cost Savings', value: '32%' },
      { label: 'Test Suite Execution', value: '< 850ms' },
      { label: 'Format Drift Rate', value: '0.0%' }
    ]
  },
  {
    id: 'fleet-stream',
    title: 'FleetStream — High-Throughput IoT Telemetry & Alert Engine',
    projectType: 'Backend System & REST API Platform',
    targetAudience: 'Connected Hardware & Logistics Fleet Operators',
    purpose: 'Engineered for a logistics fleet platform to ingest, normalize, and process over 4.5 million daily sensor telemetry packets from mobile GPS and refrigerated cargo units without data loss or HTTP connection timeouts during peak burst periods.',
    myRole: 'Sole backend architect responsible for the Java 21 Spring Boot REST ingestion service. Designed partitioned PostgreSQL table schemas, developed high-speed buffer queues, wrote dynamic threshold alert listeners, and created comprehensive OpenAPI 3.0 documentation.',
    keyFeatures: [
      'Non-blocking asynchronous write ingestion pipeline handling up to 10,000 bursts/sec',
      'Dynamic telemetry threshold rules triggering instant webhooks upon temperature or GPS geofence breaches',
      'Optimized PostgreSQL time-window aggregation queries delivering sub-40ms dashboard read latency',
      'Production-ready Docker deployment containerization with automated health check probes'
    ],
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'REST APIs', 'Git / GitHub'],
    category: 'backend',
    featured: false,
    screenshots: [
      {
        id: 'fleet-1',
        title: 'Telemetry Ingestion Stream & Rule Configuration',
        caption: 'Real-time sensor event inspector showing geo-coordinates, cold-chain sensor status, and custom alert boundary rules.',
        imageUrl: '/screenshots/fleet-telemetry.svg',
        viewType: 'dashboard'
      },
      {
        id: 'fleet-2',
        title: 'Interactive OpenAPI 3.0 Documentation & Gateway Monitor',
        caption: 'Swagger/OpenAPI interactive developer sandbox with live request rate monitoring and endpoint latency metrics.',
        imageUrl: '/screenshots/fleet-swagger.svg',
        viewType: 'analytics'
      },
      {
        id: 'fleet-3',
        title: 'Cold-Chain Sensor Threshold & Alert Rule Matrix',
        caption: 'Rule builder for configuring automated SMS/Webhook alerts when refrigerated transport temperatures drift beyond tolerances.',
        imageUrl: '/screenshots/fleet-rules.svg',
        viewType: 'workflow'
      }
    ],
    githubUrl: 'https://github.com/example-username/fleetstream-telemetry',
    liveUrl: 'https://fleetstream-api.example.com',
    isPrivate: false,
    metrics: [
      { label: 'Daily Events Ingested', value: '4.8M+' },
      { label: 'P99 Query Response', value: '34ms' },
      { label: 'Data Ingestion Loss', value: '0.00%' }
    ]
  },
  {
    id: 'devflow-mock',
    title: 'DevFlow — Visual REST API Contract & Synthetic Mock Engine',
    projectType: 'Full-Stack Web Application',
    targetAudience: 'Cross-Functional Engineering Teams & API Designers',
    purpose: 'Built to eliminate frontend developer blockers during backend API development cycles. Enables engineering teams to visually co-design OpenAPI contracts and instantly interact with programmable, simulated mock endpoints before backend code is written.',
    myRole: 'Created the full-stack web application. Built the visual schema designer in React / TypeScript, integrated Supabase for collaborative state and authentication, and designed the dynamic edge mock server with customizable network delay and failure simulations.',
    keyFeatures: [
      'Interactive visual schema generator with type inference and live bidirectional JSON preview',
      'Programmable mock endpoints with customizable network latency, error injection, and pagination',
      'One-click automated TypeScript interface and Axios client SDK code generation',
      'Real-time team collaboration with workspace permissions and endpoint version history'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL / Supabase', 'REST APIs', 'Tailwind CSS'],
    category: 'fullstack',
    featured: false,
    screenshots: [
      {
        id: 'devflow-1',
        title: 'Visual API Contract Builder & Schema Inspector',
        caption: 'Interactive endpoint designer with live TypeScript type definition generator and status code preview.',
        imageUrl: '/screenshots/devflow-designer.svg',
        viewType: 'workflow'
      },
      {
        id: 'devflow-2',
        title: 'Mock Server Network Simulator & Request Log',
        caption: 'Real-time mock router interface simulating 404/500 errors, network latency delays, and payload responses.',
        imageUrl: '/screenshots/devflow-mock.svg',
        viewType: 'output'
      },
      {
        id: 'devflow-3',
        title: 'Automated Client SDK & Schema Diff Exporter',
        caption: 'Real-time generator outputting typed TypeScript interfaces, mock fixtures, and OpenAPI 3.0 specification exports.',
        imageUrl: '/screenshots/devflow-sdk.svg',
        viewType: 'analytics'
      }
    ],
    githubUrl: 'https://github.com/example-username/devflow-mock-engine',
    liveUrl: 'https://devflow-app.example.com',
    isPrivate: false,
    metrics: [
      { label: 'Frontend Cycle Velocity', value: '+40%' },
      { label: 'Contract Drift Incidents', value: 'Zero' },
      { label: 'Mock Endpoint Generation', value: 'Instant' }
    ]
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

export const certificationsData: Certification[] = [
  {
    id: 'aws-csa',
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    issueDate: 'Issued Aug 2024 · Active',
    credentialId: 'AWS-PSA-894210',
    credentialUrl: 'https://aws.amazon.com/verification',
    status: 'Verified',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    description: 'Demonstrates expertise in designing resilient, high-performing, secure, and cost-optimized cloud architectures on AWS.',
    skillsCovered: ['Cloud Architecture', 'VPC & Networking', 'Serverless', 'S3 & IAM Security'],
    imageUrl: '/src/assets/images/cert_aws_solutions_1787577217794.jpg',
    type: 'certification'
  },
  {
    id: 'gcp-pcd',
    title: 'Google Cloud Professional Cloud Developer',
    issuer: 'Google Cloud',
    issueDate: 'Issued Mar 2024 · Active',
    credentialId: 'GCP-DEV-554289',
    credentialUrl: 'https://cloud.google.com/certification',
    status: 'Verified',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    description: 'Validates proficiency in building scalable, cloud-native applications utilizing Cloud Run, Firestore, Pub/Sub, and Google AI services.',
    skillsCovered: ['Cloud Run', 'Microservices', 'Cloud SQL', 'CI/CD Pipelines'],
    imageUrl: '/src/assets/images/cert_gcp_developer_1787577233560.jpg',
    type: 'certification'
  },
  {
    id: 'dl-genai',
    title: 'Generative AI with Large Language Models Specialization',
    issuer: 'DeepLearning.AI & AWS',
    issueDate: 'Issued Nov 2023 · Verified',
    credentialId: 'DLAI-GENAI-98124',
    credentialUrl: 'https://deeplearning.ai/verification',
    status: 'Verified',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: 'Comprehensive certification covering LLM architecture, transformer models, fine-tuning, RLHF, and practical LLM application development.',
    skillsCovered: ['LLM Orchestration', 'Prompt Engineering', 'Vector Embeddings', 'Model Evaluation'],
    imageUrl: '/src/assets/images/cert_genai_dl_1787577247874.jpg',
    type: 'certification'
  },
  {
    id: 'ai-conf-2024',
    title: 'Global AI Systems & LLM Engineering Conference',
    issuer: 'International Tech Forum · Keynote & Workshop',
    issueDate: 'Conducted Jul 2024 · Completed',
    credentialId: 'SEM-AI-2024-881',
    credentialUrl: 'https://example.com/seminar/ai-2024',
    status: 'Verified',
    badgeColor: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200',
    description: 'Technical speaker and workshop attendee on production RAG systems, latency optimization in multi-turn dialogues, and agentic workflows.',
    skillsCovered: ['RAG Architectures', 'Agentic AI', 'Low-Latency Streaming', 'Vector Search'],
    imageUrl: '/src/assets/images/seminar_ai_conf_1787577261277.jpg',
    type: 'seminar'
  },
  {
    id: 'oracle-java',
    title: 'Oracle Certified Professional: Java SE 17 Developer',
    issuer: 'Oracle Corporation',
    issueDate: 'Issued Jan 2023 · Verified',
    credentialId: 'OCP-JAVA17-10492',
    credentialUrl: 'https://oracle.com/certifications',
    status: 'Verified',
    badgeColor: 'bg-red-50 text-red-700 border-red-200',
    description: 'Demonstrates in-depth mastery of core Java, concurrency multithreading, object-oriented principles, modular systems, and streams.',
    skillsCovered: ['Core Java', 'Concurrency', 'Stream API', 'Object-Oriented Design'],
    imageUrl: '/src/assets/images/cert_oracle_java_1787577277028.jpg',
    type: 'certification'
  },
  {
    id: 'meta-frontend',
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta & Coursera',
    issueDate: 'Issued May 2023 · Verified',
    credentialId: 'META-FED-39481',
    credentialUrl: 'https://coursera.org/verify/professional-cert/meta',
    status: 'Verified',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    description: 'Rigorous 9-course program covering advanced React patterns, client state architecture, accessibility, test-driven UI, and build performance.',
    skillsCovered: ['Advanced React', 'State Management', 'UI/UX Principles', 'Testing & CI/CD'],
    imageUrl: '/src/assets/images/cert_meta_frontend_1787577290587.jpg',
    type: 'certification'
  },
  {
    id: 'cloud-summit',
    title: 'Cloud Architecture & High-Concurrency Seminar',
    issuer: 'Distributed Systems Summit · Technical Session',
    issueDate: 'Conducted Feb 2024 · Verified',
    credentialId: 'SEM-ARCH-2024-402',
    credentialUrl: 'https://example.com/seminar/cloud-arch-2024',
    status: 'Verified',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    description: 'Intensive deep dive into high-throughput microservices, event sourcing with Kafka, caching hierarchies, and zero-downtime rolling updates.',
    skillsCovered: ['Microservices', 'Distributed Caching', 'Event Sourcing', 'Fault Tolerance'],
    imageUrl: '/src/assets/images/seminar_cloud_summit_1787577307585.jpg',
    type: 'seminar'
  },
  {
    id: 'k8s-cka',
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation (CNCF)',
    issueDate: 'Issued Oct 2023 · Active',
    credentialId: 'CKA-CNCF-948123',
    credentialUrl: 'https://cncf.io/certification/cka',
    status: 'Verified',
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
    description: 'Hands-on performance-based exam demonstrating container scheduling, cluster security, ingress configuration, and storage management.',
    skillsCovered: ['Kubernetes Clusters', 'Ingress & TLS', 'Storage Volumes', 'Cluster Troubleshooting'],
    imageUrl: '/src/assets/images/cert_k8s_cncf_1787577322516.jpg',
    type: 'certification'
  },
  {
    id: 'fullstack-symp',
    title: 'Full-Stack Distributed Engineering Symposium',
    issuer: 'Modern Web & Backend Guild · Hands-on Seminar',
    issueDate: 'Conducted Sep 2023 · Completed',
    credentialId: 'SEM-FS-2023-718',
    credentialUrl: 'https://example.com/seminar/fullstack-2023',
    status: 'Verified',
    badgeColor: 'bg-pink-50 text-pink-700 border-pink-200',
    description: 'Interactive seminar focusing on type-safe full-stack architectures, tRPC/REST contracts, Postgres connection pooling, and edge deployments.',
    skillsCovered: ['Type-Safe APIs', 'Postgres Optimization', 'Next.js/React 19', 'Edge Computing'],
    imageUrl: '/src/assets/images/seminar_fullstack_symp_1787577338160.jpg',
    type: 'seminar'
  },
  {
    id: 'ai-agents-master',
    title: 'Autonomous AI Agents & Multi-Modal Systems Masterclass',
    issuer: 'Deep Learning Institute & Tech Guild',
    issueDate: 'Issued Dec 2024 · Verified',
    credentialId: 'DLI-AGENTS-88419',
    credentialUrl: 'https://example.com/certificates/ai-agents-2024',
    status: 'Verified',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    description: 'Advanced mastery in function-calling LLM networks, tool-augmented reasoning engines, memory vectors, and multi-agent coordination.',
    skillsCovered: ['Autonomous Agents', 'Function Calling', 'Multi-Modal AI', 'Vector Memory'],
    imageUrl: '/src/assets/images/cert_ai_agents_master_1787577353752.jpg',
    type: 'seminar'
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    label: 'github.com/example-username',
    url: 'https://github.com/example-username',
    icon: 'Github',
    actionType: 'link'
  },
  {
    platform: 'LinkedIn',
    label: 'linkedin.com/in/example-username',
    url: 'https://linkedin.com/in/example-username',
    icon: 'Linkedin',
    actionType: 'link'
  },
  {
    platform: 'Email',
    label: 'alex.rivera.dev@example.com',
    url: 'mailto:alex.rivera.dev@example.com',
    icon: 'Mail',
    actionType: 'email'
  }
];

export const experienceData = [
  {
    period: '2022 — Present',
    role: 'Senior Full-Stack & AI Engineer',
    company: 'NextGen Solutions Inc.',
    location: 'San Francisco, CA (Remote)',
    description: 'Lead engineer driving the design and implementation of modern web platforms with integrated AI features, robust REST services, and high-reliability data persistence.',
    highlights: [
      'Architected and delivered end-to-end full-stack SaaS tools processing 50k+ daily queries.',
      'Designed and deployed LLM-powered extraction workflows decreasing operational review times by 80%.',
      'Refactored legacy Java Spring Boot services into lightweight, Dockerized microservices with zero downtime.'
    ],
    tech: ['React', 'TypeScript', 'Python', 'FastAPI', 'Spring Boot', 'PostgreSQL', 'Docker', 'Gemini API']
  },
  {
    period: '2020 — 2022',
    role: 'Full-Stack Software Developer',
    company: 'Apex Digital Systems',
    location: 'Austin, TX',
    description: 'Developed responsive client-side web applications and secure backend microservices for enterprise business customers.',
    highlights: [
      'Built reusable, accessible React component design systems adopting modern TypeScript patterns.',
      'Implemented transactional database schemas, optimized SQL query plans, and integrated Redis caching.',
      'Collaborated closely with cross-functional teams, QA, and product leads to ship quarterly releases on time.'
    ],
    tech: ['React', 'Vue', 'TypeScript', 'Node.js', 'Java', 'MySQL', 'REST APIs', 'Git']
  }
];
