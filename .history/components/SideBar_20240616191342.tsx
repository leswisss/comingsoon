import React from 'react'
import Image from 'next/image'
import IMAGE from "../public/logo.svg"
import styles from "../styles/sidebar.module.scss"

const SideBar = () => {
  return (
    <section className={styles.sidebar}>
      <div className={`container ${styles.side__container}`}>
        <div className={styles.header}>
          <div className={styles.image}>
            <Image src={IMAGE}/>
          </div>
          <div className={styles.button}>

          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.left__content}>

          </div>
          <div className={styles.right__content}>

          </div>
        </div>
      </div>
    </section>
  )
}

export default SideBar