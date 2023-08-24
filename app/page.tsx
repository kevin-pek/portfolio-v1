'use client'

import React from 'react'
import Navbar from '@/components/dom/Navbar'
import { Canvas } from '@react-three/fiber'
import './global.css'
import HeroScene from '@/scenes/Hero'
import Hero from '@/components/dom/Hero'
import Skills from '@/components/dom/Skills'
import About from '@/components/dom/About'
import Experience from '@/components/dom/Experience'
import Footer from '@/components/dom/Footer'

export default function Page() {
  return (
    <>
      <div className='fixed h-screen w-screen'>
        <Canvas>
          <HeroScene />
        </Canvas>
      </div>

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Footer />
      <Navbar />
    </>
  )
}
