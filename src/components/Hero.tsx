import { useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Atom, Box, Mail, Server, Sparkles } from "lucide-react";
import { premiumEaseOut, revealUp } from "@/lib/motion";

const cutoutImage = "/hero-cutout.png";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = revealUp;

const headlineVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: premiumEaseOut },
  },
};

const imageVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8, ease: premiumEaseOut, delay: 0.5 },
  },
};

const FallbackPortrait = () => (
  <div className="absolute inset-0 flex items-end justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_20%,rgba(0,0,0,0.03),transparent_58%),linear-gradient(180deg,rgba(248,249,250,0.9),rgba(241,245,249,0.95))] dark:bg-[radial-gradient(circle_at_50%_20%,rgba(124,58,237,0.28),transparent_46%),linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,6,23,0.98))]">
    <div className="absolute inset-x-8 bottom-6 h-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03),transparent_72%)] blur-3xl dark:hidden" />
    <div className="absolute inset-x-10 bottom-12 hidden h-52 rounded-full bg-[#7c3aed]/25 blur-3xl dark:block" />
    <div className="absolute inset-x-14 bottom-10 hidden h-36 rounded-full bg-[#2563eb]/20 blur-2xl dark:block" />
    <div className="relative mb-8 flex h-[78%] w-[84%] items-end justify-center rounded-[2.25rem] border border-black/10 bg-white/35 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.2)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_30px_90px_rgba(2,6,23,0.45)]">
      <div className="absolute inset-4 rounded-[1.75rem] border border-black/5 bg-[radial-gradient(circle_at_50%_20%,rgba(15,23,42,0.03),transparent_44%),linear-gradient(180deg,rgba(255,255,255,0.5),rgba(255,255,255,0.2))] dark:border-white/5 dark:bg-[radial-gradient(circle_at_50%_20%,rgba(124,58,237,0.12),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))]" />
      <div className="relative z-10 mb-6 flex h-44 w-44 items-center justify-center rounded-full border border-black/10 bg-white/45 text-center shadow-[0_0_90px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_0_80px_rgba(124,58,237,0.24)]">
        <span className="text-4xl font-semibold tracking-[0.3em] text-[#1a1a1a]/90 dark:text-white/82">RT</span>
      </div>
    </div>
  </div>
);

const Hero = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasImageError, setHasImageError] = useState(false);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 120, damping: 20, mass: 0.4 });
  const springY = useSpring(pointerY, { stiffness: 120, damping: 20, mass: 0.4 });

  const imageX = useTransform(springX, [-0.5, 0.5], [-18, 18]);
  const imageY = useTransform(springY, [-0.5, 0.5], [-14, 14]);

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    const bounds = sectionRef.current?.getBoundingClientRect();

    if (!bounds) {
      return;
    }

    const nextX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const nextY = (event.clientY - bounds.top) / bounds.height - 0.5;

    pointerX.set(nextX);
    pointerY.set(nextY);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative min-h-screen overflow-hidden bg-[#f8f9fa] text-[#1a1a1a] dark:bg-[#020617] dark:text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(0,0,0,0.03),transparent_42%),radial-gradient(circle_at_78%_26%,rgba(100,116,139,0.08),transparent_34%),radial-gradient(circle_at_70%_78%,rgba(0,0,0,0.03),transparent_38%),linear-gradient(180deg,#f8f9fa_0%,#f8f9fa_100%)] dark:bg-[radial-gradient(circle_at_18%_20%,rgba(124,58,237,0.22),transparent_32%),radial-gradient(circle_at_78%_26%,rgba(59,130,246,0.16),transparent_26%),radial-gradient(circle_at_70%_78%,rgba(124,58,237,0.12),transparent_28%),linear-gradient(180deg,#020617_0%,#020617_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,116,139,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.08)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30 [mask-image:radial-gradient(circle_at_center,black,transparent_78%)] dark:bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] dark:opacity-20" />
      <div className="absolute inset-0 opacity-45 [background:radial-gradient(circle_at_center,rgba(0,0,0,0.03),transparent_62%)] dark:opacity-40 dark:[background:radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_58%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-end lg:gap-10">
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="relative z-10 max-w-2xl lg:self-end">
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/55 px-4 py-2 text-sm text-[#64748b] backdrop-blur-[10px] dark:border-white/10 dark:bg-white/5 dark:text-white/70"
            >
              <Sparkles size={14} className="text-[#a78bfa]" />
              Full-stack engineer and product builder
            </motion.div>

            <motion.h1
              variants={headlineVariants}
              className="max-w-xl text-5xl font-bold leading-[1.1] tracking-tight text-balance text-[#1a1a1a] sm:text-6xl lg:text-7xl xl:text-[5.3rem] dark:text-white"
            >
              Build systems, not just websites.
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-6 max-w-[42ch] text-base font-light leading-8 text-[#64748b] sm:text-lg lg:text-xl dark:text-[#e2e8f0]">
              I design and develop full-stack applications that solve real-world problems.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-[#020617] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f5f3ff] hover:shadow-[0_18px_40px_rgba(124,58,237,0.24)]"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-medium text-[#64748b] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/5 hover:text-[#475569] dark:text-[#94a3b8] dark:hover:bg-white/10 dark:hover:text-[#cbd5e1]"
              >
                Contact Me
                <Mail size={18} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="show"
            style={{ x: imageX, y: imageY }}
            className="relative mx-auto flex w-full max-w-[28rem] justify-center pl-8 lg:ml-auto lg:self-end lg:justify-end"
          >
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="relative w-fit translate-y-4">
              <div className="absolute left-[-8%] top-[6%] z-[40] animate-float rounded-2xl border border-white/10 bg-[#0f172a]/92 px-3 py-2 text-white backdrop-blur-md dark:border-white/12 dark:bg-[#0f172a]/85 dark:text-white/88" style={{ animationDuration: "6.2s" }}>
                <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em]">
                  <Server size={14} className="text-[#7dd3fc]" />
                  Node
                </span>
              </div>

              <div className="absolute right-[-10%] top-[42%] z-[40] -translate-y-1/2 animate-float rounded-2xl border border-[#c4b5fd]/45 bg-[#1e1b4b]/92 px-4 py-2 text-white backdrop-blur-md dark:border-[#c4b5fd]/40 dark:bg-[#111827]/90" style={{ animationDelay: "0.8s", animationDuration: "5.8s" }}>
                <span className="flex items-center gap-2 text-sm font-semibold tracking-wide">
                  <Atom size={15} className="text-[#c4b5fd]" />
                  React
                </span>
              </div>

              <div className="absolute bottom-[14%] right-[-2%] z-[15] animate-float rounded-2xl border border-white/10 bg-[#0f172a]/92 px-3 py-2 text-white backdrop-blur-md dark:border-white/12 dark:bg-[#0f172a]/85 dark:text-white/88" style={{ animationDelay: "1.8s", animationDuration: "6.8s" }}>
                <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em]">
                  <Box size={14} className="text-[#f97316]" />
                  Bun
                </span>
              </div>

              {hasImageError ? (
                <div className="relative z-[20] h-[300px] w-[230px] max-w-[80vw] sm:h-[360px] sm:w-[280px] lg:h-[450px] lg:w-[340px]">
                  <FallbackPortrait />
                </div>
              ) : (
                <motion.img
                  src={cutoutImage}
                  alt="Portrait cutout of Riten Tam"
                  className="relative z-[20] h-auto w-auto max-h-[300px] max-w-[80vw] object-contain object-bottom drop-shadow-[0_0_48px_rgba(0,0,0,0.12)] sm:max-h-[360px] lg:max-h-[450px] dark:drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                  style={{
                    maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                  }}
                  onError={() => setHasImageError(true)}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
