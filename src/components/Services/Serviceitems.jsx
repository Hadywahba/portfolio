import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { servicesvarient } from "../../animation/serviceAnimation";
export default function Serviceitems({ item }) {
  console.log(item);
  return (
    <>
      <motion.div
        variants={
          ["1", "3"].includes(item.id)
            ? servicesvarient.fromleft
            : servicesvarient.fromright
        }
        initial="hidden"
        transition={{ duration: 1.2, delay: item.id * 0.2 }}
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className=" items-all text-black dark:bg-slate-600 dark:text-white font-semibold shadow-2xl border-2 border-slate-200 dark:border-none bg-slate-300  p-4  flex flex-col justify-center items-center my-5"
      >
        <div className="  phone border-2 border-text-dark-color  dark:border-text-color flex justify-center items-center my-2 text-3xl ">
          {item.icon}
        </div>
        <div className=" text-center">
          <h3 className="text-2xl  ">{item.label}</h3>
          <p className="my-2  text-md text-center item-text ">{item.text}</p>
        </div>
      </motion.div>
    </>
  );
}
