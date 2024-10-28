import { motion } from "framer-motion";
import ProfilePic from '../../assets/ProfilePic.png';

const Hero = () => {
  return (
    <section id="home" className="container flex flex-col md:flex-row items-center min-h-screen space-y-6 md:space-y-0 md:space-x-12 py-20">
      <div className="flex flex-col space-y-6 md:w-1/2 text-center md:text-left">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-wide "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi there, I'm Jose <span className="wave-animation text-6xl">👋</span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-light text-gray-700 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Full-Stack Developer (Front-End Focus) | UX/UI Designer
        </motion.p>
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          I develop responsive web applications.
        </motion.p>
        <div className="flex space-x-6 justify-center md:justify-start">
          <button className="primary-btn">Download Resume</button>
          <button className="primary-btn">Contact Me</button>
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
    </section>
  );
};

export default Hero;
