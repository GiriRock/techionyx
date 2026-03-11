import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { ArrowUpRight, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: LucideIcon;
  eyebrow?: string;
  items?: string[];
  tone?: 'light' | 'dark';
  href?: string;
  ctaLabel?: string;
  className?: string;
  children?: ReactNode;
};

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  eyebrow,
  items,
  tone = 'light',
  href,
  ctaLabel = 'Explore more',
  className,
  children,
}: FeatureCardProps) => {
  const isDark = tone === 'dark';

  return (
    <article
      className={cn(
        'group relative h-full overflow-hidden rounded-[30px] border p-6 transition-all duration-500 hover:-translate-y-1 sm:p-7',
        isDark
          ? 'border-white/10 bg-slate-950/65 shadow-[0_30px_100px_rgba(2,6,23,0.36)]'
          : 'border-white/70 bg-white/80 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl',
        className
      )}
    >
      <div
        className={cn(
          'absolute inset-x-6 top-0 h-px bg-gradient-to-r',
          isDark ? 'from-transparent via-sky-300/60 to-transparent' : 'from-transparent via-sky-400/60 to-transparent'
        )}
        aria-hidden="true"
      />

      {eyebrow ? (
        <p className={cn('text-xs font-semibold uppercase tracking-[0.24em]', isDark ? 'text-sky-200/80' : 'text-slate-400')}>
          {eyebrow}
        </p>
      ) : null}

      {Icon ? (
        <div
          className={cn(
            'mt-4 flex size-14 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-105',
            isDark ? 'bg-white/10 text-sky-200' : 'bg-slate-950 text-sky-300 shadow-[0_18px_40px_rgba(15,23,42,0.18)]'
          )}
        >
          <Icon className="size-6" />
        </div>
      ) : null}

      <h3 className={cn('mt-6 text-2xl font-semibold leading-tight', isDark ? 'text-white' : 'text-slate-950')}>
        {title}
      </h3>

      <p className={cn('mt-3 text-sm leading-7 sm:text-base', isDark ? 'text-slate-300' : 'text-slate-600')}>
        {description}
      </p>

      {items?.length ? (
        <ul className="mt-6 flex flex-wrap gap-3">
          {items.map((item) => (
            <li
              key={item}
              className={cn(
                'rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em]',
                isDark ? 'border-white/10 bg-white/5 text-slate-200' : 'border-slate-200 bg-slate-50 text-slate-600'
              )}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      {children ? <div className="mt-6">{children}</div> : null}

      {href ? (
        <Link
          to={href}
          className={cn(
            'focus-ring mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors',
            isDark ? 'text-sky-200 hover:text-white' : 'text-sky-700 hover:text-slate-950'
          )}
        >
          {ctaLabel}
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      ) : null}
    </article>
  );
};

export default FeatureCard;
