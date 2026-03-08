import { useEffect, useMemo, useState } from 'react';

import { useReveal } from '@/hooks/use-reveal';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

type CountUpProps = {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
};

const CountUp = ({
  end,
  duration = 1400,
  prefix = '',
  suffix = '',
  decimals = 0,
  className,
}: CountUpProps) => {
  const { ref, isVisible } = useReveal({ threshold: 0.4 });
  const reducedMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isVisible || reducedMotion) {
      return;
    }

    let frame = 0;
    const start = performance.now();

    const updateValue = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(end * eased);

      if (progress < 1) {
        frame = window.requestAnimationFrame(updateValue);
      }
    };

    frame = window.requestAnimationFrame(updateValue);

    return () => window.cancelAnimationFrame(frame);
  }, [duration, end, isVisible, reducedMotion]);

  const formattedValue = useMemo(() => {
    const currentValue = reducedMotion || value >= end ? end : value;

    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(currentValue);
  }, [decimals, end, reducedMotion, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
};

export default CountUp;
