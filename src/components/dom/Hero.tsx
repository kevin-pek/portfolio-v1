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

      <div className="mt-8">
        <a
          target='_blank'
          href='kevin-cv.pdf'
          className='my-auto h-fit w-fit rounded-lg border-solid border border-[#6345CA] text-[#B395FA] p-4 px-8 hover:bg-[#6345CA] hover:text-white transition-colors'
        >
        Resume
        </a>
      </div>

      <div className="z-0">
        {/* top gradient bar */}
        <div className='bg-blur absolute -top-3/4 left-[-20vw] h-screen w-[120vw] bg-gradient-to-b from-[#6345CA] bg-blend-color-burn' />
        <div
          className='bg-blur absolute -bottom-3/4 left-[-37vw] h-screen w-1/2 rounded-[9999px] opacity-40 bg-blend-color-burn'
          style={{
            background: "conic-gradient(from -30deg at 50% 50%, rgba(234, 88, 12, 0), #EA5)",
          }}
        />
        <div
          className='bg-blur absolute -bottom-1/4 -right-1/3 h-5/6 w-1/2 rounded-[9999px] opacity-50 bg-blend-color-burn'
          style={{
            background: "conic-gradient(from 0deg at 68.85% 66.54%, #6345CA 0deg, rgba(234, 88, 12, 0) 360deg"
          }}
        />
        {/* bottom gradient bar */}
        <div className='bg-blur absolute -bottom-1/2 left-[-15vw] h-1/4 w-[110vw] rounded-[9999px] bg-[#6345CA] opacity-20 bg-blend-color-burn' />
      </div>
    </section>
  )
}
