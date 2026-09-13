import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import technologiesData from './data/technologies.json';
import type { Tech } from './types';
import YourStack from './components/YourStack';

function App() {
   const [technologies, setTechnologies] = useState<Tech[]>([]);
   const [stack, setStack] = useState<Tech[]>([]);

   useEffect(() => {
    setTechnologies(technologiesData as Tech[]);
  }, []);

  const addToStack = (tech: Tech) => {
    if (stack.some((item) => item.id === tech.id)) return;
    setStack((prev) => [...prev, tech]);
  };

  const removeFromStack = (id: string) => {
    setStack((prev) => prev.filter((item) => item.id !== id));
  };

  const removeAll = () => {
    setStack([]);
  };

  
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore the <span className="brand-gradient-text">Technologies</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <TechCard
              key={tech.id}
              tech={tech}
              onAdd={addToStack}
              isAdded={stack.some((item) => item.id === tech.id)}
            />
          ))}
          </div>
          </div>
          <div className="lg:col-span-1">
            <YourStack
              stack={stack}
              onRemove={removeFromStack}
              onRemoveAll={removeAll}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;