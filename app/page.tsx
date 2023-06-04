'use client'

import * as THREE from 'three'
import Navbar from '@/components/dom/Navbar'
import { Loader } from '@react-three/drei'
import { Canvas, createRoot, events, extend } from '@react-three/fiber'
import './global.css'
import Index from '@/routes/Index'
import HeroDom from '@/components/dom/Hero'
import SkillsDom from '@/components/dom/Skills'
import AboutDom from '@/components/dom/About'
import ExperienceDom from '@/components/dom/Experience'
import { useEffect } from 'react'
import { Lenis } from '@studio-freight/react-lenis'

extend(THREE)

export default function Page() {

  return (
    <Lenis root>
      <Canvas style={{ position: 'fixed' }}>
        <Index />
      </Canvas>
      <HeroDom />
      <AboutDom />
      <SkillsDom />
      <ExperienceDom />
      <Navbar />
      <Loader />
    </Lenis>
  )
}
