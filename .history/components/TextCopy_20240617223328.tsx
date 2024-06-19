import React from "react";
import styles from "../styles/textcopy.module.scss";

const TextCopy = ({ header, cursor, text, setCursor, index, copyStatus, setCopyStatus }: { header: string; text: string; setCursor: any; index: number; cursor: any; copyStatus: any; setCopyStatus: any }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopyStatus({copied: true, index: index});
      })
      .catch((err) => {
        setCopyStatus({copied: true, index: index});
        console.error('Failed to copy text: ', err);
      });
  };
  
  return (
    <>
      <div className={styles.text_container} onMouseEnter={() => setCursor({active: true, index: index})} onMouseLeave={() => {setCursor({active: false, index: -1})}}>
        <span className={styles.grey}>{header}</span>
        <p className={`${styles.text} ${cursor.index === index || !cursor.active ? "" : styles.not_active}`}>{text}</p>
      </div>
    </>
  );
};

export default TextCopy;

