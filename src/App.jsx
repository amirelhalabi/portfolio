import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-blue-500 selection:text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-xl tracking-tighter">AEH</span>
          <div className="flex gap-6 text-sm font-medium text-gray-300">
            <a href="#hero" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Experience</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Projects />
      </main>

      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} Amir El Halabi. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
