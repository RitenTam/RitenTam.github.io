import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-6 sm:py-8 px-4 sm:px-6">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span>Kathmandu, Nepal</span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
      </div>

      <div className="flex items-center gap-3">
        <a
          href="https://github.com/ritendratamang"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
        >
          <Github size={14} />
        </a>
        <a
          href="https://linkedin.com/in/ritendratamang"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-secondary transition-colors"
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
