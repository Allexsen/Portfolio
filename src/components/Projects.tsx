import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Real-Time STT",
    description: "Real-time Speech-to-Text transcription using Python, Gradio, and Sherpa-ONNX pretrained model.",
    tags: ["Python", "Gradio", "Sherpa-ONNX"],
    links: {
      github: "https://github.com/Allexsen/Real-TimeSTT"
    }
  },
  {
    title: "AnonyMessage (In Development)",
    description: "A web-based real-time messaging application with zero tracking and logging, built using Go, Gin, Websockets, & JS.",
    tags: ["Go", "Gin", "Websockets", "RESTful API"],
    links: {
      github: "https://github.com/Allexsen/AnonyMessage",
    }
  },
  {
    title: "Game of Life++",
    description: "Fun personal project implementing Conway's Game of Life with advanced features like multiple cell types, rulesets, and user interaction.",
    tags: ["C++", "SFML", "OOP", "CMake"],
    links: {
      github: "https://github.com/Allexsen/GoL-PlusPlus"
    }
  },
  {
    title: "Pathfinder Visualizer (No repo)",
    description: "Desktop app visualizing various pathfinding algorithms like A*, Dijkstra, BFS, and DFS using C#",
    tags: ["C#", "Algorithms"],
    links: {
      github: "#"
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Selection of technical projects">Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
