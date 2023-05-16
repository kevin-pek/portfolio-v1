import { shaderMaterial } from "@react-three/drei"
import * as THREE from 'three'
// @ts-ignore
import fragment from './sim.frag'
// @ts-ignore
import vertex from './sim.vert'

const points = (width: number, height: number) => {
  const length = width * height * 4
  const data = new Float32Array(length)

  for (let i = 0; i < length; i++) {
    const idx = i * 4

    const distance = 1.0
    const theta = THREE.MathUtils.randFloatSpread(360)
    const phi = THREE.MathUtils.randFloatSpread(360)

    data[idx] = distance * Math.sin(theta) * Math.cos(phi)
    data[idx + 1] = distance * Math.sin(theta) * Math.sin(phi)
    data[idx + 2] = distance * Math.cos(theta)
    data[idx + 3] = idx
  }

  return data
}

const size = 100
const params = {
  curlFreq: 0.77
}

const SimulationMaterial = shaderMaterial(
  {
    positions: new THREE.DataTexture(
      points(size, size),
      size,
      size,
      THREE.RGBAFormat,
      THREE.FloatType
    ),
    uCurlFreq: params.curlFreq,
    uTime: 0
  },
  vertex,
  fragment
)

export default SimulationMaterial
