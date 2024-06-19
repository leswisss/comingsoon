"use client";

import React, {useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import styles from "../styles/marquee.module.scss"

const Marquee = () => {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  let xPercent = 0;
  let direction = -1

  useGSAP(() => {
    requestAnimationFrame(animation)
  })

  const animation = () => {
    if (xPercent <= -100){
      xPercent = 0;
    }
    gsap.set(firstRef.current, {xPercent: xPercent})
    gsap.set(secondRef.current, {xPercent: xPercent})
    xPercent += 0.03 * direction;
    requestAnimationFrame(animation)
  }

  return (
    <div className={styles.slider}>
      <div className={styles.coming__wrapper} ref ={firstRef}>
        <p className={styles.soon}>© Coming Soon</p>
        <p className={styles.soon}>© Coming Soon</p>
        <p className={styles.soon}>© Coming Soon</p>
        <p className={styles.soon}>© Coming Soon</p>
        <p className={styles.soon}>© Coming Soon</p>
        <p className={styles.soon}>© Coming Soon</p>
        <p className={styles.soon}>© Coming Soon</p>
        <p className={styles.soon}>© Coming Soon</p>
        <p className={styles.soon}>© Coming Soon</p>
        <p className={styles.soon}>© Coming Soon</p>
      </div>
      <div className={styles.coming__wrapper} ref ={secondRef}>
        <p className={styles.soon}>© Coming Soon</p>
        <p className={styles.soon}>© Coming Soon</p>
        <p className={styles.soon}>© Coming Soon</p>
        <p className={styles.soon}>© Coming Soon</p>
        <p className={styles.soon}>© Coming Soon</p>
        <p className={styles.soon}>© Coming Soon</p>
        <p className={styles.soon}>© Coming Soon</p>
        <p className={styles.soon}>© Coming Soon</p>
        <p className={styles.soon}>© Coming Soon</p>
        <p className={styles.soon}>© Coming Soon</p>
      </div>
    </div>
  )
}

export default Marquee