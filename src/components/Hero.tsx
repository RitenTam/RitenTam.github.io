import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown, Sparkles } from "lucide-react";

const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 max-w-6xl mx-auto pt-28 sm:pt-32 pb-10 relative overflow-hidden">
    <div className="absolute inset-0 grid-lines" />
    <div className="absolute top-10 sm:top-20 -left-20 sm:-left-40 w-52 sm:w-96 h-52 sm:h-96 bg-primary/20 rounded-full blur-[100px] sm:blur-[140px] animate-pulse-glow" />
    <div
      className="absolute bottom-14 sm:bottom-20 -right-24 sm:-right-32 w-60 sm:w-[28rem] h-60 sm:h-[28rem] bg-accent/30 rounded-full blur-[100px] sm:blur-[140px] animate-pulse-glow"
      style={{ animationDelay: "1.4s" }}
    />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 section-shell spotlight-card scan-line p-7 sm:p-10 md:p-14"
    >
      <div className="absolute -top-14 -right-10 hidden sm:block w-44 h-44 rounded-full border border-primary/25 animate-[spin_18s_linear_infinite]" />

      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="inline-flex items-center gap-2 font-mono text-primary font-medium tracking-tight text-xs sm:text-sm mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/30"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
        Available for new opportunities
      </motion.span>

      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6 text-balance leading-[1.03]">
        <span className="text-foreground">Hi, I&apos;m </span>
        <span className="gradient-text">Ritendra</span>
        <span className="text-foreground">,</span>
        <br className="hidden sm:block" />
        <span className="text-foreground/90">building products with </span>
        <span className="font-heading">edge + clarity.</span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8 sm:mb-10">
        Full stack developer based in Kathmandu. I turn rough ideas into high-performance,
        visual-first products that feel crafted, fast, and unmistakably modern.
      </p>

      <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
        {["React", "TypeScript", "Motion", "Full Stack"].map((item) => (
          <span
            key={item}
            className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-mono border border-primary/30 bg-primary/10 text-primary"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4">
        <a
          href="#projects"
          className="w-full sm:w-auto text-center bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold glow-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
        >
          View Projects
        </a>
        <a
          href="mailto:ritendratam404@gmail.com"
          className="w-full sm:w-auto text-center bg-card border border-border px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-foreground hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5"
        >
          Get in touch
        </a>
        <span className="hidden md:inline-flex items-center gap-2 text-muted-foreground text-sm">
          <Sparkles size={16} className="text-primary" />
          Open to freelance + full-time
        </span>
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
      className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
    >
      <a
        href="#about"
        className="text-muted-foreground hover:text-primary transition-colors animate-float w-11 h-11 rounded-full border border-border/80 bg-card/70 backdrop-blur-lg flex items-center justify-center"
      >
        <ArrowDown size={20} />
      </a>
    </motion.div>
  </section>
);

export default Hero;
