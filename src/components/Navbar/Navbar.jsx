import { CiLight } from "react-icons/ci";
import { HiMoon } from "react-icons/hi";
import { motion } from "framer-motion";
import { containerVariant, leftVarient } from "../../animation/navbarAnimation";
import { useState } from "react";
export default function Navbar({ darkMode, setDarkMode }) {
  const [openButton, setopenButton] = useState(false);

  const toggleNavButton = () => {
    setopenButton(!openButton);
  };

  return (
    <nav className="bg-slate-200 border-gray-200 dark:bg-slate-900 container  px-4  rounded-full mt-10 mb-24 ">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="max-w-screen-xl flex flex-wrap items-center justify-between     mx-auto   p-4 "
      >
        <motion.div
          variants={leftVarient}
          className="portfolio-name flex justify-center items-center p-4"
        >
          <span className="text-4xl dark:text-white ">H</span>
        </motion.div>

        <div className="flex gap-8">
          <div
            className={` ${openButton ? 'visible' : 'hidden'} md:block  w-full absolute z-50 bg-slate-200 rounded-t-xl dark:bg-slate-900   md:relative md:top-0 top-[110px]  left-0  md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:bg-transparent md:border-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
              <li onClick={()=>setopenButton(false)}>
                <motion.a
                  variants={leftVarient}
                  href="#home"
                  className="block py-2 px-3   rounded-sm md:bg-transparent   md:p-0 dark:hover:bg-text-color md:dark:hover:bg-transparent hover:bg-text-dark-color md:hover:bg-transparent   md:hover:text-text-dark-color md:dark:hover:text-text-color  "
                  aria-current="page"
                >
                  Home
                </motion.a>
              </li>
              <li onClick={()=>setopenButton(false)}>
                <motion.a
                  variants={leftVarient}
                  href="#about"
                  className="block py-2 px-3 text-gray-900 rounded-sm dark:hover:bg-text-color  hover:bg-text-dark-color md:hover:bg-transparent   md:border-0  md:hover:text-text-dark-color md:p-0  md:dark:hover:text-text-color dark:text-white md:dark:focus:text-colo3  md:dark:hover:bg-transparent"
                >
                  About
                </motion.a>
              </li>
              <li onClick={()=>setopenButton(false)}>
                <motion.a
                  variants={leftVarient}
                  href="#services"
                  className="block py-2 px-3 text-gray-900 rounded-sm  md:hover:bg-transparent md:border-0 dark:hover:bg-text-color  hover:bg-text-dark-color  md:hover:text-text-dark-color md:p-0  md:dark:hover:text-text-color  dark:text-white md:dark:focus:text-colo3 md:dark:hover:bg-transparent"
                >
                  Services
                </motion.a>
              </li>
              <li onClick={()=>setopenButton(false)}>
                <motion.a
                  variants={leftVarient}
                  href="#skills"
                  className="block py-2 px-3 text-gray-900 rounded-sm  md:hover:bg-transparent md:border-0 md:hover:text-text-dark-color md:p-0 dark:hover:bg-text-color  hover:bg-text-dark-color   md:dark:hover:text-text-color  dark:text-white md:dark:focus:text-colo3 md:dark:hover:bg-transparent"
                >
                  Skills
                </motion.a>
              </li>
              <li onClick={()=>setopenButton(false)}>
                <motion.a
                  variants={leftVarient}
                  href="#projects"
                  className="block py-2 px-3 text-gray-900 rounded-sm  md:hover:bg-transparent md:border-0 md:hover:text-text-dark-color md:p-0  md:dark:hover:text-text-color dark:hover:bg-text-color  hover:bg-text-dark-color   dark:text-white md:dark:focus:text-colo3 md:dark:hover:bg-transparent"
                >
                  Projects
                </motion.a>
              </li>
              <li onClick={()=>setopenButton(false)}>
                <motion.a
                  variants={leftVarient}
                  href="#contact"
                  className="block py-2 px-3 text-gray-900 rounded-sm dark:hover:bg-text-color  hover:bg-text-dark-color   md:hover:bg-transparent md:border-0 md:hover:text-text-dark-color md:p-0  md:dark:hover:text-text-color  dark:text-white md:dark:focus:text-colo3  md:dark:hover:bg-transparent"
                >
                  Contact
                </motion.a>
              </li>
            </ul>
          </div>

          <motion.button
            variants={leftVarient}
            className=" text-2xl rounded"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <HiMoon /> : <CiLight />}
          </motion.button>
          <button
            onClick={toggleNavButton}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-end md:justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
