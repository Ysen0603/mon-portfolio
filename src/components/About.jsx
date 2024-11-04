import React from 'react';
import { motion } from 'framer-motion';

const About = ({ title, description, skills, experiences, education, interests }) => {
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
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-8 shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-8 shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Experience</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <h4 className="text-xl font-medium text-gray-800">{exp.title}</h4>
                <p className="text-gray-600 mb-2">{exp.company} | {exp.period}</p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </motion.div>
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-8 shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <h4 className="text-lg font-medium text-gray-800">{edu.degree}</h4>
                <p className="text-gray-600">{edu.school}, {edu.year}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-8 shadow-md"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Interests & Future Tech</h3>
          <div className="flex flex-wrap gap-4">
            {interests.map((interest, index) => (
              <div key={index} className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                <span className="text-gray-700 mr-2">{interest}</span>
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
