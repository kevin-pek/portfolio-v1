import React from "react";
import { useInView } from "react-intersection-observer";

export default function Overlay({ children, inViewClasses = '', notInViewClasses = '', threshold = 0 }) {
  const { inView, ref } = useInView({ threshold })

  return (
    <div ref={ref} className={`w-screen ${inView ? inViewClasses : notInViewClasses}`}>
      {children}
    </div>
  )
}
