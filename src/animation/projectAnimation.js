export const LeftVarient = {
  initial: { opacity: 0 },
  hover: {
    opacity: 0.75,
    transition: { type: "spring", duration: 0.5, stiffness: 50 },
  },
};

export const LefticonVarient = {
  initial: { x: "100vw", opacity: 0 },
  hover: {
    x: 5,
    opacity: 1,
    transition: { type: "spring", duration: 2, stiffness: 25 },
  },
};
export const righticonVarient = {
  initial: { x: "-100vw", opacity: 0 },
  hover: {
    x: -5,
    opacity: 1,
    transition: { type: "spring", duration: 2, stiffness: 25 },
  },
};


export const projectvarient ={
  fromLeft: {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    
  },
  fromRight: {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },

}
