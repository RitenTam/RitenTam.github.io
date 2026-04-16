import { useState, useEffect } from "react";
import { Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const useDark = savedTheme ? savedTheme === "dark" : true;

    document.documentElement.classList.toggle("dark", useDark);
    setIsDark(useDark);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    document.documentElement.classList.toggle("dark", nextIsDark);
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-5">
      <nav
        className={`mx-auto max-w-6xl transition-all duration-500 rounded-2xl border px-4 sm:px-6 py-3 sm:py-4 ${
          scrolled
            ? "glass-strong border-primary/20 shadow-[0_14px_30px_rgba(7,49,61,0.22)]"
            : "bg-card/45 border-border/50 backdrop-blur-lg"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <a href="#" className="font-heading text-xl sm:text-2xl tracking-tight text-foreground relative z-50">
            RT<span className="text-primary">//</span>
          </a>

          <ul className="hidden md:flex items-center gap-2 bg-background/55 border border-border/70 rounded-full px-2 py-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="px-3 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a
              href="https://github.com/RitenTam"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex w-9 h-9 rounded-lg glass items-center justify-center text-muted-foreground hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/ritendra-tamang"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex w-9 h-9 rounded-lg glass items-center justify-center text-muted-foreground hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center rounded-full bg-foreground text-background px-4 py-2 text-sm font-semibold hover:-translate-y-0.5 transition-all duration-300"
            >
              Reach out
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-foreground relative z-50"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/90 backdrop-blur-2xl z-40 md:hidden"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="h-full px-6 pt-28 pb-10 flex flex-col"
            >
              <div className="grid gap-3">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ x: -18, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.06 * i }}
                    className="glass rounded-2xl px-4 py-4 text-xl font-semibold text-foreground hover:text-primary"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto space-y-4">
                <a
                  href="mailto:ritendratam404@gmail.com"
                  className="w-full inline-flex justify-center rounded-2xl bg-foreground text-background px-6 py-3 font-semibold"
                >
                  Let&apos;s build something
                </a>

                <div className="flex items-center justify-center gap-3">
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
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
