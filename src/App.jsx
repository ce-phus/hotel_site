import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { motion, useScroll } from 'framer-motion'

import { About, Contact, Footer, Hero, Menu, Navbar, Service, Special, Event } from './components'

const App = () => {

  const { scrollYProgress } = useScroll()

  return (
    <BrowserRouter>
    <div className='relative z-0'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center bg-primary'>
        <Navbar/>
        <Hero/>
      </div>
      <Service/>
      <About/>
      <Special/>
      <Menu/>
      <Contact/>
      <Event/>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App