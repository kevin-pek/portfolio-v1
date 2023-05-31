import TypewriterComponent from "typewriter-effect"

export default function Hero() {
  return (
    <section className='relative mx-auto flex h-screen w-3/4 flex-col justify-center gap-4 text-center text-white'>
      <div className='text-5xl sm:text-6xl'>
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter
            .typeString("Hi, I'm Kevin.")
            .start()
          }}
        />
      </div>

      <div>
        <button className="mx-auto rounded-lg border border-white p-4">Contact Me</button>
      </div>

      <div className="z-0">
        <div className='absolute -left-[20vw] -top-3/4 h-screen w-[120vw] bg-gradient-to-b from-[#6345CA] bg-blend-color-burn blur-3xl' />
        <div
          className='bg-shape bg-blur absolute -bottom-3/4 -left-[37vw] h-screen w-1/2 opacity-40 bg-blend-color-burn'
          style={{
            background: "conic-gradient(from -30deg at 50% 50%, rgba(234, 88, 12, 0), #EA5)",
          }}
        />
        <div
          className='bg-shape bg-blur absolute -bottom-1/4 -right-1/3 h-5/6 w-1/2 opacity-50 bg-blend-color-burn'
          style={{
            background: "conic-gradient(from 0deg at 68.85% 66.54%, #6345CA 0deg, rgba(234, 88, 12, 0) 360deg"
          }}
        />
        <div className='bg-shape bg-blur absolute -bottom-1/2 -left-[15vw] h-1/4 w-[110vw] bg-[#6345CA] opacity-20 bg-blend-color-burn' />
      </div>
    </section>
  )
}
