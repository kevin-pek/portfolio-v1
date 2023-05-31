'use client'

import { useFBO } from "@react-three/drei"
import { createPortal, extend, useFrame } from "@react-three/fiber"
import { useMemo, useRef, useState } from "react"
import * as THREE from "three"
import SimulationMaterial from "@/shaders/SimulationMaterial"
import DofPointsMaterial from "@/shaders/DofPointsMaterial"
import DofAccPointsMaterial from "@/shaders/DofAccPointsMaterial"

extend({ SimulationMaterial })
extend({ DofPointsMaterial })
extend({ DofAccPointsMaterial })

// shaders adapted from GPGPU curl-noise + DOF https://codesandbox.io/s/zgsyn
const speed = 0.1
const size = 48
const accentCount = 24

export default function Hero() {
  const [scene] = useState(() => new THREE.Scene())
  const [camera] = useState(() => new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1))

  const positions = new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0])
  const uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0])
  const simRef = useRef<THREE.ShaderMaterial>()
  const renderRef = useRef<THREE.ShaderMaterial>()
  const accRef = useRef<THREE.ShaderMaterial>()

  const renderTarget = useFBO(size, size, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
    type: THREE.FloatType
  })

  // Generate our positions attributes array
  const particles = useMemo(() => {
    const length = size * size
    const particles = new Float32Array(length * 3)
    for (let i = 0; i < length; i++) {
      let idx = i * 3
      particles[idx + 0] = (i % size) / size
      particles[idx + 1] = i / size / size
    }
    return particles
  }, [])

  const accentParticles = useMemo(() => {
    const length = accentCount * accentCount
    const particles = new Float32Array(length * 3)
    for (let i = 0; i < length; i++) {
      let idx = i * 3
      particles[idx + 0] = (i % accentCount) / accentCount
      particles[idx + 1] = i / accentCount / accentCount
    }
    return particles
  }, [])

  useFrame((state) => {
    state.gl.setRenderTarget(renderTarget)
    state.gl.clear()
    state.gl.render(scene, camera)
    state.gl.setRenderTarget(null)
    
    renderRef.current.uniforms.uPositions.value = renderTarget.texture
    renderRef.current.uniforms.uTime.value = state.clock.elapsedTime
    accRef.current.uniforms.uPositions.value = renderTarget.texture
    accRef.current.uniforms.uTime.value = state.clock.elapsedTime
    simRef.current.uniforms.uTime.value = state.clock.elapsedTime * speed
  });
  
  return (
    <>
      <ambientLight intensity={1} />
      {/* FBO Simulation */}
      {createPortal(
        <mesh>
          <simulationMaterial ref={simRef} />
          <bufferGeometry>
            <bufferAttribute
              attach='attributes-position'
              count={positions.length / 3}
              array={positions}
              itemSize={3}
            />
            <bufferAttribute
              attach='attributes-uv'
              count={uvs.length / 2}
              array={uvs}
              itemSize={2}
            />
          </bufferGeometry>
        </mesh>,
        scene
      )}
      {/* Result is forwarded into a point-cloud via data-texture */}
      <points frustumCulled={false}>
        <dofPointsMaterial
          ref={renderRef}
          blending={THREE.AdditiveBlending}
          transparent={true}
          depthWrite={false}
        />
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
      </points>
      <points frustumCulled={false}>
        <dofAccPointsMaterial
          ref={accRef}
          blending={THREE.AdditiveBlending}
          transparent={true}
          depthWrite={false}
        />
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={accentParticles.length / 3}
            array={accentParticles}
            itemSize={3}
          />
        </bufferGeometry>
      </points>
    </>
  )
}
