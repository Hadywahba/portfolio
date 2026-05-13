import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const timelineData = [
  {
    type: 'education',
    icon: <FaGraduationCap />,
    title: 'Mechatronics Engineering',
    place: 'AIET',
    date: '2017 – 2022',
    desc: 'Graduated with a background in Mechatronics Engineering, which built strong problem-solving and analytical skills.',
  },
  {
    type: 'education',
    icon: <FaGraduationCap />,
    title: 'Frontend Development Bootcamp',
    place: 'Route Academy',
    date: '2024 – 2025',
    desc: 'Completed an intensive frontend bootcamp focused on HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, and Redux . Developed real-world projects with a strong focus on performance, responsive UI, and REST API integration.',
  },
  {
    type: 'work',
    icon: <FaBriefcase />,
    title: 'Frontend Developer',
    place: 'IT-Square',
    date: '2025 – Present',
    desc: 'Developing and maintaining production-level web applications using Next.js, React.js, TypeScript, and Tailwind CSS. Focused on performance optimization, responsive design, and seamless REST API integration to deliver scalable and efficient user experiences.',
  },
  {
    type: 'work',
    icon: <FaBriefcase />,
    title: 'Frontend Developer',
    place: 'Elevate',
    date: '2025 – Present',
    desc: 'Currently advancing my skills in Next.js through hands-on training and building real-world projects using React.js, Next.js, TypeScript, and Tailwind CSS. Passionate about developing responsive, high-performance web applications and working with REST APIs.',
  },
  {
    type: 'work',
    icon: <FaBriefcase />,
    title: 'Frontend Developer',
    place: 'Freelance',
    date: '2026 – Present',
    desc: 'Building responsive web applications using React.js, Next.js, TypeScript, Tailwind CSS, and REST APIs.',
  },
];

export default function Timeline() {
  return (
    <div className="container my-20 px-4" id="timeline">
      <div className="top-title mb-24">
        <h2 className="text-primary mx-auto w-fit cursor-pointer text-center text-4xl font-bold dark:text-[#ADFF2F]">
          Experience & Education
        </h2>
      </div>

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-text-dark-color dark:bg-text-color md:block" />

        <div className="flex flex-col gap-12">
          {timelineData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6`}
            >
              {/* card */}
              <div className="w-full rounded-2xl bg-slate-100 p-6 shadow-xl dark:bg-slate-700 md:w-[45%]">
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-2xl text-text-dark-color dark:text-text-color">
                    {item.icon}
                  </span>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="mb-1 text-sm font-semibold text-text-dark-color dark:text-text-color">
                  {item.place}
                </p>
                <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">
                  {item.date}
                </p>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
              </div>

              {/* center dot */}
              <div className="absolute left-1/2 z-10 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-white bg-text-dark-color dark:border-black dark:bg-text-color md:flex" />

              {/* spacer */}
              <div className="hidden w-[45%] md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
