'use client'

import React from 'react'
import Navbar from '@/components/dom/Navbar'
import { Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import './global.css'
import Index from '@/routes/Index'
import Hero from '@/components/dom/Hero'
import Skills from '@/components/dom/Skills'
import About from '@/components/dom/About'
import Experience from '@/components/dom/Experience'
import Footer from '@/components/dom/Footer'
import { Suspense } from 'react'

export default function Page() {
  return (
    <>
      <div className='fixed h-screen w-screen'>
        <Canvas>
          <Suspense fallback={<Loader />}>
            <Index />
          </Suspense>
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
