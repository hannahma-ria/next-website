import Image from "next/image";
import Head from 'next/head';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar/>
      <h1>Home</h1>
      <p>This is the Home page.</p>
      <Footer/>
    </div>
  );
}
