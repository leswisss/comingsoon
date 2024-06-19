"use client";

import React, { useRef } from "react";
import Marquee from "./Marquee";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import IMAGE from "../public/background.jpg";
import styles from "../styles/hero.module.scss";

const HeroSection = () => {
  const slogan =
    "Inspired by uniqueness, driven by aesthetics and committed to growth through innovative solutions.";
  const refs = useRef<HTMLSpanElement[]>([]);
  const heroRef = useRef(null);

  //Animations
  useGSAP(() => {
    gsap.defaults({duration: 1, ease: "power3.out"})
    const tl = gsap.timeline({pause: true})

    tl.to(heroRef.current, {
      y: "0%",
    })

    .to(heroRef.current, {
      clipPath: "clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)"
    })
    // tl.to(refs.current, {
    //   top: "0%",
    //   stagger: 0.08
    // })

    tl.play();
  })

  const splitwords = () => {
    let body: JSX.Element[] = [];
    slogan.split(" ").forEach((word, i) => {
      const cleanWord = word.replace(/[.,]/g, "");

      if (["uniqueness", "aesthetics", "growth"].includes(cleanWord)) {
        body.push(
          <p
            key={`word-${i}`}
            className={`${styles.word_wrapper} ${styles.italic}`}
          >
            <span
              className={styles.word}
              ref={(el) => {
                if (el) refs.current.push(el);
              }}
            >
              {word}
            </span>
          </p>
        );
      } else {
        body.push(
          <p key={`word-${i}`} className={styles.word_wrapper}>
            <span
              className={styles.word}
              ref={(el) => {
                if (el) refs.current.push(el);
              }}
            >
              {word}
            </span>
          </p>
        );
      }
    });

    return body;
  };


  return (
    <section className={styles.hero}>
      <div className={styles.hero_image} ref={heroRef}>
        <Image src={IMAGE} fill quality={100} alt="Better Marque" />
      </div>
      <div className={styles.text}>{splitwords()}</div>
      <div className={styles.marquee}>
        <Marquee />
      </div>
    </section>
  );
};

export default HeroSection;
