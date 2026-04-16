import { motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { inViewSettings, revealUp, staggerContainer } from "@/lib/motion";

const NOTE_MESSAGES = [
  "Rematch?",
  "Couldn't catch me there?",
  "Too slow!",
  "Try again?",
  "Maybe later...",
  "Where am I?",
  "Catch me if you can!",
];

const Contact = () => {
  const gameAreaRef = useRef<HTMLDivElement | null>(null);
  const stickyNoteRef = useRef<HTMLButtonElement | null>(null);
  const [isCaught, setIsCaught] = useState(false);
  const [noteMessage, setNoteMessage] = useState(NOTE_MESSAGES[0]);
  const [notePosition, setNotePosition] = useState({ top: 16, left: 14 });

  const runAway = useCallback(() => {
    if (isCaught) {
      return;
    }

    const gameArea = gameAreaRef.current;
    const stickyNote = stickyNoteRef.current;

    if (!gameArea || !stickyNote) {
      return;
    }

    const maxLeft = Math.max(gameArea.clientWidth - stickyNote.offsetWidth, 0);
    const maxTop = Math.max(gameArea.clientHeight - stickyNote.offsetHeight, 0);

    const nextLeftPx = Math.random() * maxLeft;
    const nextTopPx = Math.random() * maxTop;

    const nextLeftPercent = gameArea.clientWidth > 0 ? (nextLeftPx / gameArea.clientWidth) * 100 : 0;
    const nextTopPercent = gameArea.clientHeight > 0 ? (nextTopPx / gameArea.clientHeight) * 100 : 0;

    setNotePosition({ top: nextTopPercent, left: nextLeftPercent });

    const randomMessage = NOTE_MESSAGES[Math.floor(Math.random() * NOTE_MESSAGES.length)];
    setNoteMessage(randomMessage);
  }, [isCaught]);

  const handleContactClick = useCallback(() => {
    setIsCaught(true);
    setNoteMessage("Okay, you win. Chat soon!");
  }, []);

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={inViewSettings}
        variants={staggerContainer}
        className="section-shell spotlight-card scan-line px-5 sm:px-8 py-10 sm:py-14"
      >
        <span className="font-mono text-primary text-sm mb-8 block">05 — Contact</span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          <motion.div variants={revealUp}>
            <div
              ref={gameAreaRef}
              className="relative h-[320px] sm:h-[360px] md:h-[390px] rounded-2xl border border-slate-300/85 overflow-hidden"
              style={{
                backgroundColor: "#eceff3",
                backgroundImage: "radial-gradient(circle, rgba(126, 140, 158, 0.36) 1.05px, transparent 1.05px)",
                backgroundSize: "16px 16px",
              }}
            >
              <button
                ref={stickyNoteRef}
                type="button"
                onMouseEnter={runAway}
                onClick={runAway}
                className="absolute w-[170px] sm:w-[182px] min-h-[112px] rounded-sm border border-amber-300/80 bg-amber-200 px-4 py-3 text-left shadow-[0_10px_26px_rgba(42,32,10,0.26)] hover:rotate-1"
                style={{
                  top: `${notePosition.top}%`,
                  left: `${notePosition.left}%`,
                  transition: "all 0.2s ease-out",
                  transform: "rotate(-2.4deg)",
                  cursor: isCaught ? "default" : "pointer",
                }}
              >
                <p className="font-mono text-[15px] leading-snug text-amber-950">{noteMessage}</p>
              </button>
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} className="flex flex-col justify-center text-center lg:text-left">
            <motion.h2 variants={revealUp} className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              COULDN&apos;T CATCH ME THERE? <span className="gradient-text">Reach out to me here ✦</span>
            </motion.h2>
            <motion.p variants={revealUp} className="text-muted-foreground max-w-md lg:max-w-none mx-auto lg:mx-0 mb-8 sm:mb-10 text-sm sm:text-base">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </motion.p>

            <motion.div variants={staggerContainer} className="flex flex-col sm:flex-row sm:flex-wrap lg:justify-start justify-center gap-3 sm:gap-4">
              <motion.a
                variants={revealUp}
                href="mailto:ritendratam404@gmail.com"
                onClick={handleContactClick}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Mail size={16} />
                Email
              </motion.a>
              <motion.a
                variants={revealUp}
                href="https://github.com/RitenTam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-card border border-border px-6 py-3 rounded-full font-medium text-foreground hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Github size={16} />
                GitHub
                <ArrowUpRight size={14} className="text-muted-foreground" />
              </motion.a>
              <motion.a
                variants={revealUp}
                href="https://www.linkedin.com/in/ritendra-tamang"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-card border border-border px-6 py-3 rounded-full font-medium text-foreground hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Linkedin size={16} />
                LinkedIn
                <ArrowUpRight size={14} className="text-muted-foreground" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
