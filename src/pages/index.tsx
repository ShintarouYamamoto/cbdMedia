import React from 'react';
import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div >
      <Head>
        <title>CBD Products Home</title>
        <meta name="description" content="Discover the best CBD products" />
      </Head>

      <Navbar />

      <header >
        <h1>Welcome to CBD World</h1>

      </header>

      <main >
        <p>Discover the best CBD products</p>
      </main>

      <Footer />
    </div>
  );
}
