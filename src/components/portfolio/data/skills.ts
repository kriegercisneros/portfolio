import { Skill } from '@/types/index';

export const skills: Skill[] = [
  {
    title: "Architecture & System Design",
    iconType: "layers",
    items: [
      "Distributed system fundamentals (event-driven, messaging queues, real-time WebSockets)",
      "Scalability & concurrency (load balancing, parallel processing, auto-scaling)",
      "Design patterns & best practices (12-Factor App, CQRS, hexagonal, data structures & algorithms)",
      "Security & reliability (zero-trust networks, fault-tolerant design)",
      "Observability & cost optimization (logging, tracing, metrics, resource management)"
    ]
  },
  {
    title: "Database Architecture",
    iconType: "database",
    items: [
      "Complex schema design and modeling",
      "Query optimization and indexing",
      "Data relationship patterns (1:1, 1:M, M:N)",
      "SQL & NoSQL (PostgreSQL, MongoDB)", 
      "Security & compliance (encryption, GDPR, HIPAA, PCI)"
    ]
  },
    {
        title: "Client Side Development",
        iconType: "code",
        items: [
          "React & Next.js (SSR, SPA, design systems)",
          "TypeScript and modern JavaScript patterns",
          "State management (Redux and Context)",
          "Performance optimization (lazy loading, code splitting)",
          "Component-driven development and design systems", 
          "Integration & E2E testing (Jest, Cypress, Playwright)"
        ]
      },
      {
        title: "Server Side Development",
        iconType: "server",
        items: [
          "Node.js & Express.js (RESTful and GraphQL APIs)",
          "Microservices architecture & containerization (Docker/Kubernetes)",
          "Security best practices (OWASP, JWT, encryption)",
          "API performance tuning (caching, load balancing)",
          "Server-side testing (Mocha, Chai)"
        ]
      },
    {
      title: "Cloud & DevOps",
      iconType: "cloud",
      items: [
        "Multi-cloud & serverless solutions (AWS Lambda, GCP, Azure)",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "CI/CD pipelines & advanced deployments (GitHub Actions, Jenkins, blue-green, canary)",
        "Container orchestration (Kubernetes)", 
        "Feature flags & observability (LaunchDarkly, Prometheus, Grafana)"
      ]
    },
    {
      title: "UI/UX Development",
      iconType: "palette",
      items: [
        "Human-centered design & user flows",
        "Responsive/mobile-first design",
        "Design system architecture & style guides",
        "Accessibility best practices (WCAG compliance)",
        "Collaboration with design teams (Figma, Sketch)"
      ]
    },
    {
      title: "Mobile Development",
      iconType: "smartphone",
      items: [
        "Mobile-first design approach",
        "Cross-platform frameworks (React Native)",
        "Native feature integration (Push notifications, camera, etc.)",
        "Performance optimization & monitoring (profiling, analytics)",
        "Offline-first capabilities (local caching, background sync)"
      ]
    }, 
    {
      title:"Collaboration & Agile Practices", 
      iconType:"users", 
      items:[
        "Agile/Scrum workflows (sprints, retrospectives)",
        "Git-flow & code review best practices",
        "Effective communication & stakeholder management",
        "Pair programming & knowledge sharing", 
        "Cross-functional collaboration (product, QA, UX)"
      ],
    }
  ];