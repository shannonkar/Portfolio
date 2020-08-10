import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Technologies from './components/Technologies';

function App() {
  return (
    <div className="container">
      <Navbar />
      <About />
      <Technologies />
       <Projects />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
