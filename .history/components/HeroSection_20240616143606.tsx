"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import IMAGE from "../public/background.jpg";
import styles from "../styles/hero.module.scss";

const HeroSection = () => {
  const slogan =
    "Inspired by uniqueness, driven by aesthetics and committed to growth through innovative solutions.";
  const refs = useRef<HTMLSpanElement[]>([]);

  const splitwords = () => {
    let body: JSX.Element[] = [];
    slogan.split(" ").forEach((word, i) => {
      if (["uniqueness", "aesthetics", "growth"].includes(word)){
        body.push(
          <p key={`word-${i}`} className={`styles.word_wrapper`}>
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
    });

    return body;
  };

  return (
    <section className={styles.hero}>
      <div className={styles.hero_image}>
        <Image src={IMAGE} fill quality={100} alt="Better Marque" />
      </div>
      <div className={styles.text}>{splitwords()}</div>
    </section>
  );
};

export default HeroSection;
