import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  LefticonVarient,
  LeftVarient,
  projectvarient,
  righticonVarient,
} from "../../animation/projectAnimation";
import { motion } from "framer-motion";
import { projects } from "../../Constant/projects";


// import style from "../templates/Projects.module.css"
export default function Projects() {
  return (
    <>
      

      <div className=" container px-4 my-20" id="projects">
        <div className=" top-title mb-24">
          <h2 className="text-4xl text-center w-fit font-bold cursor-pointer mx-auto  text-primary dark:text-[#ADFF2F]">
            Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 mx-auto justify-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={
                ["1", "2", "5", "6"].includes(project.id)
                  ? projectvarient.fromLeft
                  : projectvarient.fromRight
              }
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 1.2, delay: index * 0.2 }}
              className="max-w-sm bg-white  overflow-hidden  shadow-2xl border-2 dark:border-none border-slate-200 rounded-xl  dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="relative">
                <img
                  className="rounded-t-xl  object-cover h-[200px] w-full"
                  src={project.icon}
                  alt={project.label}
                />
                <motion.div
                  variants={LeftVarient}
                  initial="initial"
                  whileHover="hover"
                  className="absolute bg-slate-300    inset-0 flex justify-center items-center gap-4 text-4xl text-black "
                >
                  <motion.div variants={righticonVarient}>
                    <a href={project.link} target="_blank">
                      <FaExternalLinkAlt />
                    </a>
                  </motion.div>
                  <motion.div variants={LefticonVarient}>
                    <a href={project.repo} target="_blank">
                      <FaGithub />
                    </a>
                  </motion.div>
                </motion.div>
              </div>

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {project.label}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {project.text}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
