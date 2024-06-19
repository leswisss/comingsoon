import React from "react";
import styles from "../styles/textcopy.module.scss";

const TextCopy = ({ header, cursor, text, setCursor, index }: { header: string; text: string; setCursor: any; index: number; cursor: any }) => {
  return (
    <>
      <div className={styles.text_container} onMouseEnter={() => setCursor({active: true, index: index})} onMouseLeave={() => {setCursor({active: false, index: -1})}}>
        <span className={styles.grey}>{header}</span>
        <p className={`${styles.text} ${cursor.index === index ? "" : sty}`}>{text}</p>
      </div>
    </>
  );
};

export default TextCopy;

