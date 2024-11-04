import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaHome, FaUser, FaProjectDiagram, FaTools, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: <FaHome />, path: '/' },
    { name: <FaUser />, path: '/about' },
    { name: <FaProjectDiagram />, path: '/projects' },
    { name: <FaTools />, path: '/skills' },
    { name: <FaEnvelope />, path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300">
            YE
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className={`flex items-center ${location.pathname === item.path ? 'text-gray-800' : 'text-gray-600'}`}>
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/yassine-ennaya-07aab71b5" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
          </div>

          <button 
            className="md:hidden text-gray-600 hover:text-gray-800 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className={`flex items-center ${location.pathname === item.path ? 'text-gray-800' : 'text-gray-600'}`} onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
            <div className="flex space-x-4 pt-4">
              <a href="https://github.com/Ysen0603?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                <FaGithub size={24} />
              </a>
              <a href="www.linkedin.com/in/yassine-ennaya-07aab71b5" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;
