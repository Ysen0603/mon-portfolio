import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
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
              <NavLink key={item.name} to={item.path} isActive={location.pathname === item.path}>
                {item.name}
              </NavLink>
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
              <NavLink key={item.name} to={item.path} isActive={location.pathname === item.path} onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </NavLink>
            ))}
            <div className="flex space-x-4 pt-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

const NavLink = ({ to, children, isActive, onClick }) => {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={`block text-gray-600 hover:text-gray-800 transition-colors duration-300 ${isActive ? 'font-semibold' : ''}`}
    >
      {children}
    </Link>
  );
};

export default Header;
