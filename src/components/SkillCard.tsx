
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  title: string;
  description: string;
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, className }) => {
  return (
    <Card className={cn(
      "bg-muted/40 backdrop-blur-md border-muted hover:border-gold/40 transition-all duration-300", 
      className
    )}>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-gold mb-2">{title}</h3>
        <p className="text-foreground/80">{description}</p>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
