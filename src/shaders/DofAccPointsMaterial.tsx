import { shaderMaterial } from '@react-three/drei'
import fragment from './dofGold.frag'
import vertex from './dof.vert'

const params = {
  focus: 3.1,
  fov: 2,
  aperture: 1.0
}

export const DofAccPointsMaterial = shaderMaterial(
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

export default DofAccPointsMaterial