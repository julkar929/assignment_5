import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import technologiesData from './data/technologies.json';
import type { Tech } from './types';
import YourStack from './components/YourStack';
import { ToastContainer, toast } from 'react-toastify';

function App() {
   const [technologies, setTechnologies] = useState<Tech[]>([]);
   const [stack, setStack] = useState<Tech[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setTechnologies(technologiesData as Tech[]);
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const addToStack = (tech: Tech) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warn(`${tech.name} is already in your stack!`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const removeFromStack = (id: string) => {
    const removed = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (removed) {
      toast.info(`${removed.name} removed from your stack.`);
    }
  };

  const removeAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.info('All technologies removed from stack.');
  };

  
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore the <span className="brand-gradient-text">Technologies</span>
        </h2>

        <p className="text-gray-500 mt-2">
          Pick one technology per category to build your ideal stack.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
        {loading ? (
              <div className="flex flex-col items-center justify-center h-64 gap-3">
                <div className="w-10 h-10 border-4 border-gray-200 border-t-pink-500 rounded-full animate-spin" />
                <p className="text-gray-400 text-sm">Loading technologies...</p>
              </div>
            ) : (
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
        )}
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

      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}

export default App;