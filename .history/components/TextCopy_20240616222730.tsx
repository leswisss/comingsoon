import React from 'react'
import styles from "../styles/textcopy.module.scss"

const TextCopy = ({header, text}: {header: string, text: string}) => {
  return (
    <>
    <div className={styles.text_container}>
      <span>{}</span>
    </div>
    </>
  )
}

export default TextCopy