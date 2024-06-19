import React from "react";
// import { motion } from "framer-motion";
import Image from "next/image";
import IMAGE from "../public/logo.svg";
import Link from "next/link";
import TextCopy from "./TextCopy";
import styles from "../styles/sidebar.module.scss";

interface SideBarProps {
  activeSideBar: boolean;
  setActiveSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar = ({ activeSideBar, setActiveSideBar }: SideBarProps) => {
  const links = [
    {
      name: "Instagram",
      link: "/",
    },
    {
      name: "Facebook",
      link: "/",
    },
    {
      name: "Twitter(X)",
      link: "/",
    },
    {
      name: "Whatsapp",
      link: "/",
    },
  ];
  return (
    <div
      className={styles.sidebar}
      // variants={sideBarAnim}
      // initial= "initial"
      // animate={activeSideBar ? "entry" : "initial"}
      // exit="exit"
    >
      <div className={styles.sidebar_wrapper}>
        <div className={`container ${styles.side__container}`}>
          <div className={styles.header}>
            <div className={styles.image}>
              <Image src={IMAGE} fill quality={100} alt="Better Marque Logo" />
            </div>
            <div
              className={styles.button}
              onClick={() => {
                setActiveSideBar((value) => !value);
              }}
            >
              <span>Close</span>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.left__content}>
              <p className={styles.getin}>GET IN TOUCH</p>
              <p className={styles.getintext}>
                LOOKING TO GET IN TOUCH OR <br />
                <span>COLLABORATE</span> ON YOUR <br />
                PROJECT? <span>REACH OUT TO US!</span>
              </p>
            </div>
            <div className={styles.right__content}>
              <div className={styles.right_top}>
                <TextCopy
                  header="General Inquiries"
                  text="hello@bettermarque.com"
                />
                <TextCopy header="Phone" text="00237 654 570 096" />
              </div>
              <div className={styles.right_bottom}>
                <span className={styles.grey}>Socials</span>
                <div className={styles.socials}>
                  {links.map((link, i) => (
                    <Link href={link.link} key={`li-${i}`}>
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
