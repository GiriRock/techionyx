import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

interface ScrollRevealProps {
    children: React.ReactNode;
    direction?: Direction;
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
}

export const ScrollReveal = ({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.6,
    className = '',
    once = true,
}: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: '-10%' });

    const getAxisOffset = (dir: Direction) => {
        switch (dir) {
            case 'up':
                return { y: 40, x: 0 };
            case 'down':
                return { y: -40, x: 0 };
            case 'left':
                return { x: 40, y: 0 };
            case 'right':
                return { x: -40, y: 0 };
            default:
                return { y: 40, x: 0 };
        }
    };

    const offset = getAxisOffset(direction);

    const variants: Variants = {
        hidden: {
            opacity: 0,
            x: offset.x,
            y: offset.y,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for a polished feel
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className={className}
        >
            {children}
        </motion.div>
    );
};
