import SectionTitle from "./SectionTitle";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Lightbulb, Languages } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages",
    skills: ["Go", "C/C++", "Python", "C#", "JavaScript", "HTML/CSS"]
  },
  {
    icon: Database,
    title: "Technologies",
    skills: ["Data Structures & Algorithms", "AI/ML", "OOP", "SQL", "Git", "Backend Systems", "RESTful APIs", "Microservices"]
  },
  {
    icon: Lightbulb,
    title: "Soft Skills",
    skills: ["Communication", "Critical Thinking", "Problem Solving", "Adaptability", "Resilience"]
  },
  {
    icon: Languages,
    title: "Languages Spoken",
    skills: ["English (Fluent)", "Georgian (Native)"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Technical expertise and capabilities">Skills</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="p-6 bg-card border border-card-border rounded-xl hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="bg-secondary/50 text-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
