import Image from "next/image";
import Head from 'next/head';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar/>
      <div className={Styles.banner}>
        <h1>NASA HUNCH ACADEMY</h1>
        <p>Teacher built STEM projects made for K-8th grade students</p>
        <div className={Styles.button}>
          <a href="/register">Register</a>
        </div>
      </div>
      <div className={Styles.container}>
        <img src="Academy Logo.jpg" alt="Logo" className={Styles.image}></img>
        <div className={Styles.textContainer}>
        <h1>Projects</h1>
        <p>All projects created for HUNCH Academy have come from the wonderful minds of fellow teachers in the community. Below are our current list of projects for students to take part in.</p>
        </div>
      </div>
      <div className={Styles.dropDown}>Current Projects</div>
      <div className={Styles.textContainer}>
        <h1>Why Hunch Academy?</h1>
        <video controls width="600">
          <source src="Intro.mp4" type="video/mp4"></source>
        </video>
        <h1>Join Hunch Academy</h1>
      </div>
      <div className={Styles.container}>
        <div className={Styles.textContainer}>
          <p>Interested in bringing STEM projects to your students? Join HUNCH Academy and spread the love of science!</p>
          <div className={Styles.button}>
          <a href="/register">Register</a>
        </div>
        </div>
        <img src="astronaut.png" alt="astronaut" className={Styles.image}></img>
      </div>
      <div className={Styles.moon}>
        <h1>INTERESTED IN SHAPING THE FUTURE?</h1>
        <p>Become a partner today!</p>
        <div className={Styles.button}>
        <a href="/partners">Partner</a>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
