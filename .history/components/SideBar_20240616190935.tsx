import React from 'react'
import styles from "../styles/sidebar.module.scss"

const SideBar = () => {
  return (
    <section className={styles.sidebar}>
      <div className={`container ${styles.side__container}`}>
        <div className={styles.header}>

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