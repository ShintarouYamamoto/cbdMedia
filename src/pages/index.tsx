import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageCarousel from '../components/ImageCarousel';
import Link from 'next/link';

export default function Home() {
  return (
    <div >
      <Head>
        <title>CBD Products Home</title>
        <meta name="description" content="Discover the best CBD products" />
      </Head>


      <header >
        <Navbar />
      </header>

      <main >
        <a href="https://endoca.co.jp/">zzz</a>
        <ImageCarousel />
      </main>

      <Footer />
    </div>
  );
}
