import './App.css';
import Hero from './components/hero/Hero.jsx';
import Navbar from './components/navbar/Navbar'
import Services from './components/services/Services.jsx';
import Projects from './components/prjoects/Projects.jsx';
import About from './components/aboutme/About.jsx';
import Contact from './components/contact/Contact.jsx';
import { useRef } from 'react';
function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <section ref={homeRef} id="home">
        <Navbar  homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef}/>
        <Hero/>
      </section>
     
      <section ref={aboutRef} id="about"><About/></section>
      <section  ref={skillsRef} id="skills"><Services/></section>
      <section ref={projectsRef}id="project"><Projects/></section>
      <section ref={contactRef} id="contact"><Contact/></section>
    </div>
  );
}

export default App;
