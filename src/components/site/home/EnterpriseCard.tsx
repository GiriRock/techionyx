import type { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

type EnterpriseCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets?: string[];
  tone?: 'light' | 'dark';
  className?: string;
};

const EnterpriseCard = ({ icon: Icon, title, description, bullets, tone = 'light', className }: EnterpriseCardProps) => {
  return (
    <article
      className={cn(
        'group flex flex-col',
        tone === 'light' ? 'premium-card' : 'premium-card-dark',
        className
      )}
    >
      <div className={cn(
        "inline-flex size-14 items-center justify-center rounded-2xl shadow-sm mb-6 transition-colors duration-300",
        tone === 'light' ? "bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white" : "bg-white/10 text-brand-400 group-hover:bg-brand-500 group-hover:text-white"
      )}>
        <Icon className="size-6" aria-hidden="true" />
      </div>

      <h3 className={cn('text-xl font-bold tracking-tight', tone === 'light' ? 'text-corporate-900' : 'text-white')}>{title}</h3>
      <p className={cn('mt-4 text-base leading-relaxed flex-grow', tone === 'light' ? 'text-corporate-600' : 'text-corporate-300')}>{description}</p>

      {bullets?.length ? (
        <ul className={cn('mt-6 space-y-3 pt-6 border-t', tone === 'light' ? 'border-corporate-100 text-corporate-700' : 'border-white/10 text-corporate-300')}>
          {bullets.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className={cn("mt-1.5 size-1.5 shrink-0 rounded-full", tone === 'light' ? "bg-brand-500" : "bg-brand-400")} aria-hidden="true" />
              <span className="text-sm font-medium">{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
};

export default EnterpriseCard;
