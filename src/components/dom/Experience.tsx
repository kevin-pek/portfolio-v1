export default function Experience() {
  return (
    <div className="h-[500svh] bg-[#111]">
      <div className="flex w-full flex-row">
        <div className="from-cold-900 h-96 w-1/2 -translate-y-40 -skew-y-12 bg-gradient-to-b to-[#111]" />
        <div className="from-cold-900 h-96 w-1/2 -translate-y-40 skew-y-12 bg-gradient-to-b to-[#111]" />
      </div>
      <div className='-translate-y-80'>
        <div>
          <h1 className='from-white to-cold-800 mx-auto w-fit bg-gradient-to-br bg-clip-text text-center text-6xl font-extrabold text-transparent'>Experience</h1>
        </div>

        <section className="mx-auto mt-8 w-11/12 sm:w-3/4">
        {/* each item has range represented by rounded rect, current month is represented by bold segment */}
          <ul>
            <span className="from-cold-800 to-white absolute sm:left-1/4 z-20 mt-7 h-3 w-3 -translate-x-1.5 rounded-full bg-gradient-to-br" />
            <span className={`from-cold-800 to-white absolute sm:left-1/4 z-10 my-8 h-full w-[1px] bg-gradient-to-br`} />

            <li className='flex flex-row'>
              <div className='hidden sm:block w-1/6'>
                <h1 className='p-4 text-right text-2xl text-white'>2023</h1>
              </div>
              <div className="w-full sm:w-5/6 pl-4 text-justify text-white text-sm sm:text-lg">
                <div>
                  <h2 className='text-2xl'>Student Researcher at NUS IORA</h2>
                  <h3 className='text-lg sm:text-xl'>Learning Platform for Intelligent Tutoring Systems using Multi Armed Bandits</h3>
                  <p>I am currently a part time student researcher at the NUS Institute of Operations Research and Analytics,
                  over the course of a year I developed a full stack learning platform using React, MUI, Express, FastAPI and MySQL that uses a machine learning algorithm to recommend questions based on the trainee's profile to maximise their learning pace.
                  </p>
                  <br />
                  <p>
                  Among the features were dashboards for analytics, content and user management system for trainers, and a learning and quiz interface for trainees. It also features a model management
                  system to allow machine learning algorithms to be uploaded and tested on specific groups of trainees.
                  </p>
                  <br />
                  <p>
                  Additionally, I implemented Multi Armed Bandit algorithms in python that uses empirical estimation of a trainee&apos;s learning progress to optimise the exploration/exploitation involved in this process.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
