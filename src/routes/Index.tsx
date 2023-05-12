import { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { useDarkMode } from "@/stores/DarkMode"
import gsap from 'gsap'
import Overlay from '@/components/helpers/Overlay'
import Background from '@/components/canvas/Background'
import { PerspectiveCamera, Scroll, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import Hero from '@/components/canvas/Hero'
import HeroDom from '@/components/dom/Hero'
import Skills from '@/components/dom/Skills'
import About from '@/components/dom/About'
import Experience from '@/components/dom/Experience'

export default function Index() {
  const cam = useRef<THREE.Camera>()
  const camOffset = useRef({ y: 0, x: 0 })
  const scroll = useScroll()
  const tl = useRef<gsap.core.Timeline>()
  const darkMode = useDarkMode((state) => state.darkMode)
  const bgColors = useRef({ colorA: '#6358AD', colorB: '#222', start: 1, end: 0.2 })

  useFrame(({ mouse }) => {
    cam.current.position.x = THREE.MathUtils.lerp(cam.current.position.x, mouse.x / window.innerWidth * 30 + camOffset.current.x, 0.05)
    cam.current.position.y = THREE.MathUtils.lerp(cam.current.position.y, mouse.y / window.innerHeight * 30 + camOffset.current.y, 0.05)

    tl.current.seek(scroll.offset * tl.current.duration())
  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline()
    
    tl.current.to(camOffset.current, { duration: 1, y: -2 })
    tl.current.to(bgColors.current, { duration: 1, start: 1.3, end: 0.5 }, '<')

    tl.current.to(bgColors.current, { delay: 1, colorA: '#BEE1FD', colorB: '#E6E6D8', duration: 1 })
    tl.current.to(bgColors.current, { duration: 1, start: 0.2, end: -0.2 }, '<')
  }, [])

  return (
    <>
      <Background bgColors={bgColors} />
      <PerspectiveCamera ref={cam} makeDefault fov={20} position={[0, 0, 3]} far={13} />
      <Hero />
      <Scroll html>
        <Overlay>
          <HeroDom />
        </Overlay>
        <Overlay notInViewClasses='opacity-0 duration-500' inViewClasses='duration-500 opacity-100' threshold={0.6}>
          <About />
        </Overlay>
        <Overlay>
          <Skills />
        </Overlay>
        <Overlay>
          <Experience />
        </Overlay>
      </Scroll>
    </>
  )
}
