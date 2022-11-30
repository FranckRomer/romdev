import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
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
                    <div></div>
                    <div className={styles.welcome}>
                        <div className={styles.info}>
                            <h3 >Hi!, I am Franck </h3>

                            <div className={styles.self}>
                                <h1>Full-Stack Developer</h1>
                                {/* <p> && </p>
                                <h1>IoT Developer</h1> */}
                                <p>Hola soy ...... Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum iusto totam quae, a expedita consequatur ipsa corrupti cumque, enim adipisci sapiente optio et incidunt, culpa eos quidem qui asperiores dicta? lore</p>
                            </div>

                        </div>
                        <div>

                        </div>
                    </div>

                    <div className={styles.corazon}>
                        {/* <h1>I love programming</h1> */}
                        <Link href={"/portfolio/contact"} className={styles.animation}>
                            <Image
                                src={"/icon/corazon.png"}
                                alt='User profile picture'
                                width={100}
                                height={100}
                            />

                        </Link>
                        <p>Contact Me</p>
                    </div>
                    <div></div>
                    <br />
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente, quis molestias exercitationem aut ad omnis repellendus sit dignissimos aliquam. Deleniti neque rem officiis esse impedit asperiores tenetur, sed obcaecati!</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Portfolio