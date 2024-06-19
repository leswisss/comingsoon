import React, {useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import styles from "../styles/marquee.module.scss"

const Marquee = () => {
  const firstRef = useRef(null);
  const secondRef = useRef(null);

  useGSAP(() => {
    requestAnimationFrame(animation)
  })

  const animation = () => {

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
    </div>
  )
}

export default Marquee