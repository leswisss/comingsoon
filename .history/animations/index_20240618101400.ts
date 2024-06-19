export const scaleAnimation = {
  initial: { opacity: 0, x: "30%", y: "50%" },

  enter: {
    opacity: 1,
    x: "30%",
    y: "50%",
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },

  closed: {
    opacity: 0,
    x: "30%",
    y: "50%",
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },
};

export const opacityAnimation = {
  initial: { opacity: 0 },

  enter: {
    opacity: 1,
    transition: { duration: 1, ease: [0, 0, 1, 1], delay: 1 },
  },

  closed: {
    opacity: 0,
    transition: { duration: 1, ease: [0., 0, 0.25, 1], delay: 1 },
  },
};