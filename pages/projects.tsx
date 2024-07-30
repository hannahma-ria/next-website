import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import projectData from './components/projects.json';
import styles from '../styles/Project.module.css';

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  // Split projectData into fixed pages
  const pages = [
    projectData.slice(0, 4),
    projectData.slice(4, 8),
  ];

  const currentProjects = pages[currentPage - 1] || [];

  return (
    <div>
      <Navbar />
      <div className={styles.banner}>
        <h1>Projects</h1>
        <p>short sentence</p>
        <div className={styles.getInvolvedButton}>
          <a href="/partners.tsx">Get Involved</a>
        </div>
      </div>
      <div className={styles.text}>A quick summary of projects</div>
      <div className={styles.text}>Grade Level: K-8</div>

      <div className={styles.projects}>
        {currentProjects.map((project) => (
          <div key={project.id} className={styles.project}>
            <img src={project.image} alt={project.title} className={styles.image} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={styles.paginationButton}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pages.length))}
          disabled={currentPage === pages.length}
          className={styles.paginationButton}
        >
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
