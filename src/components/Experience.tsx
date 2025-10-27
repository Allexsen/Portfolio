import SectionTitle from "./SectionTitle";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    company: "Huawei (Netherlands)",
    title: "Machine Learning Researcher Intern",
    date: "10/2024 - 04/2025",
    description: "Assisting in research on NLP ML models for speed, efficiency, and accuracy improvements",
    highlights: [
      "Deployed, tested, and benchmarked various NLP models, primarily focused on TTS, ASR, and STT",
      "Implemented data preprocessing pipelines",
      "Python, PyTorch, TensorFlow, ONNX, Hugging Face, Unix/Linux, CLI & scripting"
    ]
  },
  {
    company: "HackerRank",
    title: "DSA Subject Matter Expert (Freelance)",
    date: "07/2024 - 09/2024",
    description: "Curated technical assessment content for major tech companies; Proposed system & process enhancements",
    highlights: [
      "Designed, drafted and updated topics for technical assessments used by major tech companies - C++, Python, C#, Java, etc",
      "Evaluated existing content and identified system/pipeline issues, proposing actionable improvements",
      "Collaborated across teams to refine content structure and workflows"
    ]
  },
  {
    company: "Scale AI",
    title: "Algorithm & Solution Developer (Freelance)",
    date: "05/2023 - 12/2023",
    description: "Developed algorithms & solutions for major competition problems, and took on GQA tasks as well",
    highlights: [
      "Developed Algorithms for various Olympiad and CP problems using C++, maintaining 98% success rate",
      "Mentored a community of over 600 people to improve their work quality to over 90% success rate.",
      "Posed as a community lead and a final layer of GQA"
    ]
  },
  {
    company: "Upwork",
    title: "Freelancer",
    date: "05/2023 - 08/2024",
    description: "Providing expertise in Competitive Programming & Advanced DSA, Algorithm Design, and related topics",
    highlights: [
      "News feed generation algorithm, capable of serving 10000 concurrent requests under 1s",
      "HDO Tracer to recover a disease tree/graph. Capable of tracing hundreds of diseases under 50ms",
      "Designed final exam problems for an Indian B.Tech university, and many more."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Experience</SectionTitle>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ExperienceCard {...exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
