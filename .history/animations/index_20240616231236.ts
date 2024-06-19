const transition = { duration: 0.7, ease: [0.7, 0, 0.3, 1] };

export const sideBarAnim = {
  initial: {
    width: "0dvh",
  },
  entry: {
    width: "100dvh",
    transition: transition,
  },
  exit: {
    width: "0dvh",
    transition: transition,
  },
};