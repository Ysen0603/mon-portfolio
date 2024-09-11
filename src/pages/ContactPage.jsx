import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const contactData = {
    title: "Contactez-moi",
    description: "Vous avez un projet en tête ou vous souhaitez simplement discuter ? N'hésitez pas à me contacter. Je suis toujours ouvert à de nouvelles opportunités et collaborations passionnantes."
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white text-gray-800 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200 opacity-30"></div>
      <div className="absolute inset-0 backdrop-blur-[50px]"></div>
      
      

      <Contact 
        title={contactData.title}
        description={contactData.description}
      />
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Explorez davantage</h2>
        <div className="flex justify-center space-x-4">
          <Link to="/projects" className="bg-gray-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition duration-300">
            Voir mes projets
          </Link>
          <Link to="/skills" className="border-2 border-gray-700 text-gray-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-700 hover:text-white transition duration-300">
            Mes compétences
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
