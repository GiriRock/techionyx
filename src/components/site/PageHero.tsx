import type { ReactNode } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import Reveal from '@/components/site/Reveal';
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
        'relative overflow-hidden pb-16 pt-32 md:pb-20 md:pt-40',
        isDark ? 'bg-slate-950 text-white' : 'bg-transparent text-slate-950'
      )}
    >
      {isDark ? (
        <motion.div className="absolute inset-0 grid-overlay opacity-15" aria-hidden="true" style={{ y }} />
      ) : null}
      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-6">
            <Reveal>
              <span className={isDark ? 'section-eyebrow' : 'section-eyebrow-light'}>{eyebrow}</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className={cn('max-w-4xl text-balance text-4xl font-semibold leading-tight md:text-6xl', isDark ? 'text-white' : 'text-slate-950')}>
                {title}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className={cn('max-w-2xl text-base leading-8 md:text-lg', isDark ? 'text-slate-300' : 'text-slate-600')}>
                {description}
              </p>
            </Reveal>
          </div>
          {aside ? <Reveal delay={220} direction="right">{aside}</Reveal> : null}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
