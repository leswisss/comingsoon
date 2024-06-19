import React from 'react'
import Image from 'next/image'
import IMAGE from "../public/background.jpg"
import styles from "../styles/hero.module.scss"

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_mage}>
        <div className={styles.overlay}></div>
        <Image src={IMAGE} fill quality={100} alt='Better Marque'/>
      </div>
    </section>
  )
}

export default HeroSection