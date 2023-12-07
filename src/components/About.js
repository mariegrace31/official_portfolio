import React from 'react';
import { FaCode } from 'react-icons/fa6';
import { BiCodeBlock } from 'react-icons/bi';
import { HiLightBulb } from 'react-icons/hi';
import resume from '../assets/resume.pdf';
import '../styles/About.css';

const About = () => (
  <div className="about-section" id="about">
    <h2>About</h2>
    <hr className="underline" />
    <div className="first-part">
      <p>
        I&apos;m Marie-Grace, a tech-loving software engineer who is passionate about coding,
        problem-solving, and collaborating with global peers to build innovative solutions.
        I strongly believe in lifelong learning that&apos;s why I&apos;m always excited about
        learning new things and improving myself.
        Feel free to explore my portfolio to see my work and experience.
        If you like what you see and have a project in mind, don&apos;t hesitate to
        {' '}
        <a href="#contact" className="reach">reach out.</a>
        {' '}
        <br />
        {' '}
        <span className="create">Let&apos;s create something amazing together!</span>
      </p>
      <a href={resume} target="_blank" className="resume" rel="noreferrer">Get my resume</a>
    </div>
    <div className="lang-tools">
      <div className="part">
        <h3>
          <FaCode />
          {' '}
          Languages & tools
        </h3>
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
        <h3>
          <BiCodeBlock />
          Frameworks & libraries
        </h3>
        <ul>
          <li>React</li>
          <li>Ruby on Rails</li>
          <li>Tailwind</li>
          <li>Bootstrap</li>
          <li>Rspec</li>
        </ul>
      </div>
      <div className="part">
        <h3>
          <HiLightBulb className="skills" />
          Tech and soft skills
        </h3>
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
