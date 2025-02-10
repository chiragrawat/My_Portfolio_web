import React, { useState } from 'react';
import './navbar.css';
import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';
import Links from '../sidebar/Links';

const Navbar = ({ homeRef, aboutRef, skillsRef, projectsRef, contactRef }) => {
  const [Hamburger, setHamburger] = useState(true);

  const handleToggle = () => {
    setHamburger(!Hamburger);
  };

  return (
    <>
      {!Hamburger && <Links homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef}  Hamburger={Hamburger} toggle={handleToggle} />}
      <div className="navbar">
        <div className="sidebar">
          {Hamburger && <Sidebar Hamburger={Hamburger} toggle={handleToggle} />}
        </div>

        <div className="wrapper">
          <span
            
          >
            Chirag 
            </span>
          <div className="socials">
            <a
              href="./Chirag_Resume_SDE.pdf"
              target="_blank"
              rel="noreferrer"
            >
            <i class="fa-regular fa-circle-down fa-xl"></i>

            </a>
            <a
              href="https://www.instagram.com/jerkyhead_x/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram fa-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/chirag-rwt/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin fa-xl"></i>
            </a>
          
            <a
              href="https://github.com/chiragrawat"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github fa-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
