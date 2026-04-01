import { motion } from "framer-motion";
import { Trophy, Code2, Zap } from "lucide-react";

const hackathons = [
  {
    name: "KIST HackFest",
    result: "🏆 3rd Place",
    project: "Edu Connect Global",
    description: "Built an AI-powered university recommendation platform in a competitive 24-hour sprint.",
    icon: Trophy,
  },
  {
    name: "100x Hackathon",
    result: "Participant",
    project: "Mitra Smart",
    description: "Developed a smart form-filling and document validation system with guided UX flows.",
    icon: Zap,
  },
  {
    name: "Protobytes 2.0",
    result: "Participant",
    project: "VoiceLink",
    description: "Created a full-featured SME communication platform with messaging and analytics.",
    icon: Code2,
  },
];

const Hackathons = () => (
  <section id="hackathons" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <span className="font-mono text-primary text-sm mb-2 block">04 — Hackathon Journey</span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-8 sm:mb-12">
        Competition experience
      </h2>
    </motion.div>

    {/* Timeline */}
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-[18px] sm:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

      <div className="space-y-4 sm:space-y-6">
        {hackathons.map((h, i) => (
          <motion.div
            key={h.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex items-start gap-4 sm:gap-6 pl-10 sm:pl-14 relative"
          >
            {/* Timeline dot */}
            <div className="absolute left-[12px] sm:left-[14px] top-6 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

            <div className="glass rounded-2xl p-4 sm:p-6 flex-1 transition-all duration-300 hover:border-primary/30">
              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <h.icon size={17} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-bold text-foreground text-sm sm:text-base">{h.name}</h3>
                    <span className="font-mono text-[10px] sm:text-xs px-2.5 py-0.5 sm:py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {h.result}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-muted-foreground mb-1.5 sm:mb-2">Project: {h.project}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{h.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Hackathons;
