import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1>Hi, I'm Chirag</h1>
        <h3>
          🚀 Full Stack Developer | ⚙️ Backend Engineering Enthusiast
          <br />
          🔥 Building Scalable Solutions with Efficient Architecture | 💡 Driven
          Problem-Solver
          <br />
          💻 MERN Stack & Beyond | 🛠️ API Design & Microservices | 🚀
          Performance Optimization & System Design
          <br />
          ⚙️ DevOps Practices for Seamless Development and Deployment | 📡
          Streamlining Backend Communication
        </h3>
        <br />
      </div>
      <div className="imag">
        <img className="photo" src="/chirag.png" alt="Chirag's profile" />
      </div>
    </div>
  );
};

export default Hero;
