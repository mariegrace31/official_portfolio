import React, { useState } from 'react';
import { FaRegWindowClose, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import bookstore from '../assets/bookstore.JPG';
import mealGallery from '../assets/mealGallery screeshot.png';
import calculator from '../assets/Capture2.JPG';
import airPollution from '../assets/Capture1.JPG';
import budgetBuddy from '../assets/budgetBuddy.JPG';
import toDo from '../assets/to-do.JPG';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: 'Budget Buddy',
      tech: ['Ruby on Rails', 'postgreSQL', 'Tailwind'],
      image: budgetBuddy,
      description: 'Budget Buddy is a web application where you can manage your budget; You have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
      liveDemo: 'https://budgetbuddy239.onrender.com/',
      githubLink: 'https://github.com/mariegrace31/budgetBuddy',
    },
    {
      id: 2,
      title: 'Air Pollution',
      tech: ['React', 'Redux', 'HTML', 'SASS'],
      image: airPollution,
      description: 'Air Pollution is about a mobile web application to check a list of metrics(in this case,air pollution data)',
      liveDemo: 'https://airpollution1.netlify.app/',
      githubLink: 'https://github.com/mariegrace31/react_capstone',
    },
    {
      id: 3,
      title: 'Bookstore',
      tech: ['React', 'Redux', 'HTML', 'CSS'],
      image: bookstore,
      description: 'Bookstore is a web application that displays a list of books, and it allows you to add and to remove a book.',
      liveDemo: 'https://mg-bookstore.netlify.app/',
      githubLink: 'https://github.com/mariegrace31/bookstore',
    },
    {
      id: 4,
      title: 'Meal Gallery',
      tech: ['HTML', 'Javascript', 'CSS'],
      image: mealGallery,
      description: 'Meal Gallery is an innovative app that allows you to discover a variety of delicious meals from around the world. Whether you are an experienced chef or simply a food enthusiast, this app is perfect for you.',
      liveDemo: 'https://mariegrace31.github.io/Meal_Gallery/dist/',
      githubLink: 'https://github.com/mariegrace31/Meal_Gallery',
    },
    {
      id: 5,
      title: 'To-do list',
      tech: ['HTML', 'Javascript', 'CSS'],
      image: toDo,
      description: 'This is a responsive To-Do list app where you can add tasks, delete and/or edit them.',
      liveDemo: 'https://bag-to-do-list.netlify.app/',
      githubLink: 'https://github.com/mariegrace31/bag-to-do-list-app',
    },
    {
      id: 6,
      title: 'Math magicians',
      tech: ['React', 'HTML', 'CSS'],
      image: calculator,
      description: 'Budget Buddy is a web application where you can manage your budget; You have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
      liveDemo: 'https://mathmagiciens.netlify.app/calculator',
      githubLink: 'https://github.com/mariegrace31/math_magicians',
    },
  ];

  const [modal, setModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleModal = (project) => {
    setModal(!modal);
    setSelectedProject(project);
  };

  return (
    <div className="container" id="projects">
      <h2>PROJECTS</h2>
      <hr className="underline" />
      <div className="project-container">
        {projectData.map((projectItem) => (
          <div className="Project" key={projectItem.id}>
            <h4>{projectItem.title}</h4>
            <img src={projectItem.image} alt={projectItem.title} />
            <ul>
              {projectItem.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <button onClick={() => toggleModal(projectItem)} type="button" className="see-project">
              See this project
            </button>
          </div>
        ))}
      </div>

      {modal && selectedProject && (
        <div className="modal">
          <button type="button" onClick={() => toggleModal(null)}>
            <FaRegWindowClose className="CloseModal" />
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
            <FaExternalLinkAlt className="livedemo" />
          </a>
          <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
            Source
            <FaGithub className="Github" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Projects;
