import { motion } from "framer-motion";
import { GraduationCap, Trophy, Code2 } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "BIM Student", detail: "KIST College, Kathmandu (2023–Present)" },
  { icon: Trophy, label: "3rd Place", detail: "KIST HackFest" },
  { icon: Code2, label: "Active Participant", detail: "Multiple hackathons & competitions" },
];

const About = () => (
  <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <span className="font-mono text-primary text-sm mb-2 block">01 — About</span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-8 sm:mb-10">
        Building interfaces that feel
        <br className="hidden sm:block" />
        <span className="gradient-text"> like tools, not toys.</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
        <div className="glass rounded-2xl p-6 sm:p-8">
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            Frontend developer with experience building responsive web interfaces using
            HTML, CSS, JavaScript, and React. Active hackathon participant who enjoys
            transforming complex ideas into clean, user-friendly web applications.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="glass rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 hover:border-primary/30 transition-colors duration-300 group"
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
        </div>
      </div>
    </motion.div>
  </section>
);

export default About;
