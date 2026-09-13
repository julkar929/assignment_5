import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';


function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;