import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import styles from '../styles/Register.module.css';

const Register = () => {
  return (
    <div>
      <Navbar/>
      <div className={styles.banner}>
        <h1>Register</h1>
      </div>
      <div className={styles.content}>
      <h1>Why You Should Register For Our Program</h1>
      <p>Participating in NASA HUNCH ACADEMY gives you the opportunity for you to make a difference for your students.</p>
      <h1>Forms</h1>
      </div>
      <div className={styles.sun}></div>
      
      <Footer/>
    </div>
  );
};

export default Register;
