import "./projects.css";

import React from 'react'

const Projects = () => {
  return (
    <div className='projects'>
        <div className="typography">
            <h1>Project Showcase</h1>
            <h3>From Concept to Completion</h3>
        </div>
        
        <div className="row">
            <div className="column">
            <div className="project" onClick={() => window.open('https://www.linkedin.com/feed/update/urn:li:activity:7255465582169399297/', '_blank')}>
                <img src="/football.png" alt="Football Analysis Project"/>
                <h4>Football Analysis Project</h4>
                <p>Developed algorithms to analyze player performance and team dynamics using YOLO, OpenCV, and ByteTracker for real-time player identification and tracking.</p>
            </div>
            </div>
    
            <div className="column">
            <div className="project" onClick={() => window.open('https://github.com/chiragrawat/Harjas-Uday', '_blank')}>
                <img src="/robot.jpg" alt="Resume Screening Bot"/>
                <h4>Resume Screening Bot</h4>
                <p>Created an automated bot to screen resumes based on keywords and experience, integrated with Microsoft Forms to streamline HR efficiency.</p>
            </div>
            </div>
    
            <div className="column" >
            <div className="project" onClick={() => window.open('https://brainwave-xxs9.onrender.com', '_blank')}>
                <img src="/brainwave.jpg" alt="Brainwave Website Design"/>
                <h4>Brainwave Website Design</h4>
                <p>Designed a modern, user-centric website with a bentobox layout and responsive design, using Material-UI for enhanced styling and usability.</p>
            </div>
            </div>
    
        </div>
      
    </div>
  )
}

export default Projects;
