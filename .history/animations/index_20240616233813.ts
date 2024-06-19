const transition = { duration: 0.7, ease: [0.7, 0, 0.3, 1] };

export const sideBarAnim = {
  initial: {
    width: "0vw",
  },
  entry: {
    width: "100vw",
    transition: transition,
  },
  exit: {
    width: "0vw",
    transition: transition,
  }
};