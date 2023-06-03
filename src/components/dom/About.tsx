import Image from "next/image"
import portrait from "/public/img/portrait.png"

export default function About() {
  return (
    <section className='relative flex overflow-hidden py-32 text-gray-100 lg:pt-64 '>
      <div className="mx-auto flex h-fit w-11/12 flex-row items-center gap-16 bg-gray-100 bg-opacity-5 py-8 md:px-8 lg:w-5/6 lg:px-12 lg:py-28">
        <div className='mx-auto flex flex-col gap-4 text-justify'>
          <h1 className='text-center text-5xl font-extrabold lg:mb-4'>About Me</h1>
          <p>I am an undergraduate at the National University of Singapore, studying Data Science and Analytics with a second major in Computer Science. I am currently in my penultimate year of study.</p>
          <p>My interests encompass software engineering, data science, machine learning and AI. I am particularly interested in MLOps due to its ability to deploy Machine Learning models to production in a scalable, reliable and efficient manner.</p>
          <p>My hobbies include sports, exercise and also singing. I also enjoy creating art using various mediums, particularly watercolor and computer graphics.</p>
        </div>
     
        <Image
          src={portrait}
          alt='me'
          className='hidden w-1/4 grayscale-[10%] sm:block'
          style={{ WebkitMaskImage: "-webkit-gradient(linear, left 50%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))" }}
        />
      </div>
      <div className='bg-blur absolute -bottom-32 left-[-10vw] h-96 w-[120vw] bg-gradient-to-t from-[#6345CA]' />
    </section>
  )
}
