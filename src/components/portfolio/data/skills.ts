import { Skill } from '@/types/index';

export const skills: Skill[] = [
  {
    title: "Architecture & System Design",
    iconType: "layers",
    items: [
      "Event-driven architecture (AWS EventBridge, SQS, async pipelines)",
      "Microservice separation and domain boundary design",
      "Multi-tenant scalability and entity resolution patterns",
      "Fault-tolerant systems (container isolation, async runtime hardening)",
      "Observability and operational discipline (logging, tracing, incident response)"
    ]
  },
  {
    title: "AI & Intelligence Systems",
    iconType: "cpu",
    items: [
      "RAG pipeline design (ingestion, chunking, embedding, retrieval)",
      "Vector databases and semantic search (Qdrant, multi-query retrieval)",
      "OpenAI integrations for embeddings and intelligence extraction",
      "Content processing pipelines (podcast RSS, social media ingestion)",
      "AI-powered intelligence generation and automated analysis"
    ]
  },
  {
    title: "Backend & Data Systems",
    iconType: "server",
    items: [
      "Async Python (FastAPI, SQLAlchemy, asyncio)",
      "Node.js & Express.js (RESTful APIs, middleware architecture)",
      "Database migrations and schema evolution (Alembic)",
      "API versioning, performance tuning, and caching strategies",
      "Security best practices (OWASP, JWT, RBAC, encryption)"
    ]
  },
  {
    title: "Database Architecture",
    iconType: "database",
    items: [
      "PostgreSQL (complex schema design, query optimization, indexing)",
      "MongoDB (document modeling, aggregation pipelines)",
      "Vector databases (Qdrant — embedding storage, semantic retrieval)",
      "Data relationship patterns and migration strategies",
      "Database session isolation and connection pool management"
    ]
  },
  {
    title: "Cloud & DevOps",
    iconType: "cloud",
    items: [
      "AWS (ECS, EventBridge, Lambda, Secrets Manager, S3, ECR, SQS, Textract)",
      "Infrastructure as Code (Terraform, CloudFormation)",
      "CI/CD pipelines and deployment automation (GitHub Actions)",
      "Container orchestration and multi-container deployments (Docker, ECS)",
      "Environment management (staging/production phasing, secrets rotation)"
    ]
  },
  {
    title: "Frontend Development",
    iconType: "code",
    items: [
      "React & Next.js (SSR, SPA, component architecture)",
      "TypeScript and modern JavaScript patterns",
      "State management (Redux, Context)",
      "Custom data visualization and dashboard design",
      "Responsive design and accessibility (WCAG compliance)"
    ]
  },
  {
    title: "Engineering Leadership",
    iconType: "users",
    items: [
      "Technical direction and architecture decision-making",
      "Team leadership, mentoring, and code review culture",
      "Scope management and priority sequencing",
      "Cross-functional collaboration with business stakeholders",
      "Structured project tracking across concurrent workstreams"
    ]
  }
];
