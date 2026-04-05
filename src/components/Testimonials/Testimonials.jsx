import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Ahmed Mohamed',
    role: 'Project Manager',
    text: 'Hady delivered an outstanding frontend experience. His attention to detail and clean code made the project a success.',
    avatar: 'AM',
  },
  {
    name: 'Sara Ali',
    role: 'UI/UX Designer',
    text: 'Working with Hady was a pleasure. He translated designs into pixel-perfect, responsive interfaces with great speed.',
    avatar: 'SA',
  },
  {
    name: 'Omar Hassan',
    role: 'Backend Developer',
    text: 'Hady integrates APIs smoothly and communicates clearly. A reliable frontend partner for any project.',
    avatar: 'OH',
  },
];

export default function Testimonials() {
  return (
    <div className="container px-4 my-20" id="testimonials">
      <div className="top-title mb-24">
        <h2 className="text-primary mx-auto w-fit cursor-pointer text-center text-4xl font-bold dark:text-[#ADFF2F]">
          Testimonials
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative bg-slate-100 dark:bg-slate-700 shadow-xl p-8 rounded-2xl flex flex-col gap-4"
          >
            <FaQuoteLeft className="text-3xl text-text-dark-color dark:text-text-color opacity-40" />
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic">"{t.text}"</p>
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-200 dark:border-slate-600">
              <div className="w-12 h-12 rounded-full bg-text-dark-color dark:bg-text-color flex items-center justify-center text-white dark:text-black font-bold text-sm">
                {t.avatar}
              </div>
              <div>
                <p className="font-bold">{t.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
