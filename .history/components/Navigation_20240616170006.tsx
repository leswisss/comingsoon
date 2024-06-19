import React from 'react'
import Image from 'next/image'
import IMAGE from "../public/wordmark.svg"
import styles from "../styles/navigation.module.scss"

const Navigation = () => {
  return (
  <>
    <nav className={styles.navigation}>
      <div className={styles.nav_wrapper}>
        <div className={styles.logo_wrapper}>
          <div className={styles.image}>
            <Image src={IMAGE} quality={100} fill alt="Better Marque Wordmark"/>
          </div>
        </div>
        <div className={styles.location_wrapper}>
          <p>Douala, Cameroon</p>
        </div>
      </div>
    </nav>
  </>
  )
}

export default Navigation