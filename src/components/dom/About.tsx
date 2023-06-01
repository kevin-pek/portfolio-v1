export default function About() {
  return (
    <section className='relative flex overflow-hidden py-32 text-gray-100 lg:pt-64 '>
      {/* hero gradient splash sticky until skills section comes out */}
      <div className="mx-auto h-fit w-11/12 items-center bg-gray-100 bg-opacity-5 py-8 lg:w-5/6 lg:px-8 lg:py-28">
        <div className='mx-auto flex w-11/12 flex-col gap-4 text-justify lg:w-5/6'>
          <h1 className='text-center text-5xl font-extrabold lg:mb-4'>About Me</h1>
          <p>I am an undergraduate at the National University of Singapore, studying Data Science and Analytics with a second major in Computer Science. I am currently in my penultimate year of study.</p>
          <p>My interests encompass software engineering, data science, machine learning and AI. I am particularly interested in MLOps due to its ability to deploy Machine Learning models to production in a scalable, reliable and efficient manner.</p>
          <p>My hobbies include sports, exercise and also singing. I also enjoy creating art using various mediums, particularly watercolor and computer graphics.</p>
        </div>
      
        <div className='mx-auto mt-8 h-64 w-11/12 bg-gray-100 bg-opacity-5 lg:mt-16 lg:w-5/6'>
        </div>
      </div>
      <div className='absolute -bottom-32 left-[-10vw] h-96 w-[120vw] bg-gradient-to-t from-[#6345CA] blur-3xl' />
    </section>
  )
}
