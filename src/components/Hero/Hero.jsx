import { motion } from "framer-motion";
import ProfilePic from '../../assets/ProfilePic.png';
import { BiDownload } from "react-icons/bi";
import { GrContact } from "react-icons/gr";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FadeRight } from "../../utility/animation";
import TypedText from './TypedText'; // Import the new component
import { useState, useEffect } from "react";
import ContactModal from './ContactModal';
import { RiMessage2Line } from "react-icons/ri";
import { FaHandPointUp } from "react-icons/fa6";


const Hero = () => {
  const [showMailIcon, setShowMailIcon] = useState(false);
  const [showScrollUpIcon, setShowScrollUpIcon] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Handle scroll event

  const handleScroll = () => {
    setShowMailIcon(window.scrollY > 300);
    setShowScrollUpIcon(window.scrollY > 300);
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <section id="home" className="container flex flex-col md:flex-row items-center min-h-screen space-y-6 md:space-y-0 md:space-x-12 py-20 dark:text-white font-poppins">
      <div className="flex flex-col space-y-6 md:w-1/2 text-center md:text-left">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi there, I'm Jose <span className="wave-animation">👋</span>
        </motion.h1>
        <br />
        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-light text-gray-700 dark:text-white "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Full-Stack Developer (Front-End Focus) | UX/UI Designer
        </motion.p>
        <br />
        <TypedText /> {/* Use the TypedText component here */}
        <div className="flex space-x-6 justify-center md:justify-start">
          <button className="primary-btn flex items-center space-x-2">
            <span>Download Resume</span>
            <BiDownload />
          </button>
          <button 
          onClick={() => setModalOpen(true)}
          className="primary-btn flex items-center space-x-2">
            <span>Contact Me</span>
            <GrContact />
          </button>
        </div>
        <div className="flex space-x-4 justify-center md:justify-start mt-4">
          <motion.a
            variants={FadeRight(0.9)}
            initial="hidden"
            animate="visible"
            href="https://www.linkedin.com/in/jose-omolon-77b985197/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            variants={FadeRight(1.2)}
            initial="hidden"
            animate="visible"
            href="https://github.com/BobchopGaming"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-white hover:bg-gray-800 transition duration-300"
          >
            <FaGithub />
          </motion.a>
        </div>
      </div>
      <motion.img
        src={ProfilePic}
        alt="Profile Picture"
        className="w-72 md:w-96 lg:w-1/2 drop-shadow-md home-img"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />
      {showMailIcon && (
        <div
          onClick={openModal}
          className="fixed bottom-10 right-10 bg-lime-500 p-4 rounded-full cursor-pointer shadow-lg transition-transform transform hover:scale-110"
        >
          <RiMessage2Line className="text-white text-2xl" />
        </div>
      )}
        {showScrollUpIcon && (
          <div
            onClick={scrollToTop}
            className="fixed bottom-10 left-10 bg-blue-500 p-4 rounded-full cursor-pointer shadow-lg transition-transform transform hover:scale-110"
          >
            <FaHandPointUp className="text-white text-2x l" /> {/* This icon shows when scrolling down */}
          </div>
      )}

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default Hero;
