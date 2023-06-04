import { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { PerspectiveCamera, Sphere } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import Hero from '@/components/canvas/Hero'
import useScroll from '@/hooks/useScroll'

export default function Index() {
  const cam = useRef<THREE.Camera>()
  const scroll = useScroll()
  const tl = useRef<gsap.core.Timeline>()
  const heroRef = useRef<THREE.Group>() // hero section shader
  
  useFrame(() => {
    tl.current.seek(scroll * tl.current.duration())
  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline()
    tl.current.to(heroRef.current.position, { duration: 1, y: 1 })
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
    </>
  )
}
