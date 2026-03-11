import type { ReactNode } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { cn } from '@/lib/utils';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  tone?: 'dark' | 'light';
  aside?: ReactNode;
};

const PageHero = ({ eyebrow, title, description, tone = 'light', aside }: PageHeroProps) => {
  const isDark = tone === 'dark';
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, reduceMotion ? 0 : -36]);

  return (
    <section
      className={cn(
        'relative overflow-hidden pt-40 md:pt-48 lg:pt-56 pb-24 md:pb-32',
        isDark ? 'bg-corporate-950 text-white' : 'bg-transparent text-corporate-900'
      )}
    >
      {isDark ? (
        <>
          <motion.div
            className="absolute inset-0 b2b-gradient-dark"
            style={{ y }}
          />
          <motion.div className="absolute inset-0 grid-bg-dark opacity-40 mix-blend-overlay" aria-hidden="true" style={{ y }} />
          <div className="absolute inset-0 bg-gradient-to-t from-corporate-950 via-transparent to-transparent" />

          <div className="absolute top-0 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-brand-500/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 translate-y-1/3 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />
        </>
      ) : null}

      <div className="shell relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-6">
            <ScrollReveal>
              <span className={isDark ? 'section-eyebrow-dark' : 'section-eyebrow'}>{eyebrow}</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className={cn('mt-6 max-w-4xl text-balance text-4xl font-bold tracking-tight leading-[1.1] md:text-6xl', isDark ? 'text-white' : 'text-corporate-900')}>
                {title}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className={cn('mt-6 max-w-2xl text-lg leading-relaxed md:text-xl', isDark ? 'text-corporate-300' : 'text-corporate-600')}>
                {description}
              </p>
            </ScrollReveal>
          </div>
          {aside ? <ScrollReveal delay={0.3} direction="right">{aside}</ScrollReveal> : null}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
