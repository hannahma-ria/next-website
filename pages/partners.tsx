import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import styles from '../styles/Partners.module.css';
import Floating from './components/Floating';



const Partners = () => {
  return (
    <div>
      <Navbar/>
      <div className={styles.banner}>
        <h1>Partners</h1>
      </div>
      <div className={styles.content}>
        <h1>Why Become A Partner?</h1>
        <p>Working with NASA HUNCH ACADEMY the opportunity for you to make a difference in the futures of students nationwide.</p>
        <h1>Current Partners</h1>
        <p>n/a</p>
        <Floating imageSrc="/rocket.webp"/>
      </div>

      <Footer/>
    </div>
  );
};

export default Partners;
