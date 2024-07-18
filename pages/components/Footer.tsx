import React from 'react';
import footStyles from '../../styles/Footer.module.css';

const Footer: React.FC<{}>= () => {
  return (
    <footer className={footStyles.footbar}>
      <div className={footStyles.topSection}>
        <div className={footStyles.leftSection}>
          <div className={footStyles.logoContainer}>
            <a href="/">Logo</a>
          </div>
          <div className={footStyles.contactInfo}>
            <p>NASA HUNCH Academy</p>
            <p>JSC, 2101 E NASA Pkwy, Houston, TX 77058</p>
            <p>Email: florence.v.gold@nasa.gov</p>
          </div>
          <div>Language Setting</div>
        </div>
        <div className={footStyles.middleSection}>
          <div className={footStyles.pageLinks}>
            <a href="/about">About Us</a>
            <a href="/projects">Projects</a>
            <a href="/register">Register</a>
            <a href="/partners">Partners</a>
          </div>
          <div className={footStyles.projectLinks}>
            <a href="/project1">Project 1</a>
            <a href="/project2">Project 2</a>
            <a href="/project3">Project 3</a>
            <a href="/project4">Project 4</a>
            <a href="/project5">Project 5</a>
            <a href="/project6">Project 6</a>
            <a href="/project7">Project 7</a>
            <a href="/project8">Project 8</a>
          </div>
        </div>
        <div className={footStyles.rightSection}>
        <div className={footStyles.feedbackBox}>
            <p>We'd love to hear back from you!</p>
            <button className={footStyles.feedbackButton}>Submit Feedback</button>
          </div>
          <div className={footStyles.socialLinks}>
          <a href="https://instagram.com">Instagram</a>
            <a href="https://facebook.com">Facebook</a>
            <a href="https://x.com">X</a>
            <a href="https://youtube.com">Youtube</a>
          </div>
        </div>
      </div>
      <div className={footStyles.bottomSection}>
        <p>&copy; 2024 NASA HUNCH Academy. All rights reserved.</p>
        <a href="/privacy">Privacy Policy</a>
        <a href="/branding">Branding</a>
        <a href="/terms">Terms of Use</a>
        <a href="/form">Talent Release Form</a>
      </div>
    </footer>
  );
};

export default Footer;
