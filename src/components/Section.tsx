
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        'section-padding min-h-screen flex flex-col justify-center',
        isVisible ? 'animate-fade-in' : 'opacity-0',
        className
      )}
    >
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
};

export default Section;
