import React from 'react';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="bg-[#0f0720] text-white min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="text-center py-6 text-gray-500 bg-[#0f0720] border-t border-purple-950">
        © 2026 Your Name. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;