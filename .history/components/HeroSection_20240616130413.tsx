import React from 'react'
import Image from 'next/image'
import IMAGE from "../public/background.jpg"
import styles from "../styles/hero.module.scss"

const HeroSection = () => {
  const slogan = "Inspired by uniqueness, driven by aesthetics and committed to growth through innovative solutions"
  
  const splitwords = () => {
    let body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={`word-${i}`} className={styles.word}>{letters}</p>);
    });

    return body;
  };
  return (
    <section className={styles.hero}>
      <div className={styles.hero_image}>
        <Image src={IMAGE} fill quality={100} alt='Better Marque'/>
      </div>
      <div className="text">

      </div>
    </section>
  )
}

export default HeroSection