// import style from "../templates/Home.module.css"
import { ReactTyped } from 'react-typed';
import pic from '/public/IMG-20240422-WA0028.jpg';
import {
  FaArrowDown,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { motion } from 'framer-motion';
import {
  AnchorVarient,
  buttonVarient,
  LeftVarient,
  RightVarient,
} from '../../animation/homeAnimation';

export default function Home() {
  return (
    <>
      <div
        className="body container my-20 flex flex-col items-center justify-center px-4 md:flex-row md:items-center md:justify-between md:px-4"
        id="home"
      >
        <motion.div
          variants={LeftVarient}
          initial="hidden"
          animate="visible"
          className="left-body text-center md:text-left"
        >
          <div className="text-center md:text-left">
            <h1 className="porname mb-2">Hady Wahba</h1>
            <h2 className="mb-2 text-2xl md:text-3xl">
              i'm{' '}
              <span className="text-text-dark-color dark:text-text-color">
                <ReactTyped
                  strings={['a Front End Developer']}
                  typeSpeed={30}
                  backSpeed={30}
                  loop
                />
              </span>
            </h2>
            <span className="title mb-4">
              Hello, My name is Hady i'm a Front End Developer
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="mt-5 flex justify-center gap-12 md:flex md:justify-start">
              <div className="icolcircle duration-2000 flex items-center justify-center hover:animate-bounce">
                <motion.a
                  variants={AnchorVarient}
                  initial="hidden"
                  animate="visible"
                  title="github"
                  target="_blank"
                  className="text-xl text-text-dark-color dark:text-text-color"
                  href="https://github.com/"
                >
                  <FaGithub />
                </motion.a>
              </div>
              <div className="icolcircle duration-2000 flex items-center justify-center hover:animate-bounce">
                <motion.a
                  variants={AnchorVarient}
                  initial="hidden"
                  animate="visible"
                  title="linkedin"
                  target="_blank"
                  className="text-xl text-text-dark-color dark:text-text-color"
                  href="https://www.linkedin.com/in/hadywahba/"
                >
                  <FaLinkedinIn />
                </motion.a>
              </div>
              <div className="icolcircle duration-2000 flex items-center justify-center hover:animate-bounce">
                <motion.a
                  variants={AnchorVarient}
                  initial="hidden"
                  animate="visible"
                  title="gmail"
                  target="_blank"
                  className="text-xl text-text-dark-color dark:text-text-color"
                  href="mailto:hadywahba19@gmail.com"
                >
                  <BiLogoGmail />
                </motion.a>
              </div>
              <div className="icolcircle duration-2000 flex items-center justify-center hover:animate-bounce">
                <motion.a
                  variants={AnchorVarient}
                  initial="hidden"
                  animate="visible"
                  title="facebook"
                  target="_blank"
                  className="text-xl text-text-dark-color dark:text-text-color"
                  href="https://www.facebook.com/hadi.wahba?mibextid=ZbWKwL"
                >
                  <FaFacebookF />
                </motion.a>
              </div>
            </div>
            <div className="md:mn-8 my-7 mb-20 ms-0 flex items-center justify-center gap-8 md:ms-2">
              <motion.button
                variants={buttonVarient}
                whileHover="hover"
                initial="hidden"
                animate="visible"
                className="bg-text-dark-color px-8 py-4 text-lg text-black hover:bg-black hover:text-white hover:transition-all dark:bg-text-color dark:bg-opacity-90 dark:text-white dark:hover:bg-white dark:hover:text-black md:px-10"
              >
                {' '}
                <a
                  download
                  href="/Hady Wahba.pdf"
                  className="flex items-center justify-center gap-1"
                >
                  <FaArrowDown /> CV
                </a>
              </motion.button>
              <motion.button
                variants={buttonVarient}
                whileHover="hover"
                initial="hidden"
                animate="visible"
                className="bg-black px-6 py-4 text-lg text-white hover:bg-text-dark-color hover:text-black hover:transition-all dark:bg-white dark:text-black dark:hover:bg-text-color dark:hover:bg-opacity-90 dark:hover:text-white md:px-8"
              >
                {' '}
                <a href="#contact"> Hire me</a>{' '}
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={RightVarient}
          initial="hidden"
          animate="visible"
          className="right-body relative flex items-center justify-center"
        >
          <div className="prof-img1 absolute h-[320px] w-[320px] animate-spin-slow2 rounded-full border-b-[2px] border-r-[3px] border-text-dark-color dark:border-[#ADFF2F]"></div>
          <img
            src={pic}
            className="prof-img2 z-10 h-[300px] w-[300px] rounded-full object-cover"
            alt="hady"
          />
        </motion.div>
      </div>
    </>
  );
}
