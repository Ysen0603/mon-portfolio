import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectDetail = ({ project }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = ['overview', 'challenges', 'tech-stack', 'gallery'];

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900"
        >
          {project.title}
        </motion.h2>
        
        <div className="flex justify-center mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 mx-2 rounded-full ${
                activeTab === tab
                  ? 'bg-gray-700 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition-all duration-300`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            {activeTab === 'overview' && (
              <div>
                <div className="aspect-w-16 aspect-h-9 mb-8">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg" />
                </div>
                <p className="text-xl mb-6 text-gray-700">{project.description}</p>
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">Key Features</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'challenges' && (
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Challenges & Solutions</h3>
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="mb-6">
                    <h4 className="text-xl font-medium text-gray-800 mb-2">{challenge.title}</h4>
                    <p className="text-gray-700 mb-2">{challenge.description}</p>
                    <p className="text-gray-600"><strong>Solution:</strong> {challenge.solution}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'tech-stack' && (
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Technology Stack</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg p-4 flex items-center">
                      <img src={tech.image} alt={tech.name} className="w-8 h-8 mr-3" />
                      <span className="text-gray-700">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'gallery' && (
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Project Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.gallery.map((image, index) => (
                    <img key={index} src={image} alt={`Project screenshot ${index + 1}`} className="w-full h-48 object-cover rounded-lg hover:opacity-75 transition-opacity duration-300" />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {project.link && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-gray-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              View Live Project
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;
