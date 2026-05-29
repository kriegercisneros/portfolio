"use client";
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/seperator';
import { Layers, Cpu, Database, Globe, Users, GitBranch } from 'lucide-react';

const subsystems = [
  {
    title: "Source Pipeline",
    description: "Multi-source content ingestion system pulling from podcast RSS feeds and X (Twitter) with automated extraction and processing workflows.",
    icon: Layers,
  },
  {
    title: "Intelligence Layer",
    description: "AI-powered processing pipeline handling content extraction, chunking, intelligence generation, embedding creation, and vector indexing.",
    icon: Cpu,
  },
  {
    title: "Data Layer",
    description: "PostgreSQL and Qdrant-backed storage with Alembic migrations, entity resolution, and vector indexing for semantic retrieval.",
    icon: Database,
  },
  {
    title: "Consumer APIs",
    description: "Versioned retrieval endpoints with multi-query vector search, serving intelligence to downstream consumers and external integrations.",
    icon: Globe,
  },
];

const architectureDecisions = [
  "Designed the ENTITY RESOLUTION SYSTEM as the backbone connecting all microservices to canonical entities, enabling a single dossier to serve 400+ clients",
  "Architected microservice separation strategy across Source Pipeline, Intelligence Layer, App Server, and CRM Layer",
  "Built for multi-tenant scalability — external systems point TO WhaleHawk, not the other way around",
  "Engineered dual-container ECS deployment with async runtime isolation to prevent cross-service corruption",
];

const techStack = [
  "Python", "FastAPI", "SQLAlchemy", "asyncio",
  "AWS ECS", "EventBridge", "Secrets Manager",
  "PostgreSQL", "Qdrant", "Alembic",
  "OpenAI", "CI/CD",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const WhaleHawkCaseStudy = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Section Header */}
      <motion.div variants={item} className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <a href="https://app.whalehawk.com" target="_blank" rel="noopener noreferrer" className="text-3xl font-bold text-primary font-serif hover:text-accent transition-colors">WhaleHawk ↗</a>
          <Badge variant="secondary" className="bg-accent text-white text-xs">
            Technical Founder & Engineering Lead
          </Badge>
        </div>
        <p className="text-lg text-primary-light">
          Real-Time Intelligence & Analytics Platform
        </p>
      </motion.div>

      {/* Overview */}
      <motion.div variants={item} className="mb-8">
        <p className="text-base text-gray-700 leading-relaxed max-w-4xl">
          Architected and built WhaleHawk&apos;s core infrastructure from the ground up — the Source Pipeline,
          the Intelligence Layer, the App Server, the CRM Layer, and the consumer-facing APIs
          that serve it all. Designed a multi-source content ingestion system that processes content through
          extraction, chunking, AI-powered intelligence generation, embedding, and vector indexing,
          delivering it through versioned retrieval endpoints with multi-query vector search.
        </p>
      </motion.div>

      {/* Architecture Subsystems */}
      <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {subsystems.map((subsystem) => {
          const Icon = subsystem.icon;
          return (
            <Card key={subsystem.title} className="border border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg font-serif">
                  <Icon className="h-5 w-5 text-accent" />
                  {subsystem.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{subsystem.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </motion.div>

      {/* Architecture Decisions */}
      <motion.div variants={item} className="mb-8">
        <Card className="border border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg font-serif">
              <GitBranch className="h-5 w-5 text-accent" />
              Architecture Decisions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {architectureDecisions.map((decision, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-accent mt-1 shrink-0">&#8226;</span>
                  {decision}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Tech Stack */}
      <motion.div variants={item} className="mb-8">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Stack</h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="outline" className="text-sm">
              {tech}
            </Badge>
          ))}
        </div>
      </motion.div>

      <Separator className="mb-8" />

      {/* Leadership */}
      <motion.div variants={item}>
        <Card className="border border-gray-200 bg-gray-50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-primary mb-1">Engineering Leadership</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Leads the engineering team and sets technical direction. Works directly with co-founder
                  on translating business strategy into technical architecture. Manages scope, priorities,
                  and sequences work deliberately — phasing migrations so staging proves out before production,
                  keeping working systems intact until replacements are battle-tested.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default WhaleHawkCaseStudy;
