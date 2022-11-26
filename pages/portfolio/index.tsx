import React from 'react'
import Head from 'next/head'
// import Link from 'next/link'
import { Header } from '../../components/header/header'
import stylesHeader from '../../styles/portfolio/header.module.css'
import styles from '../../styles/portfolio/homeport.module.css'
import Image from 'next/image'

const Portfolio = () => {
    return (
        <div>
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="Pagina principal de Rom-Dev.com" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={stylesHeader.body}>
                <Header data={"Inicio"} />
                <section className={styles.main}>
                    <div className={styles.welcome}>
                        <div className={styles.info}>
                            <h1>Hi!, I'm Franck</h1>
                            
                            <div className={styles.self}>
                                <h4>"Full-Stack Developer"</h4>
                                <p> && </p>
                                <h4>"IoT Developer"</h4>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    
                    <div className={styles.corazon}>
                        <h1>I love programming</h1>
                        <Image
                            src={"/icon/corazon.png"}
                            alt='User profile picture'
                            width={120}
                            height={120}
                        />
                        
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Portfolio