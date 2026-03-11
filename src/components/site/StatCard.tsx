import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type StatCardProps = {
  label: string;
  value: ReactNode;
  description?: string;
  tone?: 'light' | 'dark';
  className?: string;
};

const StatCard = ({ label, value, description, tone = 'light', className }: StatCardProps) => {
  const isDark = tone === 'dark';

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[26px] border p-5 sm:p-6',
        isDark ? 'border-white/10 bg-white/5' : 'border-slate-200/80 bg-white/80 backdrop-blur-xl',
        className
      )}
    >
      <div
        className={cn(
          'absolute inset-x-0 top-0 h-px bg-gradient-to-r',
          isDark ? 'from-transparent via-sky-300/45 to-transparent' : 'from-transparent via-sky-400/50 to-transparent'
        )}
        aria-hidden="true"
      />

      <p className={cn('text-sm font-medium', isDark ? 'text-slate-400' : 'text-slate-500')}>{label}</p>
      <div className={cn('mt-4 text-4xl font-semibold leading-none', isDark ? 'text-white' : 'text-slate-950')}>{value}</div>
      {description ? (
        <p className={cn('mt-3 text-sm leading-6', isDark ? 'text-slate-300' : 'text-slate-600')}>{description}</p>
      ) : null}
    </div>
  );
};

export default StatCard;
