"use client";

import React, {useState} from 'react'
import HeroSection from './HeroSection'
import Navigation from './Navigation'

const HomePageWrapper = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <>
    <Navigation imageLoaded={imageLoaded}/>
    <HeroSection imageLoaded={imageLoaded} setImageLoaded={setImageLoaded}/>
    </>
  )
}

export default HomePageWrapper