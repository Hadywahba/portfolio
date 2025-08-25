// import style from "../templates/About.module.css"
import { CiLocationOn } from "react-icons/ci";
import img2 from "/public/WhatsApp Image 2025-07-20 at 21.22.56_d3d327ac.jpg";
import { MdOutlineMail, MdWorkspacePremium } from "react-icons/md";
import { FaBirthdayCake, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  containerVariant,
  LeftVarient,
  RightVarient,
} from "../../animation/aboutAnimation";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className=" container   p-4 my-20 ">
        <div className="top-title mb-24 ">
          <h2 className="  text-4xl text-center w-fit mx-auto font-bold cursor-pointer  text-primary dark:text-[#ADFF2F]">
            About Me
          </h2>
        </div>
        <div
          className="flex flex-col md:flex-row gap-12 justify-between  text-center md:text-left my-16"
          id="about"
        >
          {/* Right Section (text and info) */}
          <div className="right-about w-full md:w-1/2 flex flex-col gap-4">
            <motion.div
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              <motion.p
                variants={LeftVarient}
                className="text-xl mb-4 abut text-black dark:text-white md:text-justify"
              >
                I'm Hady Wahba, a passionate Front-End Developer with a
                background in Mechatronics Engineering. I enjoy building
                responsive and interactive web interfaces using React.js,
                Next.js, Redux, Javascript, Typescript, Bootstrap, Tailwind CSS,
                and modern web technologies. I'm constantly learning and aiming
                to become a full-stack developer.
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
                className="dark:bg-slate-600  hover:animate-bounce about-all shadow-xl bg-slate-300 bg-opacity-40 gap-4 cursor-pointer hover:bg-text-dark-color hover:text-white dark:hover:bg-text-color dark:hover:text-black w-full flex justify-start items-center p-4 mt-12 mb-10"
              >
                <CiLocationOn className="text-4xl ps-4" />
                <h4 className="text-md md:text-xl font-Lato">
                  Alexandria, Egypt
                </h4>
              </motion.div>
              <motion.div
                variants={LeftVarient}
                className="dark:bg-slate-600 about-all shadow-xl hover:animate-bounce  bg-slate-300 bg-opacity-40 gap-4 cursor-pointer hover:bg-text-dark-color hover:text-white dark:hover:bg-text-color dark:hover:text-black w-full flex justify-start items-center p-4 mb-10"
              >
                <MdOutlineMail className="text-4xl ps-4" />
                <h4 className="text-md md:text-xl font-Lato">
                  hadywahba19@gmail.com
                </h4>
              </motion.div>
              <motion.div
                variants={LeftVarient}
                className="dark:bg-slate-600 about-all shadow-xl hover:animate-bounce bg-slate-300 bg-opacity-40 gap-4 cursor-pointer hover:bg-text-dark-color hover:text-white dark:hover:bg-text-color dark:hover:text-black w-full flex justify-start items-center p-4 mb-10"
              >
                <FaPhoneAlt className="text-4xl ps-4" />
                <h4 className="text-md md:text-xl font-Lato">01010432457</h4>
              </motion.div>
              <motion.div
                variants={LeftVarient}
                className="dark:bg-slate-600 about-all shadow-xl hover:animate-bounce  bg-slate-300 bg-opacity-40 gap-4 cursor-pointer hover:bg-text-dark-color hover:text-white dark:hover:bg-text-color dark:hover:text-black w-full flex justify-start items-center p-4 mb-10"
              >
                <FaBirthdayCake className="text-4xl ps-4" />
                <h4 className="text-md md:text-xl font-Lato">26</h4>
              </motion.div>
              <motion.div
                variants={LeftVarient}
                className="dark:bg-slate-600 about-all shadow-xl  hover:animate-bounce bg-slate-300 bg-opacity-40 gap-4 cursor-pointer hover:bg-text-dark-color hover:text-white dark:hover:bg-text-color dark:hover:text-black w-full flex justify-start items-center p-4 "
              >
                <MdWorkspacePremium className="text-4xl ps-4" />
                <h4 className="text-md md:text-xl font-Lato ">1 Year</h4>
              </motion.div>
            </motion.div>
          </div>

          {/* Left Section (image) */}
          <motion.div
            variants={RightVarient}
            initial="hidden"
            animate="visible"
            className="left-about  w-[450px] hidden md:flex dark:hover:shadow-2xl dark:hover:shadow-text-color hover:scale-105"
          >
            <img
              className="w-full h-auto  rounded-lg  max-w-full "
              src={img2}
              alt="hady2"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
