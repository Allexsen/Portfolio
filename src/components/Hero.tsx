import { Button } from "@/components/ui/button";
import { Github, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
          <span className="text-foreground">Aleksi Svanidze</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary font-semibold">
          Backend Engineer & Algorithm Developer — Go | C++ | Python
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          I turn problems into solutions in a wide variety of domains.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          {/* Resume button: renders as an anchor so it opens /public/resume.pdf in a new tab */}
          <Button asChild size="lg" className="group">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center whitespace-nowrap">
              <FileText className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              View Resume (PDF)
            </a>
          </Button>

          {/* GitHub button: use asChild so Button renders the anchor directly (valid HTML) */}
          <Button asChild size="lg" variant="outline" className="group px-6 min-w-[10rem]">
            <a
              href="https://github.com/Allexsen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center whitespace-nowrap"
            >
              <Github className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
