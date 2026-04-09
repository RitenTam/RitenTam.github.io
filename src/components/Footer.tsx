import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="py-6 sm:py-8 px-4 sm:px-6">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 section-shell px-4 sm:px-6 py-4 sm:py-5">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span>Kathmandu, Nepal</span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
      </div>

      <div className="flex items-center gap-3">
        <a
          href="https://github.com/RitenTam"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
        >
          <Github size={14} />
        </a>
        <a
          href="https://www.linkedin.com/in/ritendra-tamang"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
        >
          <Linkedin size={14} />
        </a>
      </div>

      <p className="text-xs sm:text-sm text-muted-foreground">
        © {new Date().getFullYear()} Ritendra Tamang
      </p>
    </div>
  </footer>
);

export default Footer;
