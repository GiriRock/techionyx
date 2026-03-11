import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

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
    <ScrollReveal>
      <header className={cn('space-y-6', centered && 'mx-auto max-w-3xl text-center')}>
        <span className={invert ? 'section-eyebrow' : 'section-eyebrow-dark'}>{eyebrow}</span>
        <h2 className={invert ? 'section-title' : 'section-title-dark'}>{title}</h2>
        <p
          className={cn(
            invert ? 'section-copy' : 'section-copy-dark',
            centered && 'mx-auto max-w-2xl'
          )}
        >
          {description}
        </p>
      </header>
    </ScrollReveal>
  );
};

export default SectionIntro;
