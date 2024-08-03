import React, { useState } from 'react';
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

  const [currentStation, setCurrentStation] = useState(project ? project.investigationStations[0] : null);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.banner} style={{ backgroundImage: `url(${project.image})` }}>
        <h1>{project.title}</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.investigationStations}>
          <h2>Investigation Stations</h2>
          <div className={styles.stationList}>
            {project.investigationStations.map((station) => (
              <div
                key={station.id}
                className={`${styles.stationItem} ${currentStation?.id === station.id ? styles.activeStation : ''}`}
                onClick={() => setCurrentStation(station)}
              >
                {station.title}
              </div>
            ))}
          </div>
        </div>
        {currentStation && (
          <div className={styles.details}>
            <img src={currentStation.image} alt={currentStation.title} className={styles.image} />
            <div className={styles.textContainer}>
              <h1>{currentStation.title}</h1>
              <p>{currentStation.description}</p>
              <div className={styles.pptSection}>
                <h2>Related Presentations</h2>
                <a href={currentStation.pptLink} target="_blank" rel="noopener noreferrer">Download Presentation</a>
              </div>
            </div>
          </div>
        )}
        <div className={styles.carousel}>
          <h2>Project Gallery</h2>
          <Carousel images={project.investigationStations.map(station => station.image)} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
