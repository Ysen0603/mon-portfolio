import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import TailPage from './pages/TailPage';

function App() {
  return (
    //<TailPage/>
    
    <Router>
      <ScrollToTop />
      <div className="App">
      
        <main >
          <Header />
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
