import React from "react";
import bookstore from '../assets/bookstore.JPG';
import mealGallery from '../assets/mealGallery screeshot.png';
import calculator from '../assets/Capture2.JPG';
import airPollution from '../assets/Capture1.JPG';
import budgetBuddy from '../assets/BuggetBuddy.JPG';
import toDo from '../assets/to-do.JPG';

const Projects = () => {
  const project = [
    {
      id: 1,
      title: 'Budget Buddy',
      tech: ['Ruby on Rails', 'postgreSQL', 'Tailwind'],
      image: budgetBuddy,
      description: 'Budget Buddy is a web application where you can manage your budget; You have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
      liveDemo: 'https://budgetbuddy31-f5f6aae993d8.herokuapp.com/',
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
  <div className="projects-container" id="projects">
    <h2>PROJECTS</h2>
    <div> </div>
    <hr className="underline"/>
  </div>
}

export default Projects;
