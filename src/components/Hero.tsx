import { useState, type CSSProperties, type MouseEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
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
  glowStrength: number;
  delay: number;
  twinkleDuration: number;
  floatDuration: number;
  floatOffset: number;
};

const createHaloStarParticles = (count: number): StarParticle[] => {
  const haloWidth = 760;
  const haloHeight = 980;
  const borderBandPx = 150;
  const ellipseCenterX = 445;
  const ellipseCenterY = 500;
  const ellipseRadiusX = 220;
  const ellipseRadiusY = 350;
  let seed = 673;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  const particles: StarParticle[] = [];
  let attempts = 0;

  while (particles.length < count && attempts < count * 30) {
    attempts += 1;
    const x = rand() * haloWidth;
    const y = rand() * haloHeight;

    const nx = (x - ellipseCenterX) / ellipseRadiusX;
    const ny = (y - ellipseCenterY) / ellipseRadiusY;
    const ringDistance = Math.abs(Math.hypot(nx, ny) - 1) * Math.min(ellipseRadiusX, ellipseRadiusY);

    if (ringDistance > borderBandPx) {
      continue;
    }

    const sizeRoll = rand();
    const size = sizeRoll > 0.96 ? 3 : sizeRoll > 0.68 ? 2 : 1;
    const softPurpleChance = size > 1 || rand() > 0.62;
    const falloff = Math.max(0.1, 1 - ringDistance / borderBandPx);
    const opacity = Math.min(1, 0.12 + falloff * 0.92);
    const glowStrength = size > 1 ? 7 + size * 2 : 4.5;

    particles.push({
      id: particles.length,
      left: (x / haloWidth) * 100,
      top: (y / haloHeight) * 100,
      size,
      opacity,
      color: softPurpleChance ? "#ddd6fe" : "#ffffff",
      delay: rand() * 9,
      twinkleDuration: 3.8 + rand() * 4.4,
      floatDuration: 12 + rand() * 12,
      floatOffset: 2 + rand() * 4,
      glowStrength,
    });
  }

  return particles;
};

const haloStarParticles = createHaloStarParticles(760);

const getStarClass = (size: number) => {
  if (size === 3) {
    return "hero-star h-[3px] w-[3px] rounded-full blur-[1px] bg-purple-200";
  }
  if (size === 2) {
    return "hero-star h-[2px] w-[2px] rounded-full blur-[1px] bg-purple-200";
  }
  return "hero-star h-[1px] w-[1px] rounded-full";
};

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
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 58, damping: 20, mass: 0.9 });
  const smoothY = useSpring(pointerY, { stiffness: 58, damping: 20, mass: 0.9 });

  const starsShiftX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const starsShiftY = useTransform(smoothY, [-1, 1], [-14, 14]);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const normalizedX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const normalizedY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    pointerX.set(Math.max(-1, Math.min(1, normalizedX)));
    pointerY.set(Math.max(-1, Math.min(1, normalizedY)));
  };

  const handleMouseLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const portraitMaskStyle: CSSProperties = {
    WebkitMaskImage: "linear-gradient(to top, transparent 5%, black 25%)",
    maskImage: "linear-gradient(to top, transparent 5%, black 25%)",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[linear-gradient(110deg,#020307_0%,#02040b_45%,#04070f_100%)] text-[#e2e8f0]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Noise overlay for texture */}
      <div 
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 z-[3] bg-[radial-gradient(circle_at_52%_48%,transparent_24%,rgba(2,6,23,0.42)_72%,rgba(2,6,23,0.92)_100%)]" />

      <div className="relative z-20 mx-auto grid min-h-screen w-full max-w-7xl items-center gap-8 px-7 pb-10 pt-[120px] sm:px-12 lg:grid-cols-[1fr_0.98fr] lg:gap-4 lg:px-16 lg:pb-10 xl:px-20">
        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="show"
          className="mx-auto flex w-full max-w-[40rem] flex-col justify-center py-10 text-center lg:mx-0 lg:max-w-[36rem] lg:py-0 lg:pr-10 lg:text-left"
        >
          <motion.h1
            variants={revealVariants}
            className="font-heading text-[2.65rem] font-semibold leading-[0.97] tracking-tighter text-[#e2e8f0] sm:text-[3.6rem] lg:text-[4.45rem] xl:text-[5rem]"
          >
            Build systems,
            <br className="hidden sm:block" />
            not just websites.
          </motion.h1>

          <motion.p variants={revealVariants} className="mx-auto mt-4 max-w-[36ch] text-base leading-relaxed text-[#a1a1aa] sm:text-lg lg:mx-0">
            I design and develop full-stack applications that solve real-world problems.
          </motion.p>

          <motion.div variants={revealVariants} className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center lg:justify-start">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#a78bfa]/40 bg-gradient-to-r from-[#6d28d9] via-[#7c3aed] to-[#8b5cf6] px-6 text-base font-semibold text-white shadow-[0_0_20px_rgba(120,80,255,0.3)] transition-all duration-300 hover:shadow-[0_0_28px_rgba(120,80,255,0.45)]"
            >
              View Projects
              <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-6 text-base font-medium text-[#e2e8f0] transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              Contact Me
              <Mail size={18} />
            </motion.a>
          </motion.div>

          <motion.div variants={revealVariants} className="pointer-events-none absolute -left-16 top-[30%] hidden h-44 w-44 rounded-full bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.2)_0%,transparent_72%)] blur-[72px] lg:block" />
        </motion.div>

        <motion.div variants={imageVariants} initial="hidden" animate="show" className="relative flex min-h-[24rem] self-end items-end justify-end pt-32 lg:min-h-[72vh] lg:pt-36">
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="relative z-20 h-full w-full">
            <motion.div
              className="pointer-events-none absolute bottom-0 right-[-6%] -z-10 h-[74vh] w-[42rem] max-w-[95%]"
              style={{ x: starsShiftX, y: starsShiftY }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,80,255,0.3)_0%,rgba(120,80,255,0.05)_50%,transparent_80%)] blur-[80px]" />
              <div
                className="absolute inset-0"
                style={{
                  WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 80%)",
                  maskImage: "radial-gradient(circle, black 40%, transparent 80%)",
                }}
              >
                {haloStarParticles.map((star) => (
                  <span
                    key={`halo-${star.id}`}
                    className={getStarClass(star.size)}
                    style={
                      {
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        opacity: star.opacity,
                        backgroundColor: star.size > 1 ? undefined : star.color,
                        boxShadow: `0 0 ${star.glowStrength}px ${star.color}`,
                        animationDelay: `${star.delay}s, ${star.delay}s`,
                        animationDuration: `${star.floatDuration}s, ${star.twinkleDuration}s`,
                        "--float-offset": `${star.floatOffset}px`,
                      } as CSSProperties
                    }
                  />
                ))}
              </div>
            </motion.div>

            {hasImageError ? (
              <div className="absolute bottom-0 right-[2%] h-[56vh] w-[19rem] rounded-[2.6rem] bg-[linear-gradient(155deg,rgba(226,232,240,0.08),rgba(15,23,42,0.03)_58%,rgba(124,58,237,0.14))] sm:w-[21rem] lg:right-[0] lg:h-[68vh] lg:w-[22vw]" />
            ) : (
              <img
                src={cutoutImage}
                alt="Portrait cutout"
                onError={() => setHasImageError(true)}
                style={{ ...portraitMaskStyle, filter: "drop-shadow(0 0 30px rgba(120, 80, 255, 0.5))" }}
                className="absolute bottom-0 right-[-2vw] h-[60vh] w-auto max-w-none object-contain object-bottom sm:h-[66vh] lg:h-[74vh]"
              />
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
