import React from 'react';
import { motion } from 'framer-motion';

const SkillCategory = ({ category, skills, index }) => (
  <motion.div 
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <h3 className="text-2xl font-semibold mb-4 text-gray-800">{category}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, skillIndex) => (
        <span key={skillIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-all duration-300">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export default SkillCategory;
