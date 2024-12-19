import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/navigation/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <footer className="py-6 text-center text-gray-500">
          <p>© 2024 Aryan Kumar Pandey. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;