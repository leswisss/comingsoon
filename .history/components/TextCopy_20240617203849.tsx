"use client";

import React, { useRef, useState } from "react";
import styles from "../styles/textcopy.module.scss";

const TextCopy = ({ header, text }: { header: string; text: string }) => {
  const boundaryRef = useRef<HTMLDivElement>(null);

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

