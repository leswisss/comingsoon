"use client";

import React, {useRef} from "react";
import gsap from "gsap";
import HoverAnimation from "./HoverAnimation";
import { useGSAP } from "@gsap/react";
import {motion} from "framer-motion"
import { opacityAnimation } from "@/animations";
import Image from "next/image";
import IMAGE from "../public/logo.svg";
import Link from "next/link";
import Contacts from "./Contacts";
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

  const sideRef = useRef(null);
  useGSAP(() => {
    if (activeSideBar) {
      gsap.to(sideRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.5,
        ease: "opwer4.out",
        pointerEvents: "all",
      });
    } else {
      gsap.to(sideRef.current, {
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        duration: 0.5,
        ease: "opwer4.out",
        pointerEvents: "none"
      });
    }
  }, [activeSideBar])
  return (
    <div className={styles.sidebar} ref={sideRef}>
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
              <HoverAnimation text="Close"/>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.left__content}>
              <p className={styles.getin}>GET IN TOUCH</p>
              <motion.p className={styles.getintext} variants={opacityAnimation} initial="initial" animate={activeSideBar ? "enter": "closed"}>
                LOOKING TO GET IN TOUCH OR <br />
                <span>COLLABORATE</span> ON YOUR <br />
                PROJECT? <span>REACH OUT TO US!</span>
              </motion.p>
            </div>
            <div className={styles.right__content}>
              <div className={styles.right_top}>
                <Contacts/>
              </div>
              <div className={styles.right_bottom}>
                <span className={styles.grey}>Socials</span>
                <div className={styles.socials}>
                  {links.map((link, i) => (
                    <Link href={link.link} key={`li-${i}`}>
                      <HoverAnimation text={`${link.name}`}/>
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
