import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import Slider from 'react-slick';

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = projectsData;

  const skills = ["JavaScript", "Python", "FastAPI", "React", "React Native", "NextJS", "Expo", "HTML5", "CSS3", "Git", "VScode", "Jupyter Notebook", "Linux",];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200 opacity-30"></div>
      <div 
        className="absolute inset-0 backdrop-blur-[50px]"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(229, 231, 235, 0.3) 0%, transparent 20%)`
        }}
      ></div>

      

      <main className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900"
            >
              YASSINE ENNAYA
            </motion.h1>
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl mb-8 text-gray-600"
            >
              Full Stack Developer | Technological Innovator
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Link to="/contact" className="inline-block bg-gradient-to-r from-gray-600 to-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-gray-700 hover:to-gray-900 transition-all duration-300 transform hover:scale-105">
                Let's Collaborate
              </Link>
            </motion.div>
          </div>
          <div className="md:w-1/2 relative">
            <motion.img 
              src="/Picture1.png" 
              alt="Yassine Ennaya" 
              className="w-64 h-64 object-cover rounded-full border-4 border-gray-500 shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 rounded-full blur opacity-30 group-hover:opacity-45 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          </div>
        </div>

        <motion.div 
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 rounded-full px-4 py-2 text-sm font-semibold"
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900">Innovative Projects</h2>
          <div className="w-full max-w-6xl mx-auto">
            <Slider {...sliderSettings}>
              {projects.map((project, index) => (
                <div key={project.id} className="px-4">
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">{project.title}</h3>
                        <p className="text-gray-600 mb-6">{project.description}</p>
                        <p className="text-gray-500 mb-6">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                              {tech.name}
                            </span>
                          ))}
                        </p>
                        <Link to={`/projects/${project.id}`} className="inline-block bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                          Discover Project
                        </Link>
                      </div>
                      <div className="md:w-1/2">
                        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg shadow-lg" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Home;
