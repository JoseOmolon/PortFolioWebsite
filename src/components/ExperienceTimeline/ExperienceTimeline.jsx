import React, { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaReact, FaCss3Alt, FaHtml5, FaJsSquare, FaPhp, FaDatabase, FaPaintBrush } from 'react-icons/fa';
import { SiTailwindcss, SiLaravel, SiMongodb } from 'react-icons/si';

const experiences = [
  {
    date: '2024 - Present',
    title: 'Freelance Web Developer',
    subtitle: 'Empowering Small Businesses',
    description: (
      <>
        Providing tailored web development solutions for various clients, including e-commerce stores, dental clinics, and tattoo shops.
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="flex items-center bg-blue-100 text-blue-600 px-2 py-1 rounded shadow-md">
            <FaReact className="mr-1" /> React
          </span>
          <span className="flex items-center bg-blue-100 text-blue-600 px-2 py-1 rounded shadow-md">
            <SiTailwindcss className="mr-1" /> Tailwind CSS
          </span>
          <span className="flex items-center bg-blue-100 text-blue-600 px-2 py-1 rounded shadow-md">
            <FaCss3Alt className="mr-1" /> CSS3
          </span>
          <span className="flex items-center bg-blue-100 text-blue-600 px-2 py-1 rounded shadow-md">
            <FaHtml5 className="mr-1" /> HTML5
          </span>
          <span className="flex items-center bg-blue-100 text-blue-600 px-2 py-1 rounded shadow-md">
            <FaJsSquare className="mr-1" /> JavaScript
          </span>
          <span className="flex items-center bg-blue-100 text-blue-600 px-2 py-1 rounded shadow-md">
            <FaPhp className="mr-1" /> PHP
          </span>
          <span className="flex items-center bg-blue-100 text-blue-600 px-2 py-1 rounded shadow-md">
            <SiLaravel className="mr-1" /> Laravel
          </span>
          <span className="flex items-center bg-blue-100 text-blue-600 px-2 py-1 rounded shadow-md">
            <SiMongodb className="mr-1" /> MongoDB
          </span>
        </div>
      </>
    ),
    icon: '💻',
  },
  {
    date: '2023 - 2024',
    title: 'Full Stack Web Developer',
    subtitle: '@ WBS Coding School, Berlin',
    description: (
      <>
        Gained Certification and hands-on experience with:
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="flex items-center bg-blue-100 text-blue-600 px-2 py-1 rounded shadow-md">
            <FaHtml5 className="mr-1" /> HTML5
          </span>
          <span className="flex items-center bg-blue-100 text-blue-600 px-2 py-1 rounded shadow-md">
            <FaCss3Alt className="mr-1" /> CSS3
          </span>
          <span className="flex items-center bg-blue-100 text-blue-600 px-2 py-1 rounded shadow-md">
            <FaJsSquare className="mr-1" /> JavaScript
          </span>
          <span className="flex items-center bg-blue-100 text-blue-600 px-2 py-1 rounded shadow-md">
            <FaPaintBrush className="mr-1" /> UX/UI Design
          </span>
          <span className="flex items-center bg-blue-100 text-blue-600 px-2 py-1 rounded shadow-md">
            <FaPhp className="mr-1" /> PHP
          </span>
          <span className="flex items-center bg-blue-100 text-blue-600 px-2 py-1 rounded shadow-md">
            <FaDatabase className="mr-1" /> SQL
          </span>
          <span className="flex items-center bg-blue-100 text-blue-600 px-2 py-1 rounded shadow-md">
            <SiLaravel className="mr-1" /> Laravel
          </span>
        </div>
      </>
    ),
    icon: '🎓',
  },
  {
    date: '2013 - 2023',
    title: 'Tech Support',
    subtitle: '@ Smartfrog Gmbh(Berlin) & Xbox',
    description: 'Provided exceptional tech support, troubleshooting and resolving issues for users, ensuring high levels of customer satisfaction and technical proficiency.',
    icon: '🛠️',
  },
  {
    date: '2018',
    title: 'Bachelor of Science in Business Administration',
    subtitle: '@Cebu Institute of Technology, Philippines',
    description: 'Graduated with a focus on business principles and practices, providing a solid foundation for understanding the tech industry.',
    icon: '🎓',
  },
];

const ExperienceTimeline = () => {
  const [dateColor, setDateColor] = useState('white');

  useEffect(() => {
    // Function to update date color based on viewport width
    const handleResize = () => {
      setDateColor(window.innerWidth <= 1169 ? 'black' : 'white');
    };

    // Set initial color and add resize listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-[600px] px-4 md:px-0" id="experience">
      <div className="py-12 px-6 from-blue-50 to-white shadow-lg">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-wide text-center mb-8">
          Experience <span className="text-primary">Timeline</span>
        </h2>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={<span style={{ color: dateColor }}>{experience.date}</span>}
              iconStyle={{ background: '#3b82f6', color: '#fff' }}
              icon={<span className="text-3xl">{experience.icon}</span>}
            >
              <h3 className="vertical-timeline-element-title text-xl font-bold text-blue-700 text-center">
                {experience.title}
              </h3>
              {experience.subtitle && (
                <h4 className="vertical-timeline-element-subtitle text-gray-600 text-center">
                  {experience.subtitle}
                </h4>
              )}
              <p className="vertical-timeline-element-description text-sm text-gray-700 text-center mt-2">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
