import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import {
  LefticonVarient,
  LeftVarient,
  righticonVarient,
} from '../../animation/projectAnimation';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../Constant/projects';

const allTechs = ['All', 'Next.js', 'React.js', 'TypeScript', 'JavaScript'];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.tech.some((t) => t.toLowerCase() === active.toLowerCase()));

  return (
    <div className="container my-20 px-4" id="projects">
      <div className="top-title mb-16">
        <h2 className="text-primary mx-auto w-fit cursor-pointer text-center text-4xl font-bold dark:text-[#ADFF2F]">
          Projects
        </h2>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {allTechs.map((tech) => (
          <button
            key={tech}
            onClick={() => setActive(tech)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              active === tech
                ? 'bg-text-dark-color dark:bg-text-color text-white dark:text-black'
                : 'bg-slate-200 dark:bg-slate-700 text-gray-700 dark:text-gray-200 hover:bg-text-dark-color hover:text-white dark:hover:bg-text-color dark:hover:text-black'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="mx-auto grid grid-cols-1 justify-items-center gap-12 sm:grid-cols-2 xl:grid-cols-4">
        <AnimatePresence>
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="max-w-sm overflow-hidden rounded-xl border-2 border-slate-200 bg-white shadow-2xl dark:border-none dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="relative">
                <img
                  className="h-[200px] w-full rounded-t-xl object-cover"
                  src={project.icon}
                  alt={project.label}
                />
                <motion.div
                  variants={LeftVarient}
                  initial="initial"
                  whileHover="hover"
                  className="absolute inset-0 flex items-center justify-center gap-4 bg-slate-300/80 text-4xl text-black opacity-100 transition-opacity duration-300 sm:opacity-0 sm:hover:opacity-100"
                >
                  <motion.div variants={righticonVarient}>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  </motion.div>
                  <motion.div variants={LefticonVarient}>
                    <a href={project.repo} target="_blank" rel="noreferrer">
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
                      className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
