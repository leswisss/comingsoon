const transition = { duration: 0.7, ease: [0.7, 0, 0.3, 1] };

export const sideBarAnim = {
  initial: {
    width: "0vw",
    right: "0"
  },
  entry: {
    width: "100vw",
    transition: transition,
    right: ""
  },
  exit: {
    width: "0vw",
    transition: transition,
    right: ""
  }
};