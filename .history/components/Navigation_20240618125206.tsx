"use client";

import React, { useState } from "react";
import HoverAnimation from "./HoverAnimation";
import Clock from "./Clock";
import SideBar from "./SideBar";
import Image from "next/image";
import IMAGE from "../public/wordmark.svg";
import styles from "../styles/navigation.module.scss";

const Navigation = ({imageLoaded}: {imageLoaded: boolean}) => {
  const [activeSideBar, setActiveSideBar] = useState(false);

  return (
    <>
      <nav className={styles.navigation} style={{opacity: , transition: "opacity 1s ease", transitionDelay: "6s"}}>
        <div className={`container ${styles.nav_wrapper}`}>
          <div className={styles.logo_wrapper}>
            <div className={styles.image}>
              <Image
                src={IMAGE}
                quality={100}
                fill
                alt="Better Marque Wordmark"
              />
            </div>
          </div>
          <div className={styles.location_wrapper}>
            <Clock />
          </div>
          <div
            className={styles.button}
            onClick={() => {
              setActiveSideBar((value) => !value);
            }}
          >
            <HoverAnimation text="Send us a message"/>
          </div>
        </div>
      </nav>

      <SideBar
        activeSideBar={activeSideBar}
        setActiveSideBar={setActiveSideBar}
      />
    </>
  );
};

export default Navigation;
