import { useState, useEffect } from "react";
import { Menu, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex max-w-fit items-center justify-between gap-4 rounded-full border-[0.5px] border-white/10 bg-neutral-900/40 px-6 py-3 backdrop-blur-md transition-all duration-500">
      <nav className="flex w-full items-center justify-between gap-4">
        <a href="#" className="relative z-50 font-heading text-[1.5rem] tracking-tight text-[#e2e8f0] sm:text-[1.75rem]">
          RT//
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[#cbd5e1] transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-[#cbd5e1] sm:flex">
            <Sparkles size={14} />
          </span>
          <a
            href="#contact"
            className="hidden items-center rounded-full border border-[#a78bfa]/45 bg-gradient-to-r from-[#f8f7ff] to-[#ede9fe] px-5 py-2 text-sm font-semibold text-[#1e1b4b] shadow-[0_0_0_1px_rgba(255,255,255,0.6)_inset,0_10px_34px_rgba(124,58,237,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_42px_rgba(124,58,237,0.52)] lg:inline-flex"
          >
            Reach out
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-[#e2e8f0] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#020617]/90 backdrop-blur-2xl md:hidden"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="flex h-full flex-col px-6 pb-10 pt-28"
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
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-xl font-semibold text-[#e2e8f0]"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto space-y-4">
                <a
                  href="mailto:ritendratam404@gmail.com"
                  className="inline-flex w-full justify-center rounded-2xl bg-gradient-to-r from-[#6d28d9] to-[#8b5cf6] px-6 py-3 font-semibold text-white"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
