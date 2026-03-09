import { useState } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import HeroCarousel from './pages/home/HeroCarousel'
import LandingPage from './pages/home/LandingPage'
import ChannelsSection from './pages/home/ChannelsSection'
import Footer from './components/layout/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RouterPage from './router/RouterPage'

function App() {

  return (
    <>
    <BrowserRouter>
      <RouterPage/>
    </BrowserRouter>
    </>
  )
}

export default App
