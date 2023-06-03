import { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { PerspectiveCamera, Scroll, Sphere, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import Hero from '@/components/canvas/Hero'
import HeroDom from '@/components/dom/Hero'
import SkillsDom from '@/components/dom/Skills'
import AboutDom from '@/components/dom/About'
import ExperienceDom from '@/components/dom/Experience'

export default function Index() {
  const cam = useRef<THREE.Camera>()
  const scroll = useScroll()
  const tl = useRef<gsap.core.Timeline>()
  const heroRef = useRef<THREE.Group>() // hero section shader
  
  useFrame(() => {
    tl.current.seek(scroll.offset * scroll.pages / 7 * tl.current.duration())
  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline()
    tl.current.to(heroRef.current.position, { duration: 2, y: 3 })
  }, [])

  return (
    <>
      <Sphere scale={[10, 10, 10]} rotation-y={Math.PI / 2}>
        <meshPhongMaterial color={'#111'} side={THREE.BackSide} />
      </Sphere>
      <PerspectiveCamera ref={cam} makeDefault fov={20} position={[0, 0, 3]} far={13} />
      
      <group ref={heroRef}>
        <Hero />
      </group>

      <Scroll html>
        <HeroDom />
        <AboutDom />
        <SkillsDom />
        <ExperienceDom />
      </Scroll>
    </>
  )
}
