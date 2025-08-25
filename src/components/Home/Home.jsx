// import style from "../templates/Home.module.css"
import { ReactTyped } from "react-typed";
import pic from "/public/IMG-20240422-WA0028.jpg";
import {
  FaArrowDown,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { motion } from "framer-motion";
import {
  AnchorVarient,
  buttonVarient,
  LeftVarient,
  RightVarient,
} from "../../animation/homeAnimation";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div
        className="body flex flex-col items-center justify-center    md:flex-row md:items-center  md:justify-between  container px-4  md:px-4 my-20 "
        id="home"
      >
        <motion.div
          variants={LeftVarient}
          initial="hidden"
          animate="visible"
          className="left-body text-center md:text-left  "
        >
          <div className=" text-center md:text-left">
            <h1 className=" porname   mb-2">Hady Wahba</h1>
            <h2 className=" text-2xl md:text-3xl  mb-2">
              i'm{" "}
              <span className="dark:text-text-color text-text-dark-color ">
                <ReactTyped
                  strings={["a Front End Developer"]}
                  typeSpeed={30}
                  backSpeed={30}
                  loop
                />
              </span>
            </h2>
            <span className=" title  mb-4">
              Hello, My name is Hady i'm a Front End Developer
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start   ">
            <div className="flex  justify-center mt-5   md:flex md:justify-start   gap-12 ">
              <div className="icolcircle hover:animate-bounce duration-2000  flex justify-center items-center">
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
              <div className="icolcircle  hover:animate-bounce duration-2000 flex justify-center items-center">
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
              <div className="icolcircle  hover:animate-bounce duration-2000 flex  justify-center items-center">
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
              <div className="icolcircle  hover:animate-bounce duration-2000 flex  justify-center items-center">
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
            <div className="flex justify-center items-center gap-8 my-7 ms-0 md:ms-2  mb-20 md:mn-8">
              <motion.button
                variants={buttonVarient}
                whileHover="hover"
                initial="hidden"
                animate="visible"
                className="dark:bg-text-color  bg-text-dark-color text-black dark:text-white dark:bg-opacity-90 py-4 px-8 md:px-10   hover:transition-all text-lg hover:text-white hover:bg-black  dark:hover:bg-white dark:hover:text-black  "
              >
                {" "}
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
                className="bg-black text-white  py-4 px-6 md:px-8 text-lg dark:hover:bg-text-color dark:hover:bg-opacity-90 dark:hover:text-white hover:bg-text-dark-color hover:transition-all hover:text-black dark:bg-white dark:text-black  "
              >
                {" "}
                <a href="#contact"> Hire me</a>{" "}
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={RightVarient}
          initial="hidden"
          animate="visible"
          className="right-body relative  flex items-center justify-center  "
        >
          <div className=" prof-img1  absolute w-[320px] h-[320px]  border-b-[2px] border-r-[3px] border-text-dark-color dark:border-[#ADFF2F] rounded-full animate-spin-slow2"></div>
          <img
            src={pic}
            className=" prof-img2  w-[300px] h-[300px]  rounded-full object-cover z-10 "
            alt="hady"
          />
        </motion.div>
      </div>
    </>
  );
}
