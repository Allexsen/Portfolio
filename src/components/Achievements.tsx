import SectionTitle from "./SectionTitle";
import { Award, Trophy, Target, Zap } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Competitive Programming",
    description: "Expert on Codeforces, top 300 (5%) of Google Kickstart farewell round"
  },
  {
    icon: Award,
    title: "Programming Competitions",
    description: "2x ICPC World's Semifinalist, numerous top 1% placings in national contests"
  },
  {
    icon: Target,
    title: "Freelance Excellence",
    description: "Rising Talent on Upwork during my activity period"
  },
  {
    icon: Zap,
    title: "Technical Leadership",
    description: "Turned complex abstract problems into solutions for diverse people"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Key accomplishments and milestones">Achievements</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div 
                key={index} 
                className="flex gap-4 p-6 rounded-xl bg-gradient-to-br from-card to-background-secondary border border-card-border hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
