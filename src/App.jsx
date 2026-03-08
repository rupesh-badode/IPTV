import { useState } from 'react'

import './App.css'
import Navbar from './components/layout/Navbar'
import HeroCarousel from './pages/home/HeroCarousel'
import LandingPage from './pages/home/LandingPage'
import ChannelsSection from './pages/home/ChannelsSection'

function App() {

  return (
    <>
      <Navbar/>
      <LandingPage/>
    </>
  )
}

export default App
