export const LeftVarient = {
  hidden: { x: "-100vw" },
  visible: {
    x: 0,
    transition: { type: "spring", duration: 1, stiffness: 30 },
  },
};

export const RightVarient = {
  hidden: { x: "100vw" },
  visible: {
    x: 0,
    transition: { type: "spring", duration: 1, stiffness: 30 },
  },
};

export const buttonVarient = {
  hidden: { y: "50vw" },
  visible: {
    y: 0,
    transition: { delay: 0.5, type: "spring", duration: 1, stiffness: 20 },
  },
  hover: {
    scale: [1,1.3,1,1.3,1,1.3,1,1.3,1,1.3,1],
    textShadow: "0px 0px 8px rgb(255 ,255 ,255",
    boxShadow: "0px 0px 8px rgb(255 ,255 ,255",
    transition: {
      
     
    },
  },
};
export const AnchorVarient = {
  hidden: { y: "-100vw" },
  visible: {
    y: 0,
    transition: { type: "spring", delay: 0.5, duration: 1, stiffness: 20 },
  },
};
