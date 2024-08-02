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

      <div className={styles.text}>
        <h1>What We Believe In</h1>
        <p>..........</p>
      </div>
      <div className={styles.container}>
      <Floating />
        <div className={styles.content}>
          <h1>"</h1>
          <h1>abc def ghi jkl mon p.</h1>
        </div>
      </div>
      <div className={styles.text}>
        <h1>The Team Behind The Magic</h1>
        <div className={styles.container}>
        <div className={styles.item}>
          <img src="/placeholder.jpg" alt="placeholder" className={styles.image}></img>
          <h1>Flo</h1>
        </div>
        <div className={styles.item}>
          <img src="/placeholder.jpg" alt="placeholder" className={styles.image}></img>
          <h1>Brittany</h1>
        </div>
        </div>
      </div>
      <div className={styles.gallery}>
        <div className={styles['gallery-item']}>
          <img src="/placeholder.jpg" alt="Photo 1" />
        </div>
        <div className={styles['gallery-item']}>
          <img src="/placeholder.jpg" alt="Photo 2" />
        </div>
        <div className={styles['gallery-item']}>
          <img src="/placeholder.jpg" alt="Photo 3" />
        </div>
        <div className={styles['gallery-item']}>
          <img src="/placeholder.jpg" alt="Photo 4" />
        </div>
        <div className={styles['gallery-item']}>
          <img src="/placeholder.jpg" alt="Photo 5" />
        </div>
      </div>  
      <Footer/>
    </div>
  );
};

export default AboutUs;
