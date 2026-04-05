import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Stats from './components/Stats/Stats';
import Timeline from './components/Timeline/Timeline';
import Testimonials from './components/Testimonials/Testimonials';
import ScrollProgress from './components/ui/ScrollProgress';
import BackToTop from './components/ui/BackToTop';
import CustomCursor from './components/ui/CustomCursor';
import { DotLoader } from 'react-spinners';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const queryClient = new QueryClient();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-black">
        <DotLoader color="#ADFF2F" size={100} />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Hady Wahba | Frontend Developer</title>
        <meta
          name="description"
          content="Hady Wahba – Frontend Developer specializing in React, Next.js, TypeScript, and Tailwind CSS."
        />
        {/* Open Graph */}
        <meta property="og:title" content="Hady Wahba | Frontend Developer" />
        <meta
          property="og:description"
          content="Frontend Developer specializing in React, Next.js, TypeScript, and Tailwind CSS."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://your-portfolio-url.vercel.app"
        />
        <meta
          property="og:image"
          content="https://your-portfolio-url.vercel.app/IMG-20240422-WA0028.jpg"
        />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hady Wahba | Frontend Developer" />
        <meta
          name="twitter:description"
          content="Frontend Developer specializing in React, Next.js, TypeScript, and Tailwind CSS."
        />
        <meta
          name="twitter:image"
          content="https://your-portfolio-url.vercel.app/IMG-20240422-WA0028.jpg"
        />
      </Helmet>

      <CustomCursor />
      <ScrollProgress />

      <div className="cursor-none overflow-hidden bg-white text-black dark:bg-black dark:text-white">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <QueryClientProvider client={queryClient}>
          <Home />
          <About />
          <Timeline />
          <Services />
          <Skills />
          <Projects />
          <Contact />
        </QueryClientProvider>
        <Footer />
      </div>

      <BackToTop />
    </>
  );
}

export default App;
