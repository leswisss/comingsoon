"use client";

import React, {useState, useEffect} from 'react'
import HeroSection from './HeroSection'
import Navigation from './Navigation'

const HomePageWrapper = () => {
  const [activeSideBar, setActiveSideBar] = useState(false);
  return (
    <>
    <Navigation activeSideBar/>
    <HeroSection />
    </>
  )
}

export default HomePageWrapper