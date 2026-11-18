// import style from "../templates/About.module.css"
import { CiLocationOn } from 'react-icons/ci';
import img2 from '/public/WhatsApp Image 2025-07-20 at 21.22.56_d3d327ac.jpg';
import { MdOutlineMail, MdWorkspacePremium } from 'react-icons/md';
import { FaBirthdayCake, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import {
  containerVariant,
  LeftVarient,
  RightVarient,
} from '../../animation/aboutAnimation';

export default function About() {
  return (
    <>
      <div className="container my-20 p-4">
        <div className="top-title mb-24">
          <h2 className="text-primary mx-auto w-fit cursor-pointer text-center text-4xl font-bold dark:text-[#ADFF2F]">
            About Me
          </h2>
        </div>
        <div
          className="my-16 flex flex-col justify-between gap-12 text-center md:flex-row md:text-left"
          id="about"
        >
          {/* Right Section (text and info) */}
          <div className="right-about flex w-full flex-col gap-4 md:w-1/2">
            <motion.div
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              <motion.p
                variants={LeftVarient}
                className="abut mb-4 text-xl text-black dark:text-white md:text-justify"
              >
                I'm Hady Wahba, a Full-Stack Developer with 1.5 years of frontend development experience building responsive and scalable web applications
                using React.js, Next.js, and TypeScript. Experienced in developing user interfaces, integrating APIs, and building backend
                applications using Node.js, Express.js, SQL, MySQL, MongoDB, and Mongoose. Focused on writing clean, maintainable code
                and developing reliable, scalable web applications.
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              <motion.div
                variants={LeftVarient}
                className="about-all mb-10 mt-12 flex w-full cursor-pointer items-center justify-start gap-4 bg-slate-300 bg-opacity-40 p-4 shadow-xl hover:animate-bounce hover:bg-text-dark-color hover:text-white dark:bg-slate-600 dark:hover:bg-text-color dark:hover:text-black"
              >
                <CiLocationOn className="ps-4 text-4xl" />
                <h4 className="text-md font-Lato md:text-xl">
                  Alexandria, Egypt
                </h4>
              </motion.div>
              <motion.div
                variants={LeftVarient}
                className="about-all mb-10 flex w-full cursor-pointer items-center justify-start gap-4 bg-slate-300 bg-opacity-40 p-4 shadow-xl hover:animate-bounce hover:bg-text-dark-color hover:text-white dark:bg-slate-600 dark:hover:bg-text-color dark:hover:text-black"
              >
                <MdOutlineMail className="ps-4 text-4xl" />
                <h4 className="text-md font-Lato md:text-xl">
                  hadywahba19@gmail.com
                </h4>
              </motion.div>
              <motion.div
                variants={LeftVarient}
                className="about-all mb-10 flex w-full cursor-pointer items-center justify-start gap-4 bg-slate-300 bg-opacity-40 p-4 shadow-xl hover:animate-bounce hover:bg-text-dark-color hover:text-white dark:bg-slate-600 dark:hover:bg-text-color dark:hover:text-black"
              >
                <FaPhoneAlt className="ps-4 text-4xl" />
                <h4 className="text-md font-Lato md:text-xl">01010432457</h4>
              </motion.div>
              <motion.div
                variants={LeftVarient}
                className="about-all mb-10 flex w-full cursor-pointer items-center justify-start gap-4 bg-slate-300 bg-opacity-40 p-4 shadow-xl hover:animate-bounce hover:bg-text-dark-color hover:text-white dark:bg-slate-600 dark:hover:bg-text-color dark:hover:text-black"
              >
                <FaBirthdayCake className="ps-4 text-4xl" />
                <h4 className="text-md font-Lato md:text-xl">27</h4>
              </motion.div>
              <motion.div
                variants={LeftVarient}
                className="about-all flex w-full cursor-pointer items-center justify-start gap-4 bg-slate-300 bg-opacity-40 p-4 shadow-xl hover:animate-bounce hover:bg-text-dark-color hover:text-white dark:bg-slate-600 dark:hover:bg-text-color dark:hover:text-black"
              >
                <MdWorkspacePremium className="ps-4 text-4xl" />
                <h4 className="text-md font-Lato md:text-xl">1.5 Year</h4>
              </motion.div>
            </motion.div>
          </div>

          {/* Left Section (image) */}
          <motion.div
            variants={RightVarient}
            initial="hidden"
            animate="visible"
            className="left-about hidden w-[450px] hover:scale-105 dark:hover:shadow-2xl dark:hover:shadow-text-color md:flex"
          >
            <img
              className="h-auto w-full max-w-full rounded-lg"
              src={img2}
              alt="hady2"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
