import React from "react";
import styles from "../styles/textcopy.module.scss";

const TextCopy = ({ header, text, setCursor }: { header: string; text: string; setC }) => {
  return (
    <>
      <div className={styles.text_container}>
        <span className={styles.grey}>{header}</span>
        <p className={styles.text}>{text}</p>
      </div>
    </>
  );
};

export default TextCopy;

