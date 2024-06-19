"use client";

import React, {useRef, useState} from "react";
import { useGSAP } from "@gsap/react";
import styles from "../styles/textcopy.module.scss";

const TextCopy = ({ header, text }: { header: string; text: string }) => {
  const boundaryRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className={styles.text_container} ref={boundaryRef}>
        <span className={styles.grey}>{header}</span>
        <p className={styles.text}>{text}</p>
      </div>
      <Cursor boundary={boundaryRef}/>
    </>
  );
};

export default TextCopy;



const Cursor = ({boundary}: {boundary: any}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    //Move cursor

    let xMoveCursor = gsap.quickTo(cursorRef.current, "left", {
      duration: 0.5,
      ease: "power3",
    });

    let yMoveCursor = gsap.quickTo(cursorRef.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    boundary.current.addEventListener("mousemove", (e: MouseEvent) => {
      const { pageX, pageY } = e;

      xMoveCursor(pageX);

      yMoveCursor(pageY);
    });
  }, []);
  return (
    <div className={styles.cursor}>
      <span>Copied!</span>
    </div>
  )
}