export const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6, // كل طفل يتأخر 0.6 ثانية عن اللي قبله
    },
  },
};
export const leftVarient = {
  hidden: { y: "-100vw" , opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.5, stiffness: 30 },
  },
};