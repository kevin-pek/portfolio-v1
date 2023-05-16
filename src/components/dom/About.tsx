import Image from "next/image";

export default function About() {
  return (
    <section className='mx-auto flex h-[80vh] w-5/6 basis-0 flex-row items-center justify-between text-gray-100 sm:gap-10'>
      <div className='flex w-full flex-col items-center gap-4 text-sm sm:text-lg'>
        <h1 className='text-5xl font-extrabold'>About Me</h1>
        <p className='text-justify'>I am an undergraduate at the National University of Singapore, studying Data Science and Analytics with a second major in Computer Science. I am currently in my penultimate year of study.</p>
        <p>My interests encompass software engineering, data science, machine learning and AI. I am particularly interested in MLOps due to its ability to deploy Machine Learning models to production in a scalable, reliable and efficient manner.</p>
        <p>My hobbies include sports, exercise and also singing. I also enjoy creating art using various mediums, particularly watercolor and computer graphics.</p>
      </div>
      <div className='sm:w-full' />
    </section>
  )
}
