import React from 'react'
import Image from 'next/image'
import styles from "../styles/hero.module.scss"

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImage}>
        <div className={styles.overlay}></div>
        <Image src={}/>
      </div>
    </section>
  )
}

export default HeroSection