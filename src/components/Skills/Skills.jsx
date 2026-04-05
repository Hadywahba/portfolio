import { skillsvarient } from '../../animation/skillsAnimation';
import { links } from '../../Constant/skils';
import { motion } from 'framer-motion';

// import style from "../templates/Skills.module.css"
export default function Skills() {
  return (
    <>
      <div className="container my-20 px-4" id="skills">
        <div className="top-title mb-24">
          <h2 className="text-primary mx-auto w-fit cursor-pointer text-center text-4xl font-bold dark:text-[#ADFF2F]">
            Skills
          </h2>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((item, index) => (
            <>
              <motion.div
                variants={
                  ['1', '2', '3', '4', '5', '6'].includes(item.id)
                    ? skillsvarient.fromtop
                    : skillsvarient.frombottom
                }
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                key={item.id}
                className="items-all flex-col items-center justify-center space-y-4 border-2 border-slate-200 bg-slate-300 py-3 text-center text-black shadow-2xl dark:border-none dark:bg-slate-600 dark:text-white"
              >
                <figure className="mx-auto w-[50px] sm:w-[90px] lg:w-[100px]">
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="h-[50px] w-full sm:h-[90px] lg:h-[100px]"
                  />
                </figure>
                <figcaption className="items-all text-center text-2xl">
                  {item.label}
                </figcaption>
              </motion.div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
