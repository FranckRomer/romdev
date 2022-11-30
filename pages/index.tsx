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
        {/* <div className={styles.fondo}><h2>Romer-Dev.com</h2></div> */}
        <div >
          <h3>Welcome to </h3>
          <h1 >Romer-Dev.com</h1>
        </div>
        <div className={styles.portfolio}>
          <h3>Visit my </h3><Link href={"/portfolio"}> <h2><u>Portfolio</u></h2></Link>
        </div>

        {/* ----------------------------------------------- */}
        {/* <hr className={styles.separador} /> */}
        <h1>Other projects</h1>
        <div className={styles.grid}>
          <div className={styles.card}>

            <Link href={"/blog"}>
              <h2>Blog</h2>
              <hr />
              <p>Blog personal en donde encontraras informacion practicas de programacion y con su codigo de ejemplo</p>
              <h3>Visit my Blog</h3>
            </Link>

          </div>
          <div className={styles.card}>
            <Link href={"/yourmoney"}>
              <h2>Money</h2>
              <hr />
              <p>Aplicacion para ayudarte a tener un control del tus gastos de forma facil y rapida</p>
              <h3>Visit my App</h3>
            </Link>
          </div>
        </div>
      </main>


      <footer className={styles.footer}>
        <p>Create by </p>
        <h4>FranckRomer</h4>
        <Link href={"/portfolio/contact"} className={styles.animation}>
          <Image
            src={"/icon/corazon.png"}
            alt='User profile picture'
            width={30}
            height={30}
          />

        </Link>

      </footer>
    </div>
  )
}
