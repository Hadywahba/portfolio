import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Completed', value: 10, suffix: '+' },
  { label: 'Years Experience', value: 1, suffix: '+' },
  { label: 'Happy Clients', value: 5, suffix: '+' },
  { label: 'Technologies', value: 12, suffix: '+' },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [started, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 py-16 my-20">
      <div className="container px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center text-center"
            >
              <span className="text-5xl font-bold text-text-dark-color dark:text-text-color mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-lg text-gray-600 dark:text-gray-300">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
