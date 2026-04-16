import { useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

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

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 36, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.12 },
  },
};

const FallbackPortrait = () => (
  <div className="absolute inset-0 flex items-end justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_20%,rgba(124,58,237,0.28),transparent_46%),linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,6,23,0.98))]">
    <div className="absolute inset-x-10 bottom-12 h-52 rounded-full bg-[#7c3aed]/25 blur-3xl" />
    <div className="absolute inset-x-14 bottom-10 h-36 rounded-full bg-[#2563eb]/20 blur-2xl" />
    <div className="relative mb-8 flex h-[78%] w-[84%] items-end justify-center rounded-[2.25rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(2,6,23,0.45)]">
      <div className="absolute inset-4 rounded-[1.75rem] border border-white/5 bg-[radial-gradient(circle_at_50%_20%,rgba(124,58,237,0.12),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))]" />
      <div className="relative z-10 mb-6 flex h-44 w-44 items-center justify-center rounded-full border border-white/10 bg-white/5 text-center shadow-[0_0_80px_rgba(124,58,237,0.24)]">
        <span className="text-4xl font-semibold tracking-[0.3em] text-white/82">RT</span>
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
  const glowX = useTransform(springX, [-0.5, 0.5], [-42, 42]);
  const glowY = useTransform(springY, [-0.5, 0.5], [-28, 28]);

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
      className="relative min-h-screen overflow-hidden bg-[#020617] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(124,58,237,0.22),transparent_32%),radial-gradient(circle_at_78%_26%,rgba(59,130,246,0.16),transparent_26%),radial-gradient(circle_at_70%_78%,rgba(124,58,237,0.12),transparent_28%),linear-gradient(180deg,#020617_0%,#020617_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
      <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_58%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28 lg:px-8">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="relative z-10 max-w-2xl">
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-xl"
            >
              <Sparkles size={14} className="text-[#a78bfa]" />
              Full-stack engineer and product builder
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="max-w-xl text-5xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl xl:text-[5.3rem] xl:leading-[0.92]"
            >
              Build systems, not just websites.
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:text-xl">
              I design and develop full-stack applications that solve real-world problems.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7c3aed] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6d28d9] hover:shadow-[0_18px_40px_rgba(124,58,237,0.28)]"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/5 px-6 py-3.5 font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/22 hover:bg-white/10"
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
            className="relative mx-auto flex w-full max-w-[38rem] justify-center lg:ml-auto lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[34rem] translate-y-5 lg:max-w-[36rem]"
            >
              <div className="pointer-events-none absolute inset-x-12 bottom-4 h-52 rounded-full bg-[#7c3aed]/24 blur-3xl" style={{ x: glowX, y: glowY }} />
              <div className="pointer-events-none absolute inset-x-20 bottom-10 h-36 rounded-full bg-[#2563eb]/18 blur-2xl" style={{ x: glowX, y: glowY }} />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.96))] shadow-[0_34px_120px_rgba(2,6,23,0.62)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(124,58,237,0.22),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(37,99,235,0.18),transparent_34%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(2,6,23,0.52)_100%)]" />
                {hasImageError ? (
                  <FallbackPortrait />
                ) : (
                  <motion.img
                    src={cutoutImage}
                    alt="Portrait cutout of Riten Tam"
                    className="absolute inset-x-[8%] bottom-0 h-[116%] w-[84%] object-contain object-bottom drop-shadow-[0_30px_60px_rgba(124,58,237,0.26)]"
                    onError={() => setHasImageError(true)}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
                <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
