import React from 'react';
import { Link } from 'react-router-dom';
import Skills from '../components/Skills';
import { motion } from 'framer-motion';

const SkillsPage = () => {
  const skillsData = {
    title: "My Skills",
    description: "An overview of my technical expertise and areas of specialization.",
    skillCategories: {
      "Programming Languages": [
        "Python", "JavaScript (ES6+)", "C++", "Java", "SQL"
      ],
      "Machine Learning & AI": [
        "TensorFlow", "Keras", "Scikit-Learn", "YOLOv8", "PyTorch"
      ],
      "Data Analysis & Visualization": [
        "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"
      ],
      "Web Development": [
        "FastAPI", "Django", "Flask", "Streamlit", "HTML5", "CSS3"
      ],
      "Tools & Platforms": [
        "Git", "Docker", "Jupyter Notebook", "Linux", "AWS"
      ],
      "Others": [
        "NLP", "RESTful APIs", "Object Detection", "GANs", "Version Control"
      ]
    },
    certifications: [
      { name: "TensorFlow Developer Certificate", year: 2023 },
      { name: "AWS Certified Solutions Architect – Associate", year: 2022 },
      { name: "DeepLearning.AI TensorFlow Developer", year: 2021 }
    ]
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
      
      

      <Skills 
        title={skillsData.title}
        description={skillsData.description}
        skillCategories={skillsData.skillCategories}
        certifications={skillsData.certifications}
      />
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Prêt à collaborer ?</h2>
        <div className="flex justify-center space-x-4">
          <Link to="/projects" className="bg-gray-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition duration-300">
            Voir mes projets
          </Link>
          <Link to="/contact" className="border-2 border-gray-700 text-gray-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-700 hover:text-white transition duration-300">
            Me contacter
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsPage;
