import TypewriterComponent from "typewriter-effect"

export default function Hero() {
  return (
    <section className='mx-auto flex h-screen w-3/4 flex-col justify-center gap-4 text-center text-white'>
      <div className='text-5xl sm:text-6xl'>
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter
            .typeString("Hi, I'm Kevin.")
            .start()
          }}
        />
      </div>

      <p>Scroll down for more...</p>
      
      <div>
        <button>Contact Me</button>
      </div>
    </section>
  )
}
