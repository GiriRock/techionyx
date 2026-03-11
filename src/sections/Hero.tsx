import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
import { heroHighlights, heroStats, partnerStrip } from '@/content/home';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 600], [0, reduceMotion ? 0 : -50]);
  const yFast = useTransform(scrollY, [0, 600], [0, reduceMotion ? 0 : 40]);

  return (
    <section className="relative overflow-hidden bg-corporate-950 pt-40 sm:pt-48 lg:pt-56 pb-24 sm:pb-32" aria-labelledby="hero-title">
      {/* Premium Dark Background */}
      <motion.div
        className="absolute inset-0 b2b-gradient-dark"
        style={{ y: ySlow }}
      />
      <motion.div className="absolute inset-0 grid-bg-dark opacity-40 mix-blend-overlay" aria-hidden="true" style={{ y: yFast }} />
      <div className="absolute inset-0 bg-gradient-to-t from-corporate-950 via-transparent to-transparent" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-brand-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-y-1/3 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />

      <div className="shell relative">
        <div className="grid gap-12 lg:gap-16 xl:grid-cols-[1.2fr_0.8fr] xl:items-center">

          {/* Main Hero Content */}
          <div className="relative z-10">
            <ScrollReveal direction="up" duration={0.8}>
              <span className="section-eyebrow-dark">Enterprise Technology Services</span>
              <h1 id="hero-title" className="mt-8 max-w-4xl text-balance text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]">
                Build, modernize, and scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">digital capabilities.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-corporate-300 sm:text-xl md:leading-relaxed">
                Techionyx partners with enterprise and growth-stage organizations across platform products, software engineering services, and digital transformation consulting to deliver measurable business outcomes.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link to="/contact" className="focus-ring btn-primary px-8 py-4 text-base shadow-brand-500/25">
                  Talk to our strategy team
                  <ArrowUpRight className="ml-2 size-5" />
                </Link>
                <Link
                  to="/case-studies"
                  className="focus-ring btn-secondary-dark px-8 py-4 text-base"
                >
                  Explore transformation work
                </Link>
              </div>

              <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2" staggerDelay={0.15} delayChildren={0.4}>
                {heroHighlights.map((item) => (
                  <StaggerItem key={item}>
                    <li className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 backdrop-blur-md transition-colors hover:bg-white/10">
                      <div className="flex size-6 items-center justify-center rounded-full bg-brand-500/20">
                        <Check className="size-3.5 text-brand-400" />
                      </div>
                      <span className="text-sm font-medium text-slate-200">{item}</span>
                    </li>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </ScrollReveal>
          </div>

          {/* Side Panel Stats */}
          <ScrollReveal delay={0.3} direction="left" duration={0.9}>
            <aside className="glass-panel-dark relative overflow-hidden p-8 sm:p-10" aria-label="Company delivery metrics">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

              <div className="relative z-10">
                <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
                  <span className="h-px w-8 bg-brand-400/50" />
                  Delivery Confidence
                </p>

                <div className="mt-8 grid gap-5">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:bg-white/[0.06] hover:shadow-premium">
                      <p className="text-4xl font-bold tracking-tight text-white">{stat.value}</p>
                      <p className="mt-2 text-sm font-medium text-corporate-300 group-hover:text-corporate-200">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-corporate-500">Trusted By Engineering Teams</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {partnerStrip.map((item) => (
                      <span key={item} className="rounded-lg border border-white/10 bg-corporate-900/50 px-4 py-2 text-xs font-medium text-corporate-300 backdrop-blur-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Hero;
