import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Projects = ({ title, description, projects }) => {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900"
        >
          {title}
        </motion.h2>
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl text-center max-w-3xl mx-auto mb-16 text-gray-600"
        >
          {description}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                <p className="mb-4 text-gray-600">{project.description}</p>
                <Link to={`/projects/${project.id}`} className="inline-block bg-gray-700 text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300">
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
