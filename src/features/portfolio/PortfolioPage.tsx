'use client';

import Link from 'next/link';
import Section from '@/components/layout/Section';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import StarField from '@/components/animations/StarField';
import ProjectSummaryCard from '@/features/portfolio/components/ProjectSummaryCard';
import { portfolioProjects, portfolioPageContent } from '@/constants/portfolio';

export default function PortfolioPage() {
  const { eyebrow, title, intro, emptyState, ctaTitle, ctaSubtitle } =
    portfolioPageContent;

  // Featured projects first, otherwise preserve authored order.
  const projects = [...portfolioProjects].sort(
    (a, b) => Number(b.featured ?? false) - Number(a.featured ?? false)
  );

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <Section container className="relative" background="dark" spacing="medium">
        <div className="absolute inset-0">
          <StarField />
        </div>
        <div className="max-w-3xl relative z-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-nebula-cyan mb-3">
            {eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-nebula-white/80">{intro}</p>
        </div>
      </Section>

      {/* Breadcrumbs */}
      <Section container spacing="xsmall" background="secondary" id="breadcrumb">
        <Breadcrumbs />
      </Section>

      {/* Projects */}
      <Section container background="secondary">
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <ProjectSummaryCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto text-center py-12">
            <p className="text-xl text-text-secondary mb-8">{emptyState}</p>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-nebula-violet text-white rounded-full font-semibold hover:bg-nebula-violet/90 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        )}
      </Section>

      {/* CTA */}
      <Section background="dark" className="relative overflow-hidden">
        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{ctaTitle}</h2>
          <p className="text-xl text-nebula-white/70 mb-10 max-w-2xl mx-auto">
            {ctaSubtitle}
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-5 rounded-full bg-gradient-nebula text-white font-bold text-lg shadow-glow hover:shadow-nebula-lg hover:scale-105 transition-all duration-300"
          >
            Start a Conversation
          </Link>
        </div>
      </Section>
    </div>
  );
}
