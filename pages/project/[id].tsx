import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import projectData from '../components/projects.json';
import styles from '../../styles/ProjectDetail.module.css';

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const project = projectData.find((project) => project.id === parseInt(id as string));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <Navbar/>
      <div className={styles.container}>
        <h1>{project.title}</h1>
        <img src={project.image} alt={project.title} className={styles.image} />
        <p>{project.description}</p>
      </div>
      <Footer/>
    </div>
  );
};

export default ProjectDetail;
