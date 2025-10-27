import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  links?: {
    github?: string;
    demo?: string;
  };
}

const ProjectCard = ({ title, description, tags, links }: ProjectCardProps) => {
  return (
    <div className="group bg-card border border-card-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        {links && (
          <div className="flex gap-2">
            {links.github && (
              <a 
                href={links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {links.demo && (
              <a 
                href={links.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        )}
      </div>
      
      <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
