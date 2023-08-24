'use client'

import * as THREE from "three"
import { useState } from "react"

type ZoomParticleProps = {
  speed: number
  numParticles: number
}

export default function ZoomParticles({ speed, numParticles }: ZoomParticleProps) {
  const [scene] = useState(() => new THREE.Scene())
  const [camera] = useState(() => new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1))

  return (
    <>
      <points frustumCulled={false}>
        
      </points>
    </>
  )
}
