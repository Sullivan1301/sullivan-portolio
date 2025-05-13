import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    placeholder?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
    src,
    alt,
    className = '',
    placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlZWUiLz48L3N2Zz4=',
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <AnimatePresence>
                {!isLoaded && !error && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-muted animate-pulse"
                    >
                        <img
                            src={placeholder}
                            alt="Loading..."
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.img
                src={src}
                alt={alt}
                className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                onLoad={() => setIsLoaded(true)}
                onError={() => setError(true)}
                loading="lazy"
            />
        </div>
    );
};

export default LazyImage; 