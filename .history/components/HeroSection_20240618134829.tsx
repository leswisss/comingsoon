"use client";

import React, { useRef } from "react";
import Marquee from "./Marquee";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import IMAGE from "../public/background.jpg";
import styles from "../styles/hero.module.scss";

const HeroSection = ({
  imageLoaded,
  setImageLoaded,
}: {
  imageLoaded: boolean;
  setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const slogan =
    "Inspired by uniqueness, driven by aesthetics and committed to growth through innovative solutions.";
  const refs = useRef<HTMLSpanElement[]>([]);
  const heroRef = useRef(null);
  const marqueeRef = useRef(null);
  const clipRef = useRef(null);
  cont cl

  //Animations
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(clipRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 3,
      ease: "expo.in"
    })

    tl.to(clipRef.current, {
      opacity: 0
    })

    tl.to(heroRef.current, {
      y: "0%",
      duration: 2,
      ease: "expo.inOut",
    })
      .to(
        heroRef.current,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 2,
          ease: "expo.inOut",
        },
        ">"
      )
      .to(marqueeRef.current, {
        opacity: 1,
        x: "0%",
        duration: 3,
        ease: "expo.inOut",
      })

      .to(
        refs.current,
        {
          top: "0%",
          stagger: 0.08,
        },
        ">-1"
      );

    if (imageLoaded) {
      tl.play();
    } else {
      tl.pause();
    }
  }, [imageLoaded]);

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
        <Image
          src={IMAGE}
          fill
          quality={100}
          alt="Better Marque"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className={styles.text}>{splitwords()}</div>
      <div className={styles.marquee}>
        <div ref={marqueeRef} className={styles.marqueee}>
          <Marquee />
        </div>
      </div>
      <div className={styles.slogan_wrapper}>
        <div className={styles.s_wrap1}>
          <span className={styles.black}>© Embrace Uniqueness</span>
        </div>
        <div className={styles.s_wrap2} ref={clipRef}>
          <span className={styles.white}>© Embrace Uniqueness</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
