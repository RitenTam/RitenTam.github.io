import { motion } from "framer-motion";
import { Code2, GitBranch, Palette, Layout } from "lucide-react";
import { inViewSettings, revealUp, staggerContainer } from "@/lib/motion";

const skillGroups = [
  {
    category: "Full Stack",
    icon: Layout,
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "TypeScript"],
  },
  {
    category: "Languages",
    icon: Code2,
    items: ["Java", "C", "JavaScript (ES6+)"],
  },
  {
    category: "Tools & Workflow",
    icon: GitBranch,
    items: ["Git", "GitHub", "Trello", "Jira"],
  },
  {
    category: "Backend & Cloud",
    icon: Palette,
    items: ["Supabase", "REST APIs", "Cloud Deployment"],
  },
];

const Skills = () => (
  <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
    <motion.div initial="hidden" whileInView="show" viewport={inViewSettings} variants={staggerContainer}>
      <span className="font-mono text-primary text-sm mb-2 block">03 — Technical Index</span>
      <motion.h2 variants={revealUp} className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-8 sm:mb-12">
        Skills & tools
      </motion.h2>
    </motion.div>

    <motion.div initial="hidden" whileInView="show" viewport={inViewSettings} variants={staggerContainer} className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
      {skillGroups.map((group) => (
        <motion.div
          key={group.category}
          variants={revealUp}
          className="glass spotlight-card rounded-2xl p-4 sm:p-6 hover:border-primary/30 transition-all duration-300 group"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/15 transition-all">
            <group.icon size={17} className="text-primary" />
          </div>
          <h3 className="font-mono text-[10px] sm:text-xs text-primary font-medium uppercase tracking-wider mb-3 sm:mb-4">
            {group.category}
          </h3>
          <ul className="space-y-1.5 sm:space-y-2">
            {group.items.map((item) => (
              <li key={item} className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary/50 flex-shrink-0" />
                <span className="truncate">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Skills;
