import { shaderMaterial } from '@react-three/drei'
// @ts-ignore
import fragment from './dof.frag'
// @ts-ignore
import vertex from './dof.vert'

const params = {
  focus: 3.1,
  fov: 2,
  aperture: 1.0
}

export const DofPointsMaterial = shaderMaterial(
  {
    uPositions: null,
    uTime: 0,
    uFocus: params.focus,
    uFov: params.fov,
    uBlur: (5.6 - params.aperture) * 9
  },
  vertex,
  fragment
)

export default DofPointsMaterial
