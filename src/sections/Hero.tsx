import { useEffect, useState } from 'react';

import CountUp from '@/components/site/CountUp';
import Reveal from '@/components/site/Reveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, ChevronDown, Play, ShieldCheck, Sparkles } from 'lucide-react';

import { useReducedMotion } from '@/hooks/use-reduced-motion';

const trustSignals = ['Cloud-native delivery', 'Security-first architecture', 'Senior product squads'];

const Hero = () => {
  const reducedMotion = useReducedMotion();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const handleScroll = () => setOffset(window.scrollY);
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [reducedMotion]);

  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 pb-16 pt-32 text-white md:pb-24 md:pt-40">
      <div className="absolute inset-0 grid-overlay opacity-20" aria-hidden="true" />
      <div
        className="hero-glow left-[10%] top-28 h-56 w-56 bg-sky-500/40 md:h-80 md:w-80"
        style={{ transform: reducedMotion ? undefined : `translate3d(0, ${offset * 0.12}px, 0)` }}
      />
      <div
        className="hero-glow bottom-10 right-[8%] h-64 w-64 bg-cyan-300/20 md:h-96 md:w-96"
        style={{ transform: reducedMotion ? undefined : `translate3d(0, ${offset * -0.08}px, 0)` }}
      />

      <div className="shell relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <Reveal>
              <span className="section-eyebrow">
                <Sparkles className="size-3.5" />
                Enterprise software, delivered with precision
              </span>
            </Reveal>

            <Reveal delay={80}>
              <div className="space-y-6">
                <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white md:text-6xl lg:text-7xl">
                  Secure, scalable digital products for teams that need <span className="text-gradient">real delivery confidence</span>.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                  Techionyx helps ambitious companies turn product ideas, internal platforms, and complex integrations into polished software systems that move the business forward.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full bg-sky-500 px-6 text-white shadow-[0_18px_45px_rgba(14,165,233,0.32)] hover:-translate-y-0.5 hover:bg-sky-400"
                >
                  <a href="#contact">
                    Start your project
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-white shadow-none hover:bg-white/10 hover:text-white"
                >
                  <a href="#services">
                    <Play className="size-4" />
                    Explore capabilities
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="flex flex-wrap gap-3">
                {trustSignals.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                  >
                    <CheckCircle2 className="size-4 text-sky-300" />
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={320}>
              <dl className="grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <dt className="text-sm text-slate-300">Delivery success</dt>
                  <dd className="mt-2 text-3xl font-semibold text-white">
                    <CountUp end={96} suffix="%" />
                  </dd>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <dt className="text-sm text-slate-300">Senior practitioners</dt>
                  <dd className="mt-2 text-3xl font-semibold text-white">
                    <CountUp end={12} suffix="+" />
                  </dd>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <dt className="text-sm text-slate-300">Time to first release</dt>
                  <dd className="mt-2 text-3xl font-semibold text-white">
                    <CountUp end={6} suffix=" wks" />
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={180} direction="right">
            <div className="relative mx-auto max-w-xl">
              <div className="panel-dark relative overflow-hidden p-4 sm:p-6">
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent" />
                <div className="rounded-[24px] border border-white/10 bg-slate-900/80 p-5">
                  <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <div>
                      <p className="text-sm font-medium text-white">Platform modernization program</p>
                      <p className="mt-1 text-sm text-slate-400">Portfolio dashboard</p>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
                      <ShieldCheck className="size-3.5" />
                      Production ready
                    </span>
                  </div>

                  <div className="grid gap-4 py-5 md:grid-cols-[1.1fr_0.9fr]">
                    <div className="space-y-4 rounded-[22px] border border-white/10 bg-slate-950/70 p-4">
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
                        <span>Release trajectory</span>
                        <span>Q3</span>
                      </div>
                      <div className="space-y-3">
                        {[72, 84, 92, 100].map((value, index) => (
                          <div key={value} className="space-y-2">
                            <div className="flex justify-between text-sm text-slate-300">
                              <span>{['Architecture', 'UX systems', 'Integration', 'Launch readiness'][index]}</span>
                              <span>{value}%</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/5">
                              <div
                                className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 shadow-[0_8px_20px_rgba(34,211,238,0.25)]"
                                style={{ width: `${value}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Sprint health</p>
                        <p className="mt-3 text-4xl font-semibold text-white">4.9/5</p>
                        <p className="mt-2 text-sm text-slate-400">Stakeholder confidence across delivery, communication, and quality.</p>
                      </div>
                      <div className="rounded-[22px] border border-white/10 bg-gradient-to-br from-sky-500/20 to-cyan-400/10 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-sky-100/70">Engagement model</p>
                        <ul className="mt-3 space-y-3 text-sm text-slate-100">
                          <li className="flex items-center justify-between">
                            <span>Discovery and alignment</span>
                            <span className="text-sky-200">Week 1</span>
                          </li>
                          <li className="flex items-center justify-between">
                            <span>Iterative execution</span>
                            <span className="text-sky-200">Weekly</span>
                          </li>
                          <li className="flex items-center justify-between">
                            <span>Leadership reporting</span>
                            <span className="text-sky-200">Real-time</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 border-t border-white/10 pt-4 sm:grid-cols-3">
                    {[
                      ['Secure APIs', 'Zero-trust patterns and observability built in.'],
                      ['Composable frontends', 'High-performance interfaces with clear UX systems.'],
                      ['Workflow integrations', 'Payments, ERP, CRM, and internal data pipelines.'],
                    ].map(([title, copy], index) => (
                      <div
                        key={title}
                        className={`rounded-[20px] border border-white/10 bg-white/5 p-4 ${index === 1 ? 'animate-float' : ''}`}
                      >
                        <p className="font-semibold text-white">{title}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 left-5 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-slate-100 shadow-[0_18px_50px_rgba(2,6,23,0.35)] backdrop-blur-xl sm:left-auto sm:right-8">
                Strategy, design, engineering, and integration delivery in one focused partner.
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={380}>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Trusted for complex delivery</p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                We help product teams, operations leaders, and founders modernize critical workflows without sacrificing reliability, clarity, or speed.
              </p>
            </div>
            <a href="#about" className="focus-ring inline-flex items-center gap-2 text-sm font-medium text-sky-300 transition hover:text-sky-200">
              Scroll to explore
              <ChevronDown className="size-4 animate-pulse-soft" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
