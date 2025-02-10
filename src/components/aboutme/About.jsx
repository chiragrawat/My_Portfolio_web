

import "./about.css";

import React from 'react';

const About = () => {
  return (
    <div className='about'>
          <h1>About Me</h1>
      <div className="container">
     
        <div className="text-section">
       
          <p>
            Hi, I'm Chirag Rawat, an Electrical Engineering student at Punjab Engineering College with a passion for
            programming, web development, and machine learning. I have experience in C++, Python, JavaScript, React,
            and OpenCV. I love building innovative solutions and applying my technical skills to real-world challenges.
          </p>
          
          <br />
          
          <p>
            I have worked on projects involving computer vision, automation, and web development. From creating
            AI-powered football analysis tools to developing resume screening bots, my work focuses on solving
            problems efficiently and creatively.
          </p>
          <br />
            
          <p>
            I am also deeply interested in backend technologies including WebSockets, Pub/Sub architecture, message queues,
            Redis, microservices architecture, and system design. I enjoy optimizing system performance and designing scalable,
            high-performance applications.
          </p>
          <br />
           
          <p>
            When I’m not coding, you can find me exploring new tech, participating in hackathons, or enjoying a game of
            football and skateboarding.
          </p>
        </div>
        <div className="image-section">
          <img src="/hack.jpg" alt="Chirag Rawat" />
        </div>
      </div>
    </div>
  );
};

export default About;
