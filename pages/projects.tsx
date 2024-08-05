import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import projectData from './components/projects.json';
import styles from '../styles/Project.module.css';
import Link from 'next/link';

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  // Calculate the projects to display on the current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectData.slice(indexOfFirstProject, indexOfLastProject);

  // Calculate total pages
  const totalPages = Math.ceil(projectData.length / projectsPerPage);

  return (
    <div>
      <Navbar/>
      <div className={styles.banner}>
        <h1>Projects</h1>
        <p>short sentence</p>
        <div className={styles.getInvolvedButton}>
          <a href="/partners">Get Involved</a>
        </div>
      </div>
      <div className={styles.text}>A quick summary of projects</div>
      <div className={styles.text}>Grade Level: K-8</div>

      <div className={styles.projects}>
        {currentProjects.map((project) => (
          <div key={project.id} className={styles.project}>
            <Link href={`/project/${project.id}`}>
             
              <h2>{project.title}</h2>
            <p>{project.description}</p>
            </Link>
            
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
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={styles.paginationButton}
        >
          Next
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default Projects;
