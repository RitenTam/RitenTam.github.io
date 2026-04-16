import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

const Scene = lazy(() => import("./Scene"));

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const floatingDots = [
  { top: "12%", left: "10%", size: "0.4rem", delay: 0 },
  { top: "18%", left: "78%", size: "0.55rem", delay: 0.6 },
  { top: "34%", left: "86%", size: "0.35rem", delay: 1.2 },
  { top: "68%", left: "14%", size: "0.45rem", delay: 0.9 },
  { top: "76%", left: "82%", size: "0.5rem", delay: 1.5 },
];

const SceneFallback = () => (
  <div className="flex h-full min-h-[420px] items-center justify-center rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(2,6,23,0.35)]">
    <div className="space-y-5 text-center">
      <div className="mx-auto h-3 w-32 rounded-full bg-white/10 animate-pulse" />
      <div className="relative mx-auto h-72 w-[20rem] rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] shadow-[0_0_120px_rgba(56,189,248,0.15)]">
        <div className="absolute inset-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03]" />
      </div>
      <p className="text-xs uppercase tracking-[0.3em] text-white/45">Loading 3D scene</p>
    </div>
  </div>
);

const Hero = () => (
  <section className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_80%_15%,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_75%_75%,rgba(14,165,233,0.12),transparent_25%),linear-gradient(145deg,#030712_0%,#050816_45%,#0f172a_100%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:56px_56px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />
    <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />

    {floatingDots.map((dot) => (
      <motion.span
        key={`${dot.top}-${dot.left}`}
        aria-hidden="true"
        className="absolute rounded-full bg-cyan-200/80 shadow-[0_0_18px_rgba(103,232,249,0.55)]"
        style={{ top: dot.top, left: dot.left, width: dot.size, height: dot.size }}
        animate={{ opacity: [0.22, 0.8, 0.22], scale: [1, 1.22, 1], y: [0, -8, 0] }}
        transition={{ duration: 5 + dot.delay, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
      />
    ))}

    <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-28 lg:px-8">
      <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="relative z-10 max-w-2xl">
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/72 backdrop-blur-xl"
          >
            <Sparkles size={14} className="text-cyan-300" />
            Premium full-stack portfolio
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="max-w-xl text-5xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl xl:text-[5rem] xl:leading-[0.94]"
          >
            Build systems, not just websites.
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:text-xl">
            I design and develop full-stack applications that solve real-world problems.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(148,163,184,0.22)]"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/8 px-6 py-3.5 font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-white/12"
            >
              Contact Me
              <Mail size={18} />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/65 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
            Smooth motion, subtle depth, and responsive performance.
          </motion.div>
        </motion.div>

        <div className="relative flex min-h-[460px] items-center justify-center lg:min-h-[720px]">
          <div className="pointer-events-none absolute inset-8 rounded-full bg-cyan-400/20 blur-3xl opacity-70" />
          <div className="pointer-events-none absolute inset-x-10 top-10 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
          <div className="relative h-[420px] w-full max-w-[720px] sm:h-[480px] lg:h-[620px]">
            <Suspense fallback={<SceneFallback />}>
              <Scene />
            </Suspense>
          </div>
        </div>
      </div>

      <motion.a
        href="#projects"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/60 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-0.5"
      >
        <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
        Scroll
      </motion.a>
    </div>
  </section>
);

export default Hero;
