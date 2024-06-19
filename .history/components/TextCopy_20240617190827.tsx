"use client";

import React, {useRef} from "react";
import { useGSAP } from "@gsap/react";
import styles from "../styles/textcopy.module.scss";

const TextCopy = ({ header, text }: { header: string; text: string }) => {
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



const Cursor = () => {
  const cursorRef = useRef(null);
  
  return (
    <div className={styles.cursor}>

    </div>
  )
}