import { motion } from "framer-motion";
import { GraduationCap, Trophy, Code2 } from "lucide-react";
import { inViewSettings, revealLeft, revealUp, staggerContainer } from "@/lib/motion";

const highlights = [
  { icon: GraduationCap, label: "BIM Student", detail: "KIST College, Kathmandu (2023–Present)" },
  { icon: Trophy, label: "3rd Place", detail: "KIST HackFest" },
  { icon: Code2, label: "Active Participant", detail: "Multiple hackathons & competitions" },
];

const About = () => (
  <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
    <motion.div initial="hidden" whileInView="show" viewport={inViewSettings} variants={staggerContainer}>
      <span className="font-mono text-primary text-sm mb-2 block">01 — About</span>
      <motion.h2 variants={revealLeft} className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-8 sm:mb-10">
        Building products that feel
        <br className="hidden sm:block" />
        <span className="gradient-text"> like tools, not toys.</span>
      </motion.h2>

      <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6 sm:gap-10">
        <motion.div variants={revealUp} className="glass spotlight-card rounded-2xl p-6 sm:p-8">
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            Full stack developer with experience building responsive web applications using
            HTML, CSS, JavaScript, React, and backend tooling. Active hackathon participant
            who enjoys transforming complex ideas into clean, user-friendly products.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="space-y-3 sm:space-y-4">
          {highlights.map((item) => (
            <motion.div
              key={item.label}
              variants={revealUp}
              className="glass spotlight-card rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 hover:border-primary/30 transition-colors duration-300 group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon size={17} className="text-primary" />
              </div>
              <div className="min-w-0">
                <span className="text-foreground font-medium text-sm block">{item.label}</span>
                <span className="text-muted-foreground text-xs sm:text-sm block truncate">{item.detail}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default About;
