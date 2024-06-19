import React from "react";
import styles from "../styles/textcopy.module.scss";

const TextCopy = ({ header, text, setCursor, index }: { header: string; text: string; setCursor: any; index: number }) => {
  return (
    <>
      <div className={styles.text_container} onMouseEnter={() => setCursor({active: true, index: index})} onMouseLeave={() =}>
        <span className={styles.grey}>{header}</span>
        <p className={styles.text}>{text}</p>
      </div>
    </>
  );
};

export default TextCopy;

