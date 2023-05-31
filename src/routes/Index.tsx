import { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import Overlay from '@/components/helpers/Overlay'
import Background from '@/components/canvas/Background'
import { GradientTexture, Mask, PerspectiveCamera, Scroll, useMask, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import Hero from '@/components/canvas/Hero'
import Skills from '@/components/canvas/Skills'
import HeroDom from '@/components/dom/Hero'
import SkillsDom from '@/components/dom/Skills'
import AboutDom from '@/components/dom/About'
import ExperienceDom from '@/components/dom/Experience'

export default function Index() {
  const cam = useRef<THREE.Camera>()
  const camOffset = useRef({ y: 0, x: 0 })
  const scroll = useScroll()
  const tl = useRef<gsap.core.Timeline>()
  const bgColors = useRef({ colorA: '#222', colorB: '#222', start: 1, end: 0 })
  const heroRef = useRef<THREE.Group>() // hero section shader
  
  useFrame(({ mouse }) => {
    // cam.current.position.x = THREE.MathUtils.lerp(cam.current.position.x, mouse.x / window.innerWidth * 30 + camOffset.current.x, 0.05)
    // cam.current.position.y = THREE.MathUtils.lerp(cam.current.position.y, mouse.y / window.innerHeight * 30 + camOffset.current.y, 0.05)
    tl.current.seek(scroll.offset * scroll.pages / 7 * tl.current.duration())
  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline()
    tl.current.to(heroRef.current.position, { duration: 2, y: 3 })
    tl.current.to(bgColors.current, { duration: 2, end: 0.5 }, '<')
    tl.current.to(bgColors.current, { duration: 1, colorA: '#222' }, '<')
  }, [])

  return (
    <>
      <Background bgColors={bgColors} />
      <PerspectiveCamera ref={cam} makeDefault fov={20} position={[0, 0, 3]} far={13} />
      
      <group ref={heroRef}>
        <Hero />
      </group>

      <Scroll html>
        <Overlay>
          <HeroDom />
        </Overlay>
        <Overlay>
          <AboutDom />
        </Overlay>
        <Overlay>
          <SkillsDom />
        </Overlay>
        <Overlay>
          <ExperienceDom />
        </Overlay>
      </Scroll>
    </>
  )
}
