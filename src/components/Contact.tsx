import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <span className="font-mono text-primary text-sm mb-2 block">05 — Contact</span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
        Let's work <span className="gradient-text">together</span>
      </h2>
      <p className="text-muted-foreground max-w-md mx-auto mb-8 sm:mb-10 text-sm sm:text-base">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <a
          href="mailto:ritendratam404@gmail.com"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 transition-all duration-300"
        >
          <Mail size={16} />
          Say Hello
        </a>
        <a
          href="https://github.com/RitenTam"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 glass px-6 py-3 rounded-full font-medium text-foreground hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-300"
        >
          <Github size={16} />
          GitHub
          <ArrowUpRight size={14} className="text-muted-foreground" />
        </a>
        <a
          href="https://www.linkedin.com/in/ritendra-tamang"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 glass px-6 py-3 rounded-full font-medium text-foreground hover:border-secondary/50 hover:-translate-y-0.5 transition-all duration-300"
        >
          <Linkedin size={16} />
          LinkedIn
          <ArrowUpRight size={14} className="text-muted-foreground" />
        </a>
      </div>
    </motion.div>
  </section>
);

export default Contact;
