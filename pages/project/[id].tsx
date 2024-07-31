import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
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
      <div className={styles.banner} style={{ backgroundImage: `url(${project.image})` }}>
        <h1>{project.title}</h1>
      </div>
      <div className={styles.dropDown}>Investigation Stations</div>
      <div className={styles.container}>
      <img src="/placeholder.jpg" alt="placeholder" className={styles.image}></img>
      <div className={styles.textContainer}>
        <h1>Project Description</h1>
        <h1>Slides</h1>
      </div>
      </div>
      <div>
      <Carousel images={[project.image]} />
      </div>
      <Footer/>
    </div>
  );
};

export default ProjectDetail;
