import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile: hamburger + logo */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
            <img src="./logo-text.png" alt="Dev Stack Logo" className="h-8 w-auto" />
          </div>

          {/* Desktop: logo + name */}
          <div className="hidden md:flex items-center gap-2">
            <img src="./logo-text.png" alt="Dev Stack Logo" className="h-9 w-auto" />
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-600 hover:text-pink-500 font-medium transition"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-2">
            <button className="text-gray-700 hover:text-pink-500 font-medium px-2">
              Sign In
            </button>
            <button className="brand-gradient-bg text-white px-4 py-2 rounded-full font-medium text-sm">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block py-2 text-gray-600 hover:text-pink-500"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;