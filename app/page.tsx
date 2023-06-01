'use client'

import Navbar from '@/components/dom/Navbar'
import { Loader, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import '@/global.css'
import Index from '@/routes/Index'

export default function Page() {
  return (
    <>
      <Canvas className='h-screen' dpr={1}>
        <ScrollControls pages={10} damping={0.1}>
          <Index />
        </ScrollControls>
      </Canvas>
      <Navbar />
      <Loader />
    </>
  )
}
