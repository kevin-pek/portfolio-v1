'use client'

import Navbar from '@/components/dom/Navbar'
import { Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import './global.css'
import Index from '@/routes/Index'
import HeroDom from '@/components/dom/Hero'
import SkillsDom from '@/components/dom/Skills'
import AboutDom from '@/components/dom/About'
import ExperienceDom from '@/components/dom/Experience'
import Footer from '@/components/dom/Footer'

export default function Page() {
  return (
    <>
      <div className='fixed h-screen w-screen'>
        <Canvas>
          <Index />
        </Canvas>
      </div>

      <HeroDom />
      <AboutDom />
      <SkillsDom />
      <ExperienceDom />
      <Footer />
      <Navbar />
      <Loader />
    </>
  )
}
