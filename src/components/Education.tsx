import SectionTitle from "./SectionTitle";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Warsaw University of Technology",
    year: "2023-2025 (DNA)",
    focus: "Maths, Algorithms, Data Structures"
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Caucasus University",
    year: "2021-2028 (Expected)",
    focus: "Software Engineering"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Education</SectionTitle>
        <div className="space-y-6 max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="flex gap-4 p-6 bg-card border border-card-border rounded-xl hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {edu.degree}
                  </h3>
                  <span className="text-sm text-muted-foreground">{edu.year}</span>
                </div>
                <p className="text-primary font-semibold mb-1">{edu.school}</p>
                <p className="text-sm text-muted-foreground">Focus: {edu.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
