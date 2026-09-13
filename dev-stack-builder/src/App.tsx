import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import technologiesData from './data/technologies.json';
import type { Tech } from './types';

function App() {
   const [technologies, setTechnologies] = useState<Tech[]>([]);

   useEffect(() => {
    setTechnologies(technologiesData as Tech[]);
  }, []);
  
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore the <span className="brand-gradient-text">Technologies</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
          {technologies.map((tech) => (
            <TechCard
              key={tech.id}
              tech={tech}
              onAdd={() => {}}
              isAdded={false}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;