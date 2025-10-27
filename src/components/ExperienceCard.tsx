import { Briefcase } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  title: string;
  date: string;
  description?: string;
  highlights?: string[];
}

const ExperienceCard = ({ company, title, date, description, highlights }: ExperienceCardProps) => {
  return (
    <div className="group relative bg-card border border-card-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
          <Briefcase className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
            <div>
              <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
              <p className="text-primary font-semibold">{company}</p>
            </div>
            <span className="text-sm text-muted-foreground">{date}</span>
          </div>
          
          {description && (
            <p className="text-muted-foreground mb-3">{description}</p>
          )}
          
          {highlights && highlights.length > 0 && (
            <ul className="space-y-1">
              {highlights.map((highlight, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
