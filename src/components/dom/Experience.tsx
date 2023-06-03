import Tab from "../ui/Tab"

const Event = ({ title, role, description, points }) => {
  return (
    <div className="w-full pl-4 text-justify text-sm text-white sm:w-5/6 sm:text-lg">
      <h2 className='text-2xl font-extrabold'>{title}</h2>
      <h3 className='mt-2 text-xl sm:text-2xl'>{role}</h3>
      <p className='mt-4'>{description}</p>
      <ul style={{ listStyleType: 'circle' }} className='ml-4 mt-4'>
        {points.map((p: string, i: number) => <li className="list-item" key={i}>{p}</li>)}
      </ul>
    </div>
  )
}

export default function Experience() {
  return (
    <div className="h-[500svh] bg-[#111]">
      <div className="flex w-full flex-row">
        <div className="from-cold-900 h-96 w-1/2 -translate-y-40 -skew-y-12 bg-gradient-to-b to-[#111]" />
        <div className="from-cold-900 h-96 w-1/2 -translate-y-40 skew-y-12 bg-gradient-to-b to-[#111]" />
      </div>
        
      <div className='-translate-y-80'>
        <Tab>
          <div className="text-xl text-white" label="Experience">
            <section className="mx-auto mt-8 w-11/12 sm:w-3/4">
            {/* each item has range represented by rounded rect, current month is represented by bold segment */}
              <ul>
                {/* timeline line */}
                <span className="from-cold-800 absolute z-20 mt-7 h-3 w-3 -translate-x-1.5 rounded-full bg-gradient-to-br to-white sm:left-1/4" />
                <span className={`from-cold-800 absolute z-10 my-8 h-full w-[1px] bg-gradient-to-br to-white sm:left-1/4`} />

                {experiences.map((exp, i) =>
                  <li className='mb-4 flex flex-row' key={i}>
                    <div className='hidden w-1/6 sm:block'>
                      <h1 className='p-4 text-right text-2xl text-white'>2023</h1>
                    </div>
                    <Event {...exp} />
                  </li>
                )}
              </ul>
            </section>
          </div>

          <div className="text-xl text-white" label="Projects">
            <section className="mx-auto mt-8 w-11/12 sm:w-3/4">
              <ul>
                {projects.map((exp, i) =>
                  <li className='mb-4 flex flex-row' key={i}>
                    <div className='hidden w-1/6 sm:block'>
                      <h1 className='p-4 text-right text-2xl text-white'>2023</h1>
                    </div>
                    <Event {...exp} />
                  </li>
                )}
              </ul>
            </section>
          </div>
        </Tab>

      </div>
    </div>
  )
}

const experiences = [
  {
    title: 'Full Stack Developer/Student Researcher at NUS IORA',
    role: 'Learning Platform for Intelligent Tutoring Systems using Multi Armed Bandits',
    description: 'Learning platform that uses a machine learning algorithm to recommend questions based on the trainee&apos;s profile to maximise their learning pace. Features dashboards for analytics, content and user management system for trainers, and a learning and quiz interface for trainees. It also features a model management system to allow machine learning algorithms to be uploaded and tested on specific groups of trainees.',
    points: [
      'Full stack development using React (Material UI) and Express, using Typescript.',
      'Implemented Multi Armed Bandit algorithms in python that uses empirical estimation of a trainee\'s learning progress to optimise the exploration/exploitation involved in this process.',
      'Deployed machine learning models using FastAPI.',
      'Deployed applications by containerising them using Docker onto AWS.'
    ]
  },
  {
    title: 'Full Stack Intern at Idemia',
    role: '',
    description: '',
    points: [
      'Developed application for microservice orchestration in Java using Spring Boot and Apache Camel.',
      'Wrote unit and integration tests using JUnit and Testcontainers.',
      'Fixing bugs on various services.',
    ]
  },
  {
    title: 'Modelling and Simulation Intern at DSTA',
    role: '',
    description: '',
    points: [
      'Designed and developed high fidelity simulation environments in Unity for training Reinforcement Learning agents.',
    ]
  }
]

const projects = [

]
