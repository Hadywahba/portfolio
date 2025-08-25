export const LeftVarient = {
  hidden: { x: "-100vw" , opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.5, stiffness: 30 },
  },
};

export const RightVarient = {
  hidden: { x: 200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1, stiffness: 40 },
  },
};
export const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6, // كل طفل يتأخر 0.6 ثانية عن اللي قبله
    },
  },
};