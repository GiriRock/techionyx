import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
};

const SectionHeading = ({ eyebrow, title, description, align = 'left', light = false, className }: SectionHeadingProps) => {
  return (
    <ScrollReveal>
      <header className={cn('space-y-6', align === 'center' && 'mx-auto max-w-3xl text-center', className)}>
        <span className={cn(light ? 'section-eyebrow-dark' : 'section-eyebrow')}>{eyebrow}</span>
        <h2 className={cn(light ? 'section-title-dark' : 'section-title')}>{title}</h2>
        {description ? <p className={cn(light ? 'section-copy-dark' : 'section-copy', align === 'center' && 'mx-auto max-w-2xl')}>{description}</p> : null}
      </header>
    </ScrollReveal>
  );
};

export default SectionHeading;
