'use client'

import Navbar from '@/components/dom/Navbar'
import '@/global.css'
import { Loader, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Index from '@/routes/Index'

export default function Page() {

  return (
    <>
      <Canvas className='h-screen'>
        <ScrollControls pages={5}>
          <Index />
        </ScrollControls>
      </Canvas>
      <Navbar />
      <Loader />
    </>
  )
}
