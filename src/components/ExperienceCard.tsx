
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ExperienceCardProps {
  title: string;
  period: string;
  description: string;
  className?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
  title, 
  period, 
  description, 
  className 
}) => {
  return (
    <Card className={cn(
      "bg-muted/40 backdrop-blur-md border-muted hover:border-gold/40 transition-all duration-300",
      className
    )}>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gold">{title}</h3>
          <span className="text-sm text-white/60">{period}</span>
        </div>
        <p className="text-white/80">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
