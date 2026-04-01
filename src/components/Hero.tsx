import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";

const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 max-w-6xl mx-auto pt-16 sm:pt-20 relative overflow-hidden">
    {/* Background orbs */}
    <div className="absolute top-10 sm:top-20 -left-20 sm:-left-40 w-48 sm:w-80 h-48 sm:h-80 bg-primary/10 rounded-full blur-[80px] sm:blur-[120px] animate-pulse-glow" />
    <div className="absolute bottom-10 sm:bottom-20 -right-20 sm:-right-40 w-56 sm:w-96 h-56 sm:h-96 bg-primary/10 rounded-full blur-[80px] sm:blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 section-shell p-7 sm:p-10 md:p-14"
    >
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="inline-flex items-center gap-2 font-mono text-primary font-medium tracking-tight text-xs sm:text-sm mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
        Available for new opportunities
      </motion.span>

      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6 text-balance leading-[1.05]">
        <span className="text-foreground">Hi, I'm </span>
        <span className="gradient-text">Ritendra</span>
        <span className="text-foreground">.</span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8 sm:mb-10">
        Frontend developer based in Kathmandu. I build high-performance interfaces
        and transform complex ideas into{" "}
        <span className="text-foreground font-medium">functional digital products.</span>
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4">
        <a
          href="#projects"
          className="w-full sm:w-auto text-center bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
        >
          View Projects
        </a>
        <a
          href="mailto:ritendratam404@gmail.com"
          className="w-full sm:w-auto text-center bg-card border border-border px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-foreground hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5"
        >
          Get in touch
        </a>
        <div className="flex items-center gap-2 mt-1 sm:mt-0 sm:ml-2">
          <a
            href="https://github.com/RitenTam"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/ritendra-tamang"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2"
    >
      <a href="#about" className="text-muted-foreground hover:text-primary transition-colors animate-float">
        <ArrowDown size={20} />
      </a>
    </motion.div>
  </section>
);

export default Hero;
