import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProjectDetail from '../components/ProjectDetail';
import { projectsData } from '../data/projectsData';
import { motion } from 'framer-motion';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProjects, setRelatedProjects] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const foundProject = projectsData.find(p => p.id === parseInt(id));
      setProject(foundProject);
      setLoading(false);

      const related = projectsData
        .filter(p => 
          p.id !== foundProject.id && 
          p.technologies.some(tech => 
            foundProject.technologies.some(foundTech => 
              foundTech.name === tech.name
            )
          )
        )
        .slice(0, 3);

      setRelatedProjects(related);
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-700"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center text-gray-600 py-20">Project not found</div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white text-gray-800"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200 opacity-30"></div>
      <div className="absolute inset-0 backdrop-blur-[50px]"></div>
      
      

      <div className="relative z-10">
        <ProjectDetail project={project} />
        
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Related Projects</h2>
            <div className="flex flex-wrap justify-center -mx-4">
              {relatedProjects.map((relatedProject) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={relatedProject.image} alt={relatedProject.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{relatedProject.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{relatedProject.description.substring(0, 100)}...</p>
                      <Link 
                        to={`/projects/${relatedProject.id}`} 
                        className="inline-block bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors duration-300"
                      >
                        View Project
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetailPage;
