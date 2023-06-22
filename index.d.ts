import DofPointsMaterial from "./src/shaders/DofPointsMaterial"
import DofAccPointsMaterial from "./src/shaders/DofAccPointsMaterial"
import SimulationMaterial from "./src/shaders/SimulationMaterial"

declare module '*.vert' {
  const content: string
  export default content
}

declare module '*.frag' {
  const content: string
  export default content
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      dofPointsMaterial: ReactThreeFiber.Object3DNode<DofPointsMaterial, typeof DofPointsMaterial>;
      dofAccPointsMaterial: ReactThreeFiber.Object3DNode<DofAccPointsMaterial, typeof DofAccPointsMaterial>;
      simulationMaterial: ReactThreeFiber.Object3DNode<SimulationMaterial, typeof SimulationMaterial>;
    }
  }
}
