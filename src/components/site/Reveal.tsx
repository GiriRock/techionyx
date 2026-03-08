import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { useReveal } from '@/hooks/use-reveal';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
};

const directionMap = {
  up: undefined,
  left: 'left',
  right: 'right',
} as const;

const Reveal = ({ children, className, delay = 0, direction = 'up' }: RevealProps) => {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      data-direction={directionMap[direction]}
      className={cn('reveal', isVisible && 'is-visible', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
