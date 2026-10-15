"use client"
import React from 'react';
import { Header } from '@/components/portfolio/components/header';
import { Projects } from '@/components/portfolio/components/projects';
import { About } from '@/components/portfolio/components/about';
import { WhaleHawkCaseStudy } from '@/components/portfolio/components/whaleHawkCaseStudy';
import { Footer } from '@/components/portfolio/components/footer';

const PortfolioLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div>
        <div className="container mx-auto py-12">
          <Header />
        </div>
      </div>

      <main className="container mx-auto">
        <section id="about" className="mb-16">
          <About />
        </section>

        <section id="whalehawk" className="mb-16">
          <WhaleHawkCaseStudy />
        </section>

        <section id="experience" className="mb-16">
          <Projects />
        </section>

      </main>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default PortfolioLayout;
