import { cn } from '@/lib/utils';

import Reveal from './Reveal';

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
  invert?: boolean;
};

const SectionIntro = ({
  eyebrow,
  title,
  description,
  align = 'left',
  invert = false,
}: SectionIntroProps) => {
  const centered = align === 'center';

  return (
    <Reveal className={cn('space-y-5', centered && 'mx-auto text-center')}>
      <span className={invert ? 'section-eyebrow' : 'section-eyebrow-light'}>{eyebrow}</span>
      <div className={cn('space-y-4', centered && 'mx-auto max-w-3xl')}>
        <h2 className={invert ? 'section-title-dark' : 'section-title'}>{title}</h2>
        <p
          className={cn(
            invert ? 'section-copy text-slate-300' : 'section-copy',
            centered && 'mx-auto'
          )}
        >
          {description}
        </p>
      </div>
    </Reveal>
  );
};

export default SectionIntro;
