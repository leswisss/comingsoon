"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { scaleAnimation } from "@/animations";
import TextCopy from "./TextCopy";
import styles from "../styles/contacts.module.scss";

const Contacts = () => {
  const textContent = [
    {
      header: "General Inquiries",
      text: "projects@bettermarque.com",
    },
    {
      header: "Phone",
      text: "+237 693 370 638",
    },
  ];

  const boundaryRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ active: false, index: -1 });

  //Handling with
  const [copyStatus, setCopyStatus] = useState({ copied: false, index: -1});
  return (
    <div className={styles.content} ref={boundaryRef}>
      {textContent.map((data, i) => (
        <TextCopy
          key={i}
          header={data.header}
          text={data.text}
          setCursor={setCursor}
          index={i}
          cursor={cursor}
          setCopyStatus={setCopyStatus}
          copyStatus={copyStatus}
        />
      ))}
      <Cursor boundary={boundaryRef} cursor={cursor}  copyStatus={copyStatus}/>
    </div>
  );
};

export default Contacts;

const Cursor = ({ boundary, cursor, copyStatus }: { boundary: any; cursor: any; copyStatus: any }) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!boundary.current) return;

    // Move cursor
    let xMoveCursor = gsap.quickTo(cursorRef.current, "left", {
      duration: 0.2,
      ease: "power3",
    });

    let yMoveCursor = gsap.quickTo(cursorRef.current, "top", {
      duration: 0.2,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const boundaryRect = boundary.current.getBoundingClientRect();
      const { clientX, clientY } = e;
      const xPosition = clientX - boundaryRect.left;
      const yPosition = clientY - boundaryRect.top;

      xMoveCursor(xPosition);
      yMoveCursor(yPosition);

      console.log("Mouse move:", { xPosition, yPosition }); // Debug log
    };

    boundary.current.addEventListener("mousemove", handleMouseMove);

    // Cleanup on unmount
    return () => {
      if (boundary.current) {
        boundary.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [boundary]);

  //Const text to show
  const textToShow = copyStatus.copied && copyStatus.index === cursor.index ? "Copied" : !copyStatus.copied && cursor.index === 0 || copyStatus.copied && copyStatus.index !== 0 ? "Copy Email" : !copyStatus.copied && cursor.index === 1 || copyStatus.copied && copyStatus.index !== 1 ? "Copy Number" : "Error"

  return (
    <motion.div
      className={styles.cursor}
      ref={cursorRef}
      variants={scaleAnimation}
      initial="initial"
      animate={cursor.active ? "enter" : "closed"}
    >
      <span>{textToShow}</span>
    </motion.div>
  );
};
