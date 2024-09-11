import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = ({ title, description }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

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

        <motion.form 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onSubmit={handleSubmit} 
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 mb-2">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-100 rounded-md text-gray-700 placeholder-gray-500"
              placeholder="Votre nom"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-100 rounded-md text-gray-700 placeholder-gray-500"
              placeholder="votre@email.com"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 bg-gray-100 rounded-md text-gray-700 placeholder-gray-500"
              placeholder="Votre message"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300">
            Envoyer le message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
