"use client";

import React, {useState, useEffect} from 'react'
import HeroSection from './HeroSection'
import Navigation from './Navigation'

const HomePageWrapper = () => {
  const [activeSideBar, setActiveSideBar] = useState(false);
  return (
    <>
    <Navigation activeSideBar={activeSideBar} setActiveSideBar={setActiveSideBar}/>
    <HeroSection />
    </>
  )
}

export default HomePageWrapper