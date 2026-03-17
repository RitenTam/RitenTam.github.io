import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const hackathonProjects = [
  {
    title: "VoiceLink",
    description:
      "SME communication platform with frontend UI for messaging, analytics dashboard, and contact management.",
    tags: ["React", "TypeScript", "Dashboard", "UI/UX"],
    link: "https://protobytes-2-0-team-forsaken.vercel.app/",
  },
  {
    title: "Mitra Smart",
    description:
      "Smart form-filling and document validation system with an intuitive guided user interface.",
    tags: ["React", "Forms", "Validation", "UX"],
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
    title: "DropSync",
    description:
      "A file synchronization tool that allows seamless syncing of files across multiple devices and platforms.",
    tags: ["TypeScript", "Node.js", "File Sync", "CLI"],
    link: "https://github.com/RitenTam/DropSync",
  },
];

const ProjectGrid = () => (
  <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <span className="font-mono text-primary text-sm mb-2 block">02 — Projects</span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-8 sm:mb-12">
        Selected work
      </h2>
    </motion.div>

    {/* Hackathon Projects */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-16"
    >
      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Hackathon Projects</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {hackathonProjects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -6 }}
            className="group glass rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:glow-primary hover:border-primary/30 gradient-border"
          >
            <div className="flex justify-between items-start mb-5 sm:mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
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
                  className="px-2.5 sm:px-3 py-1 bg-accent/80 text-muted-foreground text-xs font-mono rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>

    {/* Personal Projects */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Personal Projects</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {personalProjects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -6 }}
            className="group glass rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:glow-primary hover:border-primary/30 gradient-border"
          >
            <div className="flex justify-between items-start mb-5 sm:mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
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
                  className="px-2.5 sm:px-3 py-1 bg-accent/80 text-muted-foreground text-xs font-mono rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  </section>
);

export default ProjectGrid;
