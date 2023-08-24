import { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { PerspectiveCamera, Sphere } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import NoiseParticles from '@/components/canvas/NoiseParticles'
import useScroll from '@/hooks/useScroll'

export default function Hero() {
  const cam = useRef<THREE.Camera>()
  const scroll = useScroll()
  const tl = useRef<gsap.core.Timeline>()
  const heroRef = useRef<THREE.Group>() // hero section shader
  
  useFrame(() => {
    tl.current.seek(scroll * tl.current.duration())
  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline()
    tl.current.to(heroRef.current.position, { duration: 2, y: 2 })
  }, [])

  return (
    <>
      <Sphere scale={[10, 10, 10]} rotation-y={Math.PI / 2}>
        <meshPhongMaterial color={'#111'} side={THREE.BackSide} />
      </Sphere>
      <PerspectiveCamera ref={cam} makeDefault fov={20} position={[0, 0, 3]} far={13} />
      
      <group ref={heroRef}>
        <NoiseParticles />
      </group>
    </>
  )
}
