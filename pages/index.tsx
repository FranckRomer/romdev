import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rom-Dev.com</title>
        <meta name="description" content="Pagina principal de Rom-Dev.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h3>Welcome to </h3><h1>Rom-Dev.com</h1>
        </div>
        <div className={styles.portfolio}>
          <h3>Visit my </h3><h2><Link href={"/portfolio"}>Portfolio</Link></h2>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Create by </p>
        <h3>FranckRomer</h3>
      </footer>
    </div>
  )
}
