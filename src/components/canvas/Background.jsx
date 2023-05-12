import { Environment, Sphere } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { Gradient, LayerMaterial } from "lamina"
import { useRef } from "react"
import * as THREE from "three"

export default function Background({ bgColors }) {
  const bgGradient = useRef()
  const envGradient = useRef()

  useFrame(() => {
    bgGradient.current.colorA = new THREE.Color(bgColors.current.colorA)
    bgGradient.current.colorB = new THREE.Color(bgColors.current.colorB)
    envGradient.current.colorA = new THREE.Color(bgColors.current.colorA)
    envGradient.current.colorB = new THREE.Color(bgColors.current.colorB)
    bgGradient.current.start = bgColors.current.start
    bgGradient.current.end = bgColors.current.end
    envGradient.current.start = bgColors.current.start
    envGradient.current.end = bgColors.current.end
  })

  return (
    <>
      <Sphere scale={[10, 10, 10]} rotation-y={Math.PI / 2}>
        <LayerMaterial color={"#ffffff"} side={THREE.BackSide}>
          <Gradient ref={bgGradient} axes={"y"} />
        </LayerMaterial>
      </Sphere>
      <Environment resolution={256} frames={Infinity}>
        <Sphere
          scale={[10, 10, 10]}
          rotation-y={Math.PI / 2}
          rotation-x={Math.PI}
        >
          <LayerMaterial color={"#ffffff"} side={THREE.BackSide}>
            <Gradient ref={envGradient} axes={"y"} />
          </LayerMaterial>
        </Sphere>
      </Environment>
    </>
  )
}
