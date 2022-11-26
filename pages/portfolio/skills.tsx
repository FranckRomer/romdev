import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../../components/header/header'
// import styles from '../../styles/portfolio/homeport.module.css'
import stylesHeader from '../../styles/portfolio/header.module.css'
import styles from '../../styles/portfolio/homeport.module.css'


const Skills = () => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Pagina principal de Rom-Dev.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={stylesHeader.body}>
        <Header data={"Skills"} />
        <section className={styles.main}>
          <h1>My Skills</h1>
        </section>
      </div>
    </div>
  )
}

export default Skills