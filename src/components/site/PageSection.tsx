import type { ReactNode } from 'react';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

type PageSectionProps = {
  children: ReactNode;
  className?: string;
};

const PageSection = ({ children, className }: PageSectionProps) => {
  return (
    <motion.section
      className={cn('section-padding', className)}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.section>
  );
};

export default PageSection;
