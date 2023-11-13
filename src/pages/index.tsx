import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div >
      <Head>
        <title>CBD Products Home</title>
        <meta name="description" content="Discover the best CBD products" />
      </Head>

      <header >
        <h1>Welcome to CBD World</h1>
      </header>

      <main >
        <h2>Feature Products</h2>
          <a href="https://mui.com/material-ui/react-app-bar/#app-bar-with-responsive-menu">博多ラーメンを選ぶ</a>
        <p>Explore our wide range of CBD oils, tinctures, and creams.</p>
        {/* Product list or content will go here */}
      </main>

      <footer >
        <p>© 2023 CBD World</p>
      </footer>
    </div>
  );
}
