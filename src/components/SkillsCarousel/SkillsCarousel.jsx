import React, { useEffect, useRef } from 'react';
import 'devicon/devicon.min.css';
import { section } from 'framer-motion/client';
import { motion } from "framer-motion";
import { FadeRight } from "../../utility/animation";

const techSkills = [
  { name: 'HTML5', iconClass: 'devicon-html5-plain', color: '#E34F26' },
  { name: 'CSS3', iconClass: 'devicon-css3-plain', color: '#1572B6' },
  { name: 'JavaScript', iconClass: 'devicon-javascript-plain', color: '#F7DF1E' },
  { name: 'React', iconClass: 'devicon-react-original', color: '#61DAFB' },
  { name: 'TailwindCSS', iconClass: 'devicon-tailwindcss-plain', color: '#38B2AC' },
  { name: 'Bootstrap', iconClass: 'devicon-bootstrap-plain', color: '#7952B3' },
  { name: 'Material-UI', iconClass: 'devicon-materialui-plain', color: '#0081CB' },
  { name: 'Node.js', iconClass: 'devicon-nodejs-plain', color: '#339933' },
  { name: 'MongoDB', iconClass: 'devicon-mongodb-plain', color: '#47A248' },
  { name: 'Express.js', iconClass: 'devicon-express-original', color: '#000000' },
  { name: 'Git', iconClass: 'devicon-git-plain', color: '#F05032' },
  { name: 'GitHub', iconClass: 'devicon-github-original', color: '#181717' },
  { name: 'VSCode', iconClass: 'devicon-vscode-plain', color: '#007ACC' },
  { name: 'Netlify', iconClass: 'devicon-netlify-plain', color: '#00C7B7' },
  { name: 'Vercel', iconClass: 'devicon-vercel-plain', color: '#000000' },
];

const SkillsCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const scrollSpeed = 1;
    const carousel = carouselRef.current;

    const animateScroll = () => {
      if (carousel) {
        carousel.scrollLeft += scrollSpeed;
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
          carousel.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(animateScroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[600px] px-4 md:px-0" id="skills">
        <div className="container mx-auto px-4 grid grid-cols-1 space-y-10 pt-10">
          <motion.h1
                  variants={FadeRight(0.6)}
                  initial="hidden"
                  animate="visible"
                  className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-wide text-center" 
                >
                  Skills & Tech-<span className="text-primary">Stacks</span>
          </motion.h1>
          <div
            ref={carouselRef}
            className="flex overflow-x-auto space-x-8 py-12 px-6 scrollbar-hide"
            style={{ perspective: '1000px' }}
          >
            {techSkills.map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-48 bg-opacity-90 rounded-xl shadow-xl transition-transform transform-gpu hover:scale-125 hover:-rotate-12 hover:shadow-2xl cursor-pointer"
                style={{
                  backgroundColor: skill.color,
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5), 0 12px 30px rgba(0, 0, 0, 0.4)',
                }}
              >
                <div className="flex flex-col items-center justify-center h-full p-4 text-white">
                  <i
                    className={`${skill.iconClass} text-6xl mb-2 transition-transform duration-300`}
                    style={{ filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.5))' }}
                  ></i>
                  <p className="text-lg font-bold text-center">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>    
    </section>
  );

};

export default SkillsCarousel;
