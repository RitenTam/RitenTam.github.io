import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { inViewSettings, revealUp, staggerContainer } from "@/lib/motion";

const hackathonProjects = [
  {
    title: "VoiceLink",
    description:
      "SME communication platform with messaging, analytics dashboard, contact management, and backend coordination.",
    tags: ["React", "TypeScript", "Dashboard", "Full Stack"],
    link: "https://protobytes-2-0-team-forsaken.vercel.app/",
  },
  {
    title: "Mitra Smart",
    description:
      "Smart form-filling and document validation system with a guided workflow and API integration.",
    tags: ["React", "Forms", "Validation", "Full Stack"],
    link: "https://100x-hackathon.vercel.app/",
  },
  {
    title: "Edu Connect Global",
    description:
      "AI-powered university recommendation platform. Built during KIST HackFest — awarded 3rd Place.",
    tags: ["React", "AI", "Hackathon", "🏆 3rd Place"],
    link: "https://kannun-2025.vercel.app/",
  },
];

const personalProjects = [
  {
    title: "DesignBuddy",
    description:
      "Generates UML and DFD diagrams from user inputs like project title and description using PlantUML and Graphviz.",
    tags: ["React", "TypeScript", "PlantUML", "Graphviz"],
    link: "https://dezinebuddy.vercel.app/",
  },
  {
    title: "DropSync",
    description:
      "A file synchronization tool that allows seamless syncing of files across multiple devices and platforms.",
    tags: ["TypeScript", "Node.js", "File Sync", "CLI"],
    link: "https://dropsyncr.vercel.app/",
  },
];

const ProjectGrid = () => (
  <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
    <motion.div initial="hidden" whileInView="show" viewport={inViewSettings} variants={staggerContainer}>
      <span className="font-mono text-primary text-sm mb-2 block">02 — Projects</span>
      <motion.h2 variants={revealUp} className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-8 sm:mb-12">
        Hackathon & Personal Projects
      </motion.h2>
    </motion.div>

    {/* Hackathon Projects */}
    <motion.div initial="hidden" whileInView="show" viewport={inViewSettings} variants={staggerContainer} className="mb-16">
      <motion.h3 variants={revealUp} className="text-xl sm:text-2xl font-bold text-foreground mb-6">
        Hackathon Projects
      </motion.h3>
      <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {hackathonProjects.map((project) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={revealUp}
            whileHover={{ y: -6 }}
            className="group glass spotlight-card scan-line rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-primary/30"
          >
            <div className="flex justify-between items-start mb-5 sm:mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <ExternalLink size={18} className="text-primary" />
              </div>
              <ArrowUpRight
                size={20}
                className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
              />
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-5 sm:mb-6 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 sm:px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>

    {/* Personal Projects */}
    <motion.div initial="hidden" whileInView="show" viewport={inViewSettings} variants={staggerContainer}>
      <motion.h3 variants={revealUp} className="text-xl sm:text-2xl font-bold text-foreground mb-6">
        Personal Projects
      </motion.h3>
      <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {personalProjects.map((project) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={revealUp}
            whileHover={{ y: -6 }}
            className="group glass spotlight-card scan-line rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-primary/30"
          >
            <div className="flex justify-between items-start mb-5 sm:mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <ExternalLink size={18} className="text-primary" />
              </div>
              <ArrowUpRight
                size={20}
                className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
              />
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-5 sm:mb-6 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 sm:px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default ProjectGrid;
