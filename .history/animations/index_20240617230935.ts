export const scaleAnimation = {
  initial: { opacity: 0, x: "50%", y: "50%" },

  enter: {
    opacity: 1,
    x: "50%",
    y: "50%",
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },

  closed: {
    opacity: 0,
    x: "30%",
    y: "50%",
    transition: { duration: 0.5, ease: [0.3, 0, 0.7, 0] },
  },
};