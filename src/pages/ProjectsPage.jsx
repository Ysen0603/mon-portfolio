import React from 'react';
import Projects from '../components/Projects';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const ProjectsPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white text-gray-800 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200 opacity-30"></div>
      <div className="absolute inset-0 backdrop-blur-[50px]"></div>
      
      

      <Projects 
        title="Mes Projets"
        description="Découvrez une sélection de mes projets les plus récents et innovants. Chaque projet démontre mes compétences en développement et ma passion pour la création d'applications web modernes."
        projects={projectsData}
      />
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900">Envie d'en savoir plus ?</h2>
        <div className="flex justify-center space-x-4">
          <Link to="/contact" className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:from-gray-800 hover:to-gray-950 transition-all duration-300">
            Me contacter
          </Link>
          <Link to="/skills" className="border-2 border-gray-700 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300">
            Voir mes compétences
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
