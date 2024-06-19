"use client";

import React, {useState, useEffect} from 'react'
import HeroSection from './HeroSection'
import Navigation from './Navigation'

const HomePageWrapper = () => {
  return (
    <>
    <Navigation />
    <HeroSection />
    </>
  )
}

export default HomePageWrapper