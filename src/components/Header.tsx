import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Globe className="h-8 w-8 text-blue-800" />
            <span className="ml-2 text-xl font-bold text-blue-900">LinguaLeap</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-800 transition-colors">About</a>
            <a href="#speakers" className="text-gray-700 hover:text-blue-800 transition-colors">Speakers</a>
            <a href="#agenda" className="text-gray-700 hover:text-blue-800 transition-colors">Agenda</a>
            <a href="#register" className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Register Now</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-gray-700 hover:text-blue-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#speakers" 
                className="text-gray-700 hover:text-blue-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Speakers
              </a>
              <a 
                href="#agenda" 
                className="text-gray-700 hover:text-blue-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Agenda
              </a>
              <a 
                href="#register" 
                className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                Register Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;