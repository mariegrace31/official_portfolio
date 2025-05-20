import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import recruitment from '../assets/lkrecruitment.png';
import evogym from '../assets/evogym.png';
import eleka from '../assets/eleka.png';
import airPollution from '../assets/Capture1.JPG';
import budgetBuddy from '../assets/budgetBuddy.JPG';
import '../styles/Projects.css';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: 'LK Recruitment',
      tech: ['Next.Js', 'Tailwind'],
      image: recruitment,
      description: 'Lk Recruitmennt is a temporary work and recruitment agency focused on connecting employers with dependable, skilled candidates. It helps businesses stay productive and individuals find the right job fit.',
      liveDemo: 'https://lkrecruitmentrw.com/',
      githubLink: 'https://github.com/mariegrace31/recruitment_frontend',
    },
    {
      id: 2,
      title: 'Eleka',
      tech: ['Next.Js', 'Typescript', 'Tailwind'],
      image: eleka,
      description: 'Eleka is a modern web application designed to support users in navigating career transitions with confidence. It offers AI-driven career guidance, helping individuals discover paths aligned with their unique strengths, skills, and passions.',
      liveDemo: 'https://elekainc.com/',
      githubLink: 'https://github.com/ElekaEnterprise/frontend',
    },
    {
      id: 3,
      title: 'EvoGym',
      tech: ['React', 'Typescript', 'CSS'],
      image: evogym,
      description: 'EvoGym is about a fitness landing page that offers fitness classes to help you shape your body into the best version of yourself.',
      liveDemo: 'https://yourfitnessapp.netlify.app/',
      githubLink: 'https://github.com/mariegrace31/fitness_app',
    },
    {
      id: 4,
      title: 'Budget Buddy',
      tech: ['Ruby on Rails', 'postgreSQL', 'Tailwind'],
      image: budgetBuddy,
      description: 'Budget Buddy is a web application where you can manage your budget; You have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
      liveDemo: 'https://budgetbuddy239.onrender.com/',
      githubLink: 'https://github.com/mariegrace31/budgetBuddy',
    },
    {
      id: 5,
      title: 'Air Pollution',
      tech: ['React', 'Redux', 'HTML', 'SASS'],
      image: airPollution,
      description: 'Air Pollution is about a mobile web application to check a list of metrics(in this case,air pollution data)',
      liveDemo: 'https://airpollution1.netlify.app/',
      githubLink: 'https://github.com/mariegrace31/react_capstone',
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="container" id="projects">
      <h2>PROJECTS</h2>
      <hr className="underline" />
      <div className="project-container">
        {projectData.map((projectItem) => (
          <div className="Project" key={projectItem.id}>
            <img className="project-img" src={projectItem.image} alt={projectItem.title} />
            <h4>{projectItem.title}</h4>
            <ul>
              {projectItem.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <button onClick={() => openModal(projectItem)} type="button" className="see-project">
              See this project
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="overlay">
          <div className="modal">
            <button type="button" onClick={closeModal} aria-label="Close Modal">
              <IoClose className="CloseModal" />
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <h4>{selectedProject.title}</h4>
            <ul>
              {selectedProject.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <p>{selectedProject.description}</p>
            <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer">
              Live demo
              <FaExternalLinkAlt className="icon" />
            </a>
            <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
              Source
              <FaGithub className="icon" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
