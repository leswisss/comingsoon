export const scaleAnimation = {
  initial: { scale: 0, x: "-30%", y: "-30%" },

  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },

  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.5, ease: [0.3, 0, 0.7, 0] },
  },
};