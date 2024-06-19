"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import IMAGE from "../public/background.jpg";
import styles from "../styles/hero.module.scss";

const HeroSection = () => {
  const slogan =
    "Inspired by uniqueness, driven by aesthetics and committed to growth through innovative solutions";
  const refs = useRef<HTMLSpanElement[]>([]);

  const splitwords = () => {
    let body: JSX.Element[] = [];
    slogan.split(" ").forEach((word, i) => {
      body.push(
        <span
          key={`word-${i}`}
          ref={(el) => {
            if (el) refs.current.push(el);
          }}
          className={styles.word}
        >
          {word}
        </span>
      );

      if (i === 7 || (i === 12)) {
        body.push(<br key={`br-${i}`} className="" />);
      }
    });

    return body;
  };

  return (
    <section className={styles.hero}>
      <div className={styles.hero_image}>
        <Image src={IMAGE} fill quality={100} alt="Better Marque" />
      </div>
      <div className="text">
        
      </div>
    </section>
  );
};

export default HeroSection;
