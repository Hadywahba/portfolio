import { skillsvarient } from "../../animation/skillsAnimation";
import { links } from "../../Constant/skils";
import { motion } from "framer-motion";

// import style from "../templates/Skills.module.css"
export default function Skills() {
  return (
    <div className="container  px-4 my-20 " id="skills">
      <div className=" top-title mb-24">
        <h2 className="text-4xl text-center w-fit font-bold cursor-pointer mx-auto  text-primary dark:text-[#ADFF2F]">
          Skills
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
        {links.map((item,index) => (
          <>
            <motion.div 
            variants={
                            ["1", "2","3", "4", "5" ,"6"].includes(item.id)
                              ? skillsvarient.fromtop
                              : skillsvarient.frombottom
                          }
                          initial="hidden"
                         
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.1 }}
                          transition={{ duration: 1.2, delay: index * 0.2 }}
              key={item.id}
              className="flex-col  justify-center items-center shadow-2xl border-2 dark:border-none border-slate-200 bg-slate-300 text-black dark:bg-slate-600 dark:text-white  text-center py-3 space-y-4 items-all"
            >
              <figure className=" w-[50px] sm:w-[90px]  lg:w-[100px]    mx-auto ">
                <img src={item.icon} alt={item.label} className="w-full h-[50px] sm:h-[90px] lg:h-[100px]" />
              </figure>
              <figcaption className="text-2xl   items-all text-center">
                {item.label}
              </figcaption>
            </motion.div>
          </>
        ))}
      </div>
    </div>
  );
}
