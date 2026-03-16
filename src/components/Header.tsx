import { useState, useEffect } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-lg shadow-background/50" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <a href="#" className="font-bold text-xl tracking-tight text-foreground relative z-50">
          RT<span className="text-primary">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://github.com/RitenTam"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex w-9 h-9 rounded-lg glass items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/ritendra-tamang"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex w-9 h-9 rounded-lg glass items-center justify-center text-muted-foreground hover:text-secondary hover:glow-secondary transition-all duration-300"
          >
            <Linkedin size={16} />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-foreground relative z-50"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-40 md:hidden transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`text-2xl font-semibold text-foreground hover:text-primary transition-all duration-300 ${
                mobileOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: mobileOpen ? `${i * 80}ms` : "0ms" }}
            >
              {item.label}
            </a>
          ))}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/RitenTam"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ritendra-tamang"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-secondary transition-all"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
