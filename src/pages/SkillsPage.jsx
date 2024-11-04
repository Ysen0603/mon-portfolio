import React from 'react';
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
      />
      
      
    </motion.div>
  );
};

export default SkillsPage;
