import React from 'react';
import About from '../components/About';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const aboutData = {
    title: "About Me",
    description: 'Yassine Ennaya, information systems intelligence engineer (SUPMTI). Specialized in data analysis, NLP and computer vision. Experienced in Machine Learning and Deep Learning with Pandas, Numpy, Sklearn, Tensorflow. Web developer (FastAPI, React) combining AI and development for innovative solutions.',
    skills: [
      "JavaScript","Python","React", "Machine Learning", "NLP", 
      "TensorFlow","FastAPI", 
      "Pandas", "Numpy", "Scikit-Learn", "React Native", "Expo", 
      "HTML5", "CSS3", "PostgreSQL", "MongoDB", "Github", "GIT/GitHub", "Linux (Ubuntu)", "JIRA Agile"
    ],
    experiences: [
      {
        title: "Intern - Final Year Project (PFE)",
        company: "Direction Générale des Collectivités Territoriales",
        period: "2023 - 2024",
        description: "Designed and implemented an intelligent system for classifying projects based on Sustainable Development Goals (SDGs), impact areas, and transitions, utilizing NLP techniques and a web app using FastApi and React.",
      },
      {
        title: "Intern - Practical Training (PFA)",
        company: "YAZAKI",
        period: "2021 - 2022",
        description: "Developed a security system using facial recognition, leveraging computer vision techniques."
      }
    ],
    education: [
      {
        degree: "Master's Degree in Information Systems Intelligence",
        school: "SUPMTI",
        year: "2022 - 2024"
      },
      {
        degree: "Bachelor's Degree in Information Systems Intelligence",
        school: "SUPMTI",
        year: "2019 - 2022"
      },
      {
        degree: "1 Year in Applied Mathematics and Computer Science",
        school: "Faculty of Science",
        year: "2018 - 2019"
      },
      {
        degree: "International Baccalaureate in Scientific Physics",
        school: "Princess Lala Amina High School",
        year: "2015 - 2018"
      }
    ],
    interests: ["Web Development","Mobile Development","Artificial Intelligence", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", ]
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
      
    

      <About 
        title={aboutData.title}
        description={aboutData.description}
        skills={aboutData.skills}
        experiences={aboutData.experiences}
        education={aboutData.education}
        interests={aboutData.interests}
      />
    </motion.div>
  );
};

export default AboutPage;
