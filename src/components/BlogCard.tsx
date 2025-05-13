import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Calendar, Clock, Tag } from 'lucide-react';
import LazyImage from './LazyImage';

interface BlogCardProps {
    title: string;
    excerpt: string;
    image: string;
    date: string;
    readTime: string;
    tags: string[];
    slug: string;
    className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
    title,
    excerpt,
    image,
    date,
    readTime,
    tags,
    slug,
    className,
}) => {
    return (
        <Card className={cn(
            "bg-muted/40 backdrop-blur-md border-muted hover:border-gold/40 transition-all duration-300 overflow-hidden",
            className
        )}>
            <LazyImage
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 hover:text-gold transition-colors">
                    <a href={`/blog/${slug}`}>{title}</a>
                </h3>
                <p className="text-foreground/70 mb-4 line-clamp-3">{excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-foreground/60 mb-4">
                    <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{readTime}</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-gold/10 text-gold"
                        >
                            <Tag className="h-3 w-3" />
                            {tag}
                        </span>
                    ))}
                </div>
            </CardFooter>
        </Card>
    );
};

export default BlogCard; 