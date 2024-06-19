"use client";

import React, { useState } from "react";
import Clock from "./Clock";
import SideBar from "./SideBar";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import IMAGE from "../public/wordmark.svg";
import styles from "../styles/navigation.module.scss";

const Navigation = () => {
  const [activeSideBar, setActiveSideBar] = useState(false);

  return (
    <>
      <nav className={styles.navigation}>
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
          <div className={styles.button} onClick={() => { setA}}>
            <span>Send us a message</span>
          </div>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {activeSideBar && (
          <SideBar
            activeSideBar={activeSideBar}
            setActiveSideBar={setActiveSideBar}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
