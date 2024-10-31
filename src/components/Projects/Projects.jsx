import { useState } from 'react';
import { Carousel } from 'react-responsive-3d-carousel';
import './Projects.css'; 
import { motion } from "framer-motion";
import { FadeRight } from "../../utility/animation";

import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const projectData = [
  {
    id: 1,
    image: "/src/assets/WebSamples/PortfolioWebsitev1.png",
    title: "My Portfolio website version 1",
    description: "Crafted with Vanilla JS, HTML, CSS, and Bootstrap, this dynamic portfolio showcases my journey into web development. A sleek, responsive design and interactive elements make this site a memorable first project.",
    technologies: ["BootStrap", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/BobchopGaming/myprofile.io",
    live: "https://bobchopgaming.github.io/myprofile.io/"
  },
  
  {
    id: 2,
    image: "/src/assets/WebSamples/NataliaApp.gif",
    title: "Natalia Baby Educational WebApp",
    description: "A special web app crafted for my baby, featuring unique mini educational games and quizzes I developed, alongside curated YouTube educational videos. Built with React and Tailwind, this fully responsive app includes a custom modal video player for a seamless learning experience across all devices.",
    technologies: ["React", "JavaScript", "RESTful API", "Tailwind", "Framer-Motion"],
    github: "https://github.com/BobchopGaming/NataliaApp2",
    live: "https://example.com/live"
  },
  {
    id: 3,
    image: "/src/assets/WebSamples/TrailerTube.gif",
    title: "Trailer Tube",
    description: "TrailerTube is an interactive website I developed that pulls data from TMDB, enabling users to search for movies and shows. Discover the top trending films, view ratings, and watch trailers to help decide what to watch next. Experience movie exploration like never before with my user-friendly platform.",
    technologies: ["BootStrap", "JavaScript", "HTML", "CSS", "RESTful API"],
    github: "https://github.com/BobchopGaming/API_TrailerFlix/blob/main/index.html",
    live: "https://example.com/live"
  },
  {
    id: 4,
    image: "/src/assets/WebSamples/TaskNest.gif",
    title: "TaskNest Admin Dashboard",
    description: "TaskNest is an intuitive Admin Dashboard I created, featuring a weather widget, stock tracker, calendar, to-do app, and email integration. Built with React, Material UI, and Tailwind CSS, this user-friendly platform streamlines productivity, providing essential tools all in one place for efficient task management",
    technologies: ["React", "Material-UI", "JavaScript", "Tailwind"],
    github: "https://github.com/BobchopGaming/AdminDashboard",
    live: "https://example.com/live"
  },
  {
    id: 5,
    image: "/src/assets/WebSamples/ChefNataliaRecipe.gif",
    title: "Chef Natalia Recipe Web App",
    description: "Chef Natalia Recipe Web App is a culinary companion that lets users search for recipes by meal type, category, and preparation steps. With an intuitive interface, it simplifies discovering delicious dishes and exploring diverse cuisines. Fully responsive and interactive, it’s crafted to inspire any home chef’s next creation.",
    technologies: ["React", "Tailwind", "Framer-motion", "JavaScript", "RESTful API"],
    github: "https://github.com/BobchopGaming/RecipeApp",
    live: "https://example.com/live"
  },
  {
    id: 6,
    image: "/src/assets/WebSamples/MilitaryStyleCountrySearch.png",
    title: "Military-Themed Country Flag Web App",
    description: "Military-Themed Country Flag Web App: Built with Vanilla JS and Bootstrap, this unique app pulls data from a Country Flag API to showcase flags and country information in a military-inspired theme. It’s a straightforward yet impactful project highlighting clean design and efficient data retrieval for an engaging, themed experience.",
    technologies: ["CSS", "JavaScript", "HTML", "BootStrap", "RESTful API"],
    github: "https://github.com/BobchopGaming/API_Country",
    live: "https://example.com/live"
  },
  {
    id: 7,
    image: "/src/assets/WebSamples/Gameboy-PokiApp.png",
    title: "Gameboy-Themed Pokie Search App",
    description: "Gameboy-Themed Pokie Search App: This nostalgic app is styled to mimic the classic Nintendo Gameboy, allowing users to search and explore Pokémon data with a retro vibe. Built with Vanilla JS and Bootstrap, it pulls live data from the Pokémon API, offering a fun blend of modern data and retro design.",
    technologies: ["React", "JavaScript", "HTML", "Tailwind"],
    github: "https://github.com/BobchopGaming/API_POKI",
    live: "https://example.com/live"
  },
  // Add more projects as needed...
];

const Sample = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="relative min-h-[700px]" id='projects'>
        <div className="container mx-auto px-4 grid grid-cols-1 space-y-10 pt-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-wide text-center">
          View My Project <span className="text-primary">Showcase</span>
            </h1>
          <div className="carousel-container">
            <Carousel itemsToShow={2} itemsToScroll={1} pagination={false}>
              {projectData.map((project) => (
                <div key={project.id} className="carousel-item" onClick={() => openModal(project)}>
                  <img src={project.image} alt={project.title} className="carousel-image" />
                  <h3>{project.title}</h3>
                </div>
              ))}
            </Carousel>

            {selectedProject && (
              <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={closeModal}>
                <div
                  className="relative bg-white rounded-lg shadow-lg w-11/12 max-w-lg p-6 transform transition-all duration-300 ease-in-out"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button Icon in Top Right Corner */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
                  >
                    <FaTimes size={20} />
                  </button>

                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-auto rounded-md mb-4" />
                  
                  <h2 className="text-center text-lg font-semibold text-gray-800 mb-2">{selectedProject.title}</h2>
                  <p className="text-center text-gray-700 mb-4">{selectedProject.description}</p>

                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-500 text-white text-xs font-semibold py-1 px-3 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
      </div>

      <div className="flex justify-center space-x-6 my-4">
        <a
          href={selectedProject.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center  bg-primary text-white py-2 px-4 rounded-md transition duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          <FaGithub className="mr-2 animate-bounce" /> GitHub Repo
        </a>
        <a
          href={selectedProject.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-primary text-white py-2 px-4 rounded-md transition duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          <FaExternalLinkAlt className="mr-2 animate-bounce" /> Live website
        </a>
      </div>
    </div>
  </div>
)}


        </div>
        </div>  
    </section>  
  );
};

export default Sample;
