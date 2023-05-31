import './card.css'
import { CSSProperties, useEffect, useRef, useState } from "react";

interface CSSMousePos extends CSSProperties {
  '--x': number;
  '--y': number;
}

interface MousePos {
  x: number;
  y: number;
}

const Card = ({children}) => {
  const [localMousePos, setLocalMousePos] = useState<MousePos>({ x: 0, y: 0 });
  const card = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const rect = card.current.getBoundingClientRect();
      const localX = event.clientX - rect.left;
      const localY = event.clientY - rect.top;

      setLocalMousePos({ x: localX, y: localY });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, [])

  return (
      <div
        className='card flex w-full flex-col items-center gap-4 rounded-xl text-sm sm:text-lg'
        style={{ '--x': localMousePos.x, '--y': localMousePos.y } as CSSMousePos}
        ref={card}
      >
        {children}
      </div>
  )
}

export default function About() {
  return (
    <section className='relative flex h-[150vh] overflow-hidden text-gray-100 '>
      {/* hero gradient splash sticky until skills section comes out */}
      <div
        className="mx-auto bg-grey-800 bg-opacity-50 items-center h-full w-11/12 sm:w-5/6  p-4 sm:p-8"
        style={{ backdropFilter: "blur(80px)", WebkitBackdropFilter: "blur(4px)" }}
      >
        <div className='mx-auto mt-4 sm:mt-[15vh] flex w-11/12 sm:w-5/6 flex-col gap-4 text-justify'>
          <h1 className='sm:mb-4 text-center text-5xl font-extrabold'>About Me</h1>
          <p>I am an undergraduate at the National University of Singapore, studying Data Science and Analytics with a second major in Computer Science. I am currently in my penultimate year of study.</p>
          <p>My interests encompass software engineering, data science, machine learning and AI. I am particularly interested in MLOps due to its ability to deploy Machine Learning models to production in a scalable, reliable and efficient manner.</p>
          <p>My hobbies include sports, exercise and also singing. I also enjoy creating art using various mediums, particularly watercolor and computer graphics.</p>
        </div>
      
        <div className='mx-auto w-11/12 sm:w-5/6 mt-8 sm:mt-[15vh] bg-opacity-5 bg-gray-100 h-1/4'>
        </div>
      </div>
      <div className='absolute -left-[10vw] top-3/4 h-screen w-[120vw] bg-gradient-to-t from-[#6345CA] blur-3xl' />
    </section>
  )
}
