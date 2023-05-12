export default function About() {
  return (
    <section className='mx-auto flex h-screen w-5/6 basis-0 flex-row items-center justify-between gap-10 text-gray-100'>
    {/* pan from space to earth setting map overlay showing singapore, room model showing hobbies, forest model */}
      <div className='w-full'>
        I am here!
      </div>
      <div className='flex w-full flex-col items-center gap-4'>
        <h1 className='text-3xl'>About Me</h1>
        <p className='text-justify'>I am a sophomore at the National University of Singapore, studying Data Science and Analytics with a second major in Computer Science.</p>
        <p>I enjoy a wide array of activites such as exercise, computer art</p>
      </div>
    </section>
  )
}
