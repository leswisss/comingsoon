import React from 'react'
import styles from "../styles/marquee.module.scss"

const Marquee = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.coming__wrapper}></div>
      <div className={styles.coming__wrapper}></div>
    </div>
  )
}

export default Marquee