import React from 'react';
import SkillCategory from './SkillCategory';
import { motion } from 'framer-motion';

const Skills = ({ title, description, skillCategories, certifications }) => {
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
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <SkillCategory key={category} category={category} skills={skills} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-white rounded-lg p-8 shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-4">
                <h4 className="text-lg font-medium text-gray-800">{cert.name}</h4>
                <p className="text-gray-600">Obtenue en {cert.year}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
