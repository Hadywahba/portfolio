import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { servicesvarient } from '../../animation/serviceAnimation';
export default function Serviceitems({ item }) {
  console.log(item);
  return (
    <>
      <motion.div
        variants={
          ['1', '3'].includes(item.id)
            ? servicesvarient.fromleft
            : servicesvarient.fromright
        }
        initial="hidden"
        transition={{ duration: 0.8, delay: item.id * 0.1 }}
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="items-all my-5 flex flex-col items-center justify-center border-2 border-slate-200 bg-slate-300 p-4 font-semibold text-black shadow-2xl dark:border-none dark:bg-slate-600 dark:text-white"
      >
        <div className="phone my-2 flex items-center justify-center border-2 border-text-dark-color text-3xl dark:border-text-color">
          {item.icon}
        </div>
        <div className="text-center">
          <h3 className="text-2xl">{item.label}</h3>
          <p className="text-md item-text my-2 text-center">{item.text}</p>
        </div>
      </motion.div>
    </>
  );
}
