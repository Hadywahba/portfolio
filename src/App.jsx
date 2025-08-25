import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import { DotLoader } from 'react-spinners';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


function App() {
   const [loading, setLoading] = useState(true);
const [darkMode, setDarkMode] = useState(() => {
      return localStorage.getItem('theme') === 'dark';
  });
const queryClient = new QueryClient()
  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer); // 
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


  if(loading){
    return (
      <div className="flex items-center justify-center h-screen bg-black">
      <DotLoader color="#ADFF2F"  size={100} />
      </div>
    );
  }
  return (
    <div className='bg-white text-black dark:bg-black dark:text-white  overflow-hidden'>
  <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
  <QueryClientProvider client={queryClient}>
  <Home/>
  <About/>
  <Services/>
  <Skills/>
  <Projects/>
  <Contact/>
  </QueryClientProvider>
  <Footer/>
   
    </div>
  )
}

export default App
