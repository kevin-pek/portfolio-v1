import { Text, useMask, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from 'three'
import gsap from 'gsap'

export default function Skills({ ...props}) {
  const headerRef = useRef<THREE.Mesh>()
  const { camera } = useThree()
  
  const headerPos = useMemo(() => new THREE.Vector3(0, 0, -1), [])

  const scroll = useScroll()
  const stencil = useMask(1)

  const tl = useRef<gsap.core.Timeline>()

  useFrame(() => {
    headerRef.current.position.x = camera.position.x
    tl.current.seek(scroll.offset * scroll.pages  / 7 * tl.current.duration())
  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline()
    tl.current.to(headerRef.current.position, { duration: 1, y: 2, delay: 0.6 })
  }, [headerPos])

  return (
    <group {...props}>
      <Text
        ref={headerRef}
        fontSize={0.15}
        position={[0, 0, -1]}
      >
        Skills
        <meshPhongMaterial {...stencil} color={'white'}/>
      </Text>
    </group>
  )
}
