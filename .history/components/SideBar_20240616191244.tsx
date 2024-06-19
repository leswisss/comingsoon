import React from 'react'
import Image from
import styles from "../styles/sidebar.module.scss"

const SideBar = () => {
  return (
    <section className={styles.sidebar}>
      <div className={`container ${styles.side__container}`}>
        <div className={styles.header}>
          <div className={styles.image}>

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