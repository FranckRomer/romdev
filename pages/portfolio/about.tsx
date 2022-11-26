import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../../components/header/header'
import stylesHeader from '../../styles/portfolio/header.module.css'
import styles from '../../styles/portfolio/homeport.module.css'

const About = () => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Pagina principal de Rom-Dev.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={stylesHeader.body}>
        <Header data={"About"} />
        <section className={styles.main}>
          <h1>About me</h1>
        </section>
      </div>
    </div>
  )
}

export default About