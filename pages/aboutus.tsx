import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Floating from './components/Floating';
import styles from '../styles/About.module.css';

const AboutUs = () => {
  return (
    <div>
        <Navbar/>
      <div className={styles.banner}>
        <h1>About Us</h1>
        </div>
      <div className={styles.container}>
        <h1>About Us</h1>
        <p>This is the About Us page.</p>
      </div>
      <Floating />
      <Footer/>
    </div>
  );
};

export default AboutUs;
