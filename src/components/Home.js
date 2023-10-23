import React from 'react';
import '../styles/Home.css';

const Home = () => (
  <div className="header" id="home">
    <div className="presentation">
      <h1>Hello &#128075;, Welcome to my world!</h1>
      <p className="about-me">
          I&apos;m
        <span>
           Marie-Grace Bahati
        </span>
        ,
        <br />
        a passionate Full Stack Developer.
      </p>
        <a href="#projects">See my projects</a>
    </div>
  </div>
);

export default Home;
