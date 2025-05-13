import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
    children,
    className = '',
    delay = 0,
    direction = 'up',
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const getDirection = () => {
        switch (direction) {
            case 'up':
                return { y: 50 };
            case 'down':
                return { y: -50 };
            case 'left':
                return { x: 50 };
            case 'right':
                return { x: -50 };
            default:
                return { y: 50 };
        }
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, ...getDirection() }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...getDirection() }}
            transition={{
                duration: 0.5,
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollAnimation; 