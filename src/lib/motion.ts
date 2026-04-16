export const premiumEaseOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const revealUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: premiumEaseOut,
    },
  },
};

export const revealLeft = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: premiumEaseOut,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const inViewSettings = {
  once: true,
  amount: 0.2,
};
