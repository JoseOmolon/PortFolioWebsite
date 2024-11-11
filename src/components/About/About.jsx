import { motion } from "framer-motion";
import {FadeRight} from "../../utility/animation"
import PhotoBGAvatar from "/public/assets/WebSamples/PhotoBGAvatar.png";

const About = () => {
  return (
    <section className="relative min-h-[850px] px-4 md:px-0" id="about-me"> {/* Added padding for mobile */}
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[800px] relative mx-auto"> {/* Centered the container */}

        {/* About Image */}
        <div className="flex justify-center items-center py-10"> {/* Added vertical padding */}
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            src={PhotoBGAvatar}
            alt="Jose Omolon"
            className="w-[350px] md:w-[550px] drop-shadow-lg" // Increased shadow for better visibility
          />
        </div>

        {/* About Info */}
        <div className="flex flex-col justify-center py-10 md:py-0 relative z-10"> {/* Added padding to match the image */}
          <div className="text-center md:text-left space-y-6 lg:max-w-[600px] mx-auto"> {/* Centered with auto margin */}
            <motion.h1
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-wide" // Color applied
            >
              About <span className="text-primary">Me</span>
            </motion.h1>
            <motion.p
              variants={FadeRight(0.9)}
              initial="hidden"
              animate="visible"
              className="text-lg font-semibold tracking-wide"
            >
              Reading time: 2 minutes
            </motion.p>
            <br />
            <motion.p
              variants={FadeRight(1.2)}
              initial="hidden"
              animate="visible"
              className="text-base font-extralight"
            >
              Hello! I’m <strong>Jose Omolon</strong>, a passionate Full-Stack Developer with a focus on Front-End technologies and UX/UI design. My journey into the tech world has been anything but conventional, driven by my unwavering determination to create impactful web experiences.
            </motion.p>
            <br />
            <motion.p
              variants={FadeRight(1.5)}
              initial="hidden"
              animate="visible"
              className="text-base font-extralight"
            >
              With a background in technical support for renowned companies like <strong>Xbox</strong> and <strong>Smartfrog</strong>, I have honed my problem-solving skills and developed a deep understanding of user needs. After completing a rigorous bootcamp in web development, I embarked on a mission to master modern technologies like <strong>React</strong> and <strong>TypeScript</strong>. My goal is to become a proficient Full-Stack MERN developer, with plans to transition into Native React and embedded development.
            </motion.p>
            <br />
            <motion.p
              variants={FadeRight(1.8)}
              initial="hidden"
              animate="visible"
              className="text-base font-extralight"
            >
              Beyond coding, I have a keen interest in <strong>building PCs</strong>, exploring <strong>VR development</strong>, and creating my own operating systems. I strive to stay fit and healthy, embodying qualities of strength and resilience akin to my role models, such as <strong>Kobe Bryant</strong> and <strong>David Goggins</strong>.
            </motion.p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
