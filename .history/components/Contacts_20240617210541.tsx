"use client";

import React, { useRef, useState } from "react";
import {motion} from "framer-motion"
import gsap from "gsap";
import { scaleAnimation } from "@/animations";
import { useGSAP } from "@gsap/react";
import TextCopy from "./TextCopy";
import styles from "../styles/contacts.module.scss";

const Contacts = () => {
  const textContent = [
    {
      header: "General Inquiries",
      text: "hello@bettermarque.com"
    },
    {
      header: "Phone",
      text: "00237 654 570 096"
    },

  ]

  const boundaryRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ active: false, index: 0 });

  return (
    <div className={styles.content} ref={boundaryRef}>
      {
        textContent.map((data, i) => (

          <TextCopy key={i} header= {data.} text="hello@bettermarque.com" />
        ))
      }
      <Cursor boundary={boundaryRef} />
    </div>
  );
};

export default Contacts;

const Cursor = ({ boundary }: { boundary: any }) => {
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

    if (boundary.current) {
      boundary.current.addEventListener("mousemove", (e: MouseEvent) => {
        const { pageX, pageY } = e;

        xMoveCursor(pageX);

        yMoveCursor(pageY);
      });
    }
  }, [boundary]);

  return (
    <motion.div className={styles.cursor} ref={cursorRef} variants={scaleAnimation}
    initial="initial"
    animate={cursor.active ? "enter" : "closed"}>
      <span>Copy</span>
    </motion.div>
  );
};
