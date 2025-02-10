import './services.css';
import React from 'react';

const Services = () => {
  return (
    <div className='services'>
      <div className="typography">
        <h1>Stack Mastery</h1>
        <h3>From Frontend Finesse to Backend Brilliance</h3>
      </div>
      
      <div className="row">
        <div className="column">
          <div className="service">
            <i className="fas fa-layer-group fa-3x"></i>
            <h4>MERN Stack Development</h4>
            <ul>
              <li>MongoDB, Express, React, Node.js</li>
              <li>E-commerce Platforms</li>
              <li>Content Management Systems (CMS)</li>
              <li>Real-time Applications</li>
              <li>Social Media Applications</li>
            </ul>
          </div>
        </div>

        <div className="column">
          <div className="service">
            <i className="fas fa-database fa-3x"></i>
            <h4>Backend Development</h4>
            <ul>
              <li>RESTful API Development</li>
              <li>Database Design & Management</li>
              <li>Server-side Application Development</li>
              <li>Authentication & Authorization Systems</li>
              <li>Microservices Architecture</li>
            </ul>
          </div>
        </div>

        <div className="column">
          <div className="service">
            <i className="fas fa-code fa-3x"></i>
            <h4>Frontend Development</h4>
            <ul>
              <li>Custom Website Development</li>
              <li>Single Page Applications (SPAs)</li>
              <li>Responsive Design Implementation</li>
              <li>Progressive Web Apps (PWAs)</li>
              <li>UI/UX Development</li>
            </ul>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Services;