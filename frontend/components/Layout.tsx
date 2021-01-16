import Head from 'next/head';
import Navbar from './Navbar';
import styles from '../styles/Home.module.css';

export default function Layout(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar></Navbar>
        {props.children}
      </main>
    </div>
  );
}