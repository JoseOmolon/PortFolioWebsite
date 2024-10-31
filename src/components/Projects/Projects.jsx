import { useState } from 'react';
import { Carousel } from 'react-responsive-3d-carousel';
import './Projects.css'; // Make sure to link your CSS file

import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const projectData = [
  {
    id: 1,
    image: "/src/assets/WebSamples/sample1.webp",
    title: "Beautiful Spring Garden",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    technologies: ["React", "JavaScript", "HTML", "Tailwind"],
    github: "https://github.com/example/repo",
    live: "https://example.com/live"
  },
  // Repeat this object with different IDs or images as needed
  // Example below:
  {
    id: 2,
    image: "/src/assets/WebSamples/sample2.webp",
    title: "Beautiful Spring Garden",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    technologies: ["React", "JavaScript", "HTML", "Tailwind"],
    github: "https://github.com/example/repo",
    live: "https://example.com/live"
  },
  {
    id: 3,
    image: "/src/assets/WebSamples/sample3.jpg",
    title: "Beautiful Spring Garden",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    technologies: ["React", "JavaScript", "HTML", "Tailwind"],
    github: "https://github.com/example/repo",
    live: "https://example.com/live"
  },
  {
    id: 4,
    image: "/src/assets/WebSamples/sample4.jpg",
    title: "Beautiful Spring Garden",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    technologies: ["React", "JavaScript", "HTML", "Tailwind"],
    github: "https://github.com/example/repo",
    live: "https://example.com/live"
  },
  {
    id: 5,
    image: "/src/assets/WebSamples/sample5.png",
    title: "Beautiful Spring Garden",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    technologies: ["React", "JavaScript", "HTML", "Tailwind"],
    github: "https://github.com/example/repo",
    live: "https://example.com/live"
  },
  {
    id: 6,
    image: "/src/assets/WebSamples/sample6.png",
    title: "Beautiful Spring Garden",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    technologies: ["React", "JavaScript", "HTML", "Tailwind"],
    github: "https://github.com/example/repo",
    live: "https://example.com/live"
  },
  {
    id: 7,
    image: "/src/assets/WebSamples/sample7.png",
    title: "Beautiful Spring Garden",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    technologies: ["React", "JavaScript", "HTML", "Tailwind"],
    github: "https://github.com/example/repo",
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
