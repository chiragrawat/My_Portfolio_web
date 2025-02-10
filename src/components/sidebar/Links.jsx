import React from 'react';
import { motion } from 'framer-motion';
import './links.css';

const Links = ({ homeRef, aboutRef, skillsRef, projectsRef, contactRef, toggle }) => {
  // Function to handle the scroll action
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <motion.div
      className="links"
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <div className="crossbar" onClick={toggle}>
        <i className="fa-solid fa-xmark fa-xl" style={{ color: 'black' }}></i>
      </div>
      <div className="options">
        <div className="option" onClick={() => { handleScroll(homeRef); toggle(); }}>
          <a href="#home">HOME</a>
        </div>
        <div className="option" onClick={() => { handleScroll(aboutRef); toggle(); }}>
          <a href="#about">ABOUT</a>
        </div>
        <div className="option" onClick={() => { handleScroll(skillsRef); toggle(); }}>
          <a href="#service">SKILLS</a>
        </div>
        <div className="option" onClick={() => { handleScroll(projectsRef); toggle(); }}>
          <a href="#project">PROJECTS</a>
        </div>
        <div className="option" onClick={() => { handleScroll(contactRef); toggle(); }}>
          <a href="#contact">CONTACT ME</a>
        </div>
      </div>
    </motion.div>
  );
};

export default Links;
