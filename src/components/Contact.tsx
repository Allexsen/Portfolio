import SectionTitle from "./SectionTitle";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-background-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <SectionTitle subtitle="Let's connect and build something great">
          Get In Touch
        </SectionTitle>
        
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, or potential collaborations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="group" asChild>
            <a href="mailto:asvanidze12@gmail.com">
              <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              asvanidze12@gmail.com
            </a>
          </Button>
          
          <Button size="lg" variant="outline" className="group" asChild>
            <a href="https://www.linkedin.com/in/aleksi-svanidze/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              LinkedIn
            </a>
          </Button>
          
          <Button size="lg" variant="outline" className="group" asChild>
            <a href="https://github.com/Allexsen" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
