import React from "react";
import TextCopy from "./TextCopy";
import styles from "../styles/contacts.module.scss";

const Contacts = () => {
  return (
    <div className={styles.content}>
      <TextCopy header="General Inquiries" text="hello@bettermarque.com" />
      <TextCopy header="Phone" text="00237 654 570 096" />
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

    boundary.current.addEventListener("mousemove", (e: MouseEvent) => {
      const { pageX, pageY } = e;

      xMoveCursor(pageX);

      yMoveCursor(pageY);
    });
  }, []);
  return (
    <div className={styles.cursor} ref={cursorRef}>
      <span>Copy</span>
    </div>
  );
};
