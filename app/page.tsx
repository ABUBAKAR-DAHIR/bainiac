import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function page() {
  return (
    <>
        <Navbar /> 
        <Hero />
        <About />
        <Contact />
        <Footer />
    </>
  )
}
