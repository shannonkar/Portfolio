import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Education from './components/Education';
import Experience from './components/Experience';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="container">
      <Navbar />
      <About />
      <TechStack />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
