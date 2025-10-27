import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Experience />
      <Projects />
      <Achievements />
      <Education />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 text-center border-t border-card-border">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Aleksi Svanidze
        </p>
      </footer>
    </div>
  );
};

export default Index;
