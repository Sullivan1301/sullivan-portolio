import React from 'react';
import { motion } from 'framer-motion';

interface MicroInteractionProps {
    children: React.ReactNode;
    className?: string;
    scale?: number;
    duration?: number;
    whileHover?: boolean;
    whileTap?: boolean;
}

const MicroInteraction: React.FC<MicroInteractionProps> = ({
    children,
    className = '',
    scale = 1.05,
    duration = 0.2,
    whileHover = true,
    whileTap = true,
}) => {
    const variants = {
        hover: whileHover ? { scale: scale } : {},
        tap: whileTap ? { scale: 0.95 } : {},
    };

    return (
        <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={variants}
            transition={{ duration: duration }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default MicroInteraction; 