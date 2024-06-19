import React from 'react'
import styles from "../styles/hover.module.scss"

const HoverAnimation = ({text}: {text: string}) => {
  return (
    <span className={styles.h}>{text}</span>
  )
}

export default HoverAnimation