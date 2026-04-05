import { useState } from 'react';
import Serviceitems from './Serviceitems';
import {
  FaCode,
  FaDesktop,
  FaEnvelope,
  FaPaintBrush,
  FaPhoneAlt,
} from 'react-icons/fa';
import {
  MdAnimation,
  MdDesignServices,
  MdDevices,
  MdTouchApp,
} from 'react-icons/md';
import { TbDeviceLaptop } from 'react-icons/tb';

// import style from "../templates/Services.module.css"
export default function Services() {
  const [Data, setData] = useState([
    {
      icon: <MdDevices />,
      label: 'Responsive Design',
      text: 'I ensure that every website I build is fully responsive, adapting smoothly to any screen size while maintaining design consistency and usability across all devices.',
      id: '1',
    },
    {
      icon: <FaCode />,
      label: 'Frontend Developer',
      text: 'I build fast, modern web applications using React, Next.js, TypeScript, and Redux. My focus is on reusability, performance, and writing clean, maintainable code',
      id: '2',
    },
    {
      icon: <MdDesignServices />,
      label: 'UI/UX Design',
      text: 'Implementing UI/UX designs with attention to responsiveness, usability, accessibility, and clean structure.',
      id: '3',
    },
    {
      icon: <TbDeviceLaptop />,
      label: 'Web Design',
      text: 'planning, conceptualizing, and arranging content online. designing website include the website’s overall functionality, web apps and user interface design.',
      id: '4',
    },
  ]);

  return (
    <>
      <div className="container my-20 px-4" id="services">
        <div className="top-title">
          <h2 className="text-primary mx-auto w-fit cursor-pointer text-center text-4xl font-bold dark:text-[#ADFF2F]">
            Services
          </h2>
          <div className="my-16 grid grid-cols-1 gap-10 sm:grid-cols-2">
            {Data.map((item) => (
              <Serviceitems key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
