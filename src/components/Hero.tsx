import { useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { premiumEaseOut } from "@/lib/motion";

const cutoutImage = "/hero-cutout.png";

type StarParticle = {
  id: number;
  left: number;
  top: number;
  size: number;
  opacity: number;
  color: string;
  delay: number;
  twinkleDuration: number;
  floatDuration: number;
  floatOffset: number;
};

const createStarParticles = (count: number): StarParticle[] => {
  let seed = 673;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  return Array.from({ length: count }, (_, index) => {
    const size = 1 + rand() * 2;
    const opacity = 0.2 + rand() * 0.65;
    const softPurpleChance = rand() > 0.58;

    return {
      id: index,
      left: rand() * 100,
      top: rand() * 100,
      size,
      opacity,
      color: softPurpleChance ? "#c4b5fd" : "#ffffff",
      delay: rand() * 10,
      twinkleDuration: 2.8 + rand() * 3.6,
      floatDuration: 12 + rand() * 14,
      floatOffset: 4 + rand() * 9,
    };
  });
};

const starParticles = createStarParticles(62);

const parentVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: premiumEaseOut },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.95, ease: premiumEaseOut, delay: 0.25 },
  },
};

const Hero = () => {
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] text-[#e2e8f0]">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(120deg,#020617_0%,#030a1e_44%,#020617_100%),radial-gradient(circle_at_70%_50%,rgba(124,58,237,0.35)_0%,rgba(124,58,237,0.2)_30%,transparent_64%),radial-gradient(circle_at_25%_18%,rgba(56,189,248,0.12)_0%,transparent_44%),radial-gradient(circle_at_84%_14%,rgba(139,92,246,0.2)_0%,transparent_34%)]" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_56%_60%,transparent_0%,rgba(2,6,23,0.72)_80%)]" />
      <div className="hero-stars pointer-events-none absolute inset-0 z-10">
        {starParticles.map((star) => (
          <span
            key={star.id}
            className="hero-star"
            style={
              {
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                backgroundColor: star.color,
                boxShadow: `0 0 ${star.size * 5}px ${star.color}`,
                animationDelay: `${star.delay}s, ${star.delay}s`,
                animationDuration: `${star.floatDuration}s, ${star.twinkleDuration}s`,
                "--float-offset": `${star.floatOffset}px`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className="relative z-20 mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 pb-8 pt-28 sm:px-8 md:pt-32 lg:grid-cols-[1.02fr_0.98fr] lg:gap-6 lg:px-10 lg:pb-0">
        <motion.div variants={parentVariants} initial="hidden" animate="show" className="max-w-[42rem] text-center lg:text-left">
          <motion.h1
            variants={revealVariants}
            className="font-heading text-[2.65rem] font-bold leading-[0.97] tracking-[-0.03em] text-[#e2e8f0] sm:text-[3.6rem] lg:text-[4.45rem] xl:text-[5rem]"
          >
            Build systems,
            <br className="hidden sm:block" />
            not just websites.
          </motion.h1>

          <motion.p variants={revealVariants} className="mx-auto mt-7 max-w-[37ch] text-base leading-8 text-[#94a3b8] sm:text-lg lg:mx-0">
            I design and develop full-stack applications that solve real-world problems.
          </motion.p>

          <motion.div variants={revealVariants} className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#a78bfa]/40 bg-gradient-to-r from-[#6d28d9] via-[#7c3aed] to-[#8b5cf6] px-7 py-3.5 text-base font-semibold text-white shadow-[0_0_0_1px_rgba(196,181,253,0.26)_inset,0_12px_42px_rgba(124,58,237,0.42)] transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(196,181,253,0.32)_inset,0_18px_56px_rgba(124,58,237,0.62)]"
            >
              View Projects
              <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#7c3aed]/45 bg-transparent px-7 py-3.5 text-base font-medium text-[#e2e8f0] shadow-[0_0_0_1px_rgba(124,58,237,0.1)_inset] transition-all duration-300 hover:border-[#a78bfa] hover:shadow-[0_0_35px_rgba(124,58,237,0.35)]"
            >
              Contact Me
              <Mail size={18} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="show"
          className="relative mx-auto flex w-full max-w-[28rem] items-end justify-center lg:ml-auto lg:mr-0 lg:max-w-[36rem] lg:justify-end"
        >
          <div className="animate-hero-glow absolute bottom-[6%] right-[10%] z-0 h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.5)_0%,rgba(124,58,237,0.28)_42%,transparent_70%)] blur-[85px] sm:h-[25rem] sm:w-[25rem] lg:h-[34rem] lg:w-[34rem]" />
          <div className="animate-hero-glow absolute bottom-[11%] right-[17%] z-0 h-44 w-44 rounded-full bg-[#8b5cf6]/35 blur-[70px] sm:h-56 sm:w-56" />
          <div className="absolute inset-x-[16%] bottom-[11%] z-0 h-24 rounded-full bg-[#7c3aed]/35 blur-[36px] sm:inset-x-[20%]" />

          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="relative z-20 w-full">
            {hasImageError ? (
              <div className="mx-auto h-[23rem] w-[16.5rem] rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_30px_80px_rgba(124,58,237,0.22)] sm:h-[28rem] sm:w-[20rem] lg:ml-auto lg:h-[38rem] lg:w-[27rem]" />
            ) : (
              <img
                src={cutoutImage}
                alt="Portrait cutout"
                onError={() => setHasImageError(true)}
                className="mx-auto h-auto max-h-[26rem] w-auto object-contain object-bottom [filter:brightness(1.06)_contrast(1.07)_saturate(1.02)] drop-shadow-[0_0_40px_rgba(124,58,237,0.4)] sm:max-h-[32rem] lg:ml-auto lg:max-h-[45rem]"
              />
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
