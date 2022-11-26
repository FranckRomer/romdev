import React, { useEffect, useState } from 'react'
import styles from '../../styles/portfolio/header.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Header = (props: { data: string }) => {
    const [modal, setModal] = useState(false)
    const [dark, setDark] = useState(true)
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     document.body.classList.toggle("light-theme");
    //     document.body.classList.toggle("dark-theme");
    //     document.body.classList.remove("dark-theme");
    //     document.body.classList.remove("light-theme");
    //     document.body.classList.toggle("dark-theme");
    //   },[]);
    const DarkMode = () => {
        // const persistedPreferenceMode = window.localStorage.getItem("theme")
        // console.log(persistedPreferenceMode);
        console.log(dark);
        setDark(!dark)
        if (dark) {
            // document.body.classList.toggle("dark-theme");
            document.body.classList.remove("dark-theme");
            document.body.classList.toggle("light-theme");
        } else {

            // document.body.classList.toggle("light-theme");
            document.body.classList.remove("light-theme");
            document.body.classList.toggle("dark-theme");

        }

    }
    return (
        <div>
            {/* ----------------------------------- */}
            <section className={styles.header}>
                <div className={styles.menu_container}>
                    <div className={styles.logo_contain}>
                        <div className={styles.hamburguesa} onClick={() => setModal(!modal)}>
                            <Image
                                src={"/icon/menuWhite.png"}
                                alt='User profile picture'
                                width={30}
                                height={30} />
                        </div>
                        <div className={styles.logo}>

                            <Link href={"/"} className={styles.logo}>
                                <h1>Rom-Dev</h1>
                                <p>Portfolio</p>
                            </Link>
                        </div>

                    </div>
                    <div className={styles.menu2}>
                        {props.data == "Inicio" ? <h3><Link href={"/portfolio"}>Home</Link></h3> : <p><Link href={"/portfolio"}>Home</Link></p>}
                        {props.data == "Proyects" ? <h3><Link href={"/portfolio/proyects"}>Proyects</Link></h3> : <p><Link href={"/portfolio/proyects"}>Proyects</Link></p>}
                        {props.data == "Skills" ? <h3><Link href={"/portfolio/skills"}>Skills</Link></h3> : <p><Link href={"/portfolio/skills"}>Skills</Link></p>}
                        {props.data == "About" ? <h3><Link href={"/portfolio/about"}>About</Link></h3> : <p><Link href={"/portfolio/about"}>About</Link></p>}
                        {props.data == "Contact" ? <h3><Link href={"/portfolio/contact"}>Contact</Link></h3> : <p><Link href={"/portfolio/contact"}>Contact</Link></p>}
                    </div>
                </div>

                <div className={styles.iconos_contain}>
                    <div className={styles.darkMode} onClick={DarkMode}>
                        <Image
                            src={"/icon/sol-y-luna.png"}
                            alt='User profile picture'
                            width={30}
                            height={30} />
                    </div>
                    <div className={styles.links}>
                    
                        <Link href={"/portfolio/proyects"}>
                            <Image
                                src={"/contacts/github.png"}
                                alt='User profile picture'
                                width={30}
                                height={30} />
                        </Link>
                        <Link href={"/portfolio/proyects"}>
                            <Image
                                src={"/contacts/linkedin.png"}
                                alt='User profile picture'
                                width={30}
                                height={30} />
                        </Link>
                    </div>
                </div>
            </section>
            {/* ----------------------------------- */}
            {/* <section className={styles.menu}>               
                <div></div>
                {props.data == "Inicio" ? <h1><Link href={"/portfolio"}>Home</Link></h1> : <h3><Link href={"/portfolio"}>Home</Link></h3>}
                {props.data == "Proyects" ? <h1><Link href={"/portfolio/proyects"}>Proyects</Link></h1> : <h3><Link href={"/portfolio/proyects"}>Proyects</Link></h3>}
                {props.data == "Skills" ? <h1><Link href={"/portfolio/skills"}>Skills</Link></h1> : <h3><Link href={"/portfolio/skills"}>Skills</Link></h3>}
                {props.data == "About" ? <h1><Link href={"/portfolio/about"}>About</Link></h1> : <h3><Link href={"/portfolio/about"}>About</Link></h3>}
                {props.data == "Contact" ? <h1><Link href={"/portfolio/contact"}>Contact</Link></h1> : <h3><Link href={"/portfolio/contact"}>Contact</Link></h3>}
                <div></div>
                <div></div>
            </section> */}

            {modal ?
                <div>
                    <div className={styles.modal} onClick={() => setModal(!modal)}></div>
                    <div className={styles.triangulito}></div>
                    <div className={styles.hamburguesaModal} onClick={() => setModal(!modal)}>
                        <Image
                            src={"/icon/menuWhite.png"}
                            alt='User profile picture'
                            width={30}
                            height={30} />
                    </div>
                    <section className={styles.menuModal}>
                        <div className={styles.logo}>
                            <Link href={"/"} className={styles.logo}>
                                <h1>Rom-Dev</h1>
                                <p>Portfolio</p>
                            </Link>
                        </div>
                        <hr />
                        {/* <div>Menu-Contraer</div> */}
                        {props.data == "Inicio" ? <h1><Link href={"/portfolio"}>Home</Link></h1> : <h3><Link href={"/portfolio"}>Home</Link></h3>}
                        {props.data == "Proyects" ? <h1><Link href={"/portfolio/proyects"}>Proyects</Link></h1> : <h3><Link href={"/portfolio/proyects"}>Proyects</Link></h3>}
                        {props.data == "Skills" ? <h1><Link href={"/portfolio/skills"}>Skills</Link></h1> : <h3><Link href={"/portfolio/skills"}>Skills</Link></h3>}
                        {props.data == "About" ? <h1><Link href={"/portfolio/about"}>About</Link></h1> : <h3><Link href={"/portfolio/about"}>About</Link></h3>}
                        {props.data == "Contact" ? <h1><Link href={"/portfolio/contact"}>Contact</Link></h1> : <h3><Link href={"/portfolio/contact"}>Contact</Link></h3>}
                    </section>
                </div>
                : ""}

        </div>
    )
}

export { Header }