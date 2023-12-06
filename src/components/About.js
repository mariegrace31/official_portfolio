import React from 'react';
import programmingGif from '../assets/ProgrammingGif.gif';

const About = () => (
  <div className="about-section" id="about">
    <h2>About</h2>
    <hr className="underline"/>
    <div className="aboutMe">
      <p>
        I'm Marie-Grace, a tech-loving software engineer who is passionate about coding, problem-solving, and collaborating with global peers to build innovative solutions.
        I strongly believe in lifelong learning that's why I'm always excited about learning new things and improving myself.Feel free to explore my portfolio to see my work and experience.
        If you like what you see and have a project in mind, don't hesitate to <a href="#contact" className="reach">reach out.</a> <br /> <span className="create">Let's create something amazing together!</span>
      </p>
      <img src={programmingGif} alt="Programming GIF" />
    </div>
    <div className="lang-tools">
      <div className="part">
        <h3>Languages and tools</h3>
        <ul>
          <li>Javascript</li>
          <li>Ruby</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>Webpack</li>
        </ul>
      </div>
      <div className="part">
        <h3>Frameworks</h3>
        <ul>
          <li>React</li>
          <li>Ruby on Rails</li>
          <li>Tailwind</li>
          <li>Bootstrap</li>
          <li>Rspec</li>
        </ul>
      </div>
      <div className="part">
        <h3>Tech and soft skills</h3>
        <ul>
        <li>Teamwork</li>
        <li>Pair-programming</li>
        <li>Creativity</li>
        <li>Communication</li>
        <li>Problem-solving</li>
        <li>Adaptability</li>
        </ul>
      </div>
    </div>
  </div>
);

export default About;
