import Image from "next/image"
import spaceshipgame from '/public/img/spaceshipgame.gif'
import nbodysim from '/public/img/nbodysim.gif'
import { Tab, TabContent } from "../ui/Tab"
import { Timeline, Event, EventProps } from "../ui/Timeline"

export default function Experience() {
  return (
    <section className="relative bg-[#111]">
      {/* Triangle gradient */}
      <div className="flex w-full flex-row">
        <div className="from-cold-900 h-96 w-1/2 -translate-y-40 -skew-y-12 bg-gradient-to-b to-[#111]" />
        <div className="from-cold-900 h-96 w-1/2 -translate-y-40 skew-y-12 bg-gradient-to-b to-[#111]" />
      </div>
        
      <div className='-translate-y-80'>
        <div className="text-center text-white">
          <h1 className='mb-4 text-3xl font-extrabold sm:text-5xl'>My Work</h1>

          <div className="mb-8 flex flex-row justify-center gap-4">
            <div className="text-xl">Want a quick reference?<br />Download my resume!</div>
            <a
              target='_blank'
              href='kevin-resume.pdf'
              className='my-auto h-fit w-fit rounded-3xl border-white stroke-white p-2 hover:bg-gray-500'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
            </a>
          </div>
        </div>

        <Tab>
          <TabContent className="text-xl text-white" label="Experience">
            <section className="mx-auto mt-8 w-11/12 sm:w-3/4">
              <Timeline events={experiences} />
            </section>
          </TabContent>

          <TabContent className="text-xl text-white" label="Projects">
            <section className="mx-auto mt-8 w-11/12 sm:w-3/4">
              <ul>
                {projects.map((event, i) =>
                  <li className='mb-4 flex flex-row' key={i}>
                    <div className='hidden w-1/6 sm:block'>
                      <h1 className='p-4 text-right text-xl text-white'>{event.start.toLocaleDateString('default', { month: 'short', year: '2-digit' })} — {event.end.toLocaleDateString('default', { month: 'short', year: '2-digit' })}</h1>
                    </div>
                    <Event {...event} />
                  </li>
                )}
              </ul>
            </section>
          </TabContent>
        </Tab>

      </div>
    </section>
  )
}

const experiences: EventProps[] = [
  {
    title: 'Full Stack Developer/Research Assistant at NUS IORA',
    subtitle: 'Learning Platform for Intelligent Tutoring Systems using Multi Armed Bandits',
    description: 'Designed and developed a learning platform that uses a machine learning algorithms to recommend questions based on the trainee\'s profile data to maximise their learning. Features dashboards for analytics, quiz content, model and user management systems for trainers, and a learning dashboard and quiz interface for trainees.',
    points: [
      'Full stack development using React (MUI) and Express, written in Typescript.',
      'Implemented Multi Armed Bandit algorithms in python that uses empirical estimation of a trainee\'s learning progress to optimise the exploration/exploitation decision process.',
      'Deployed machine learning models using FastAPI.',
      'Deployed applications onto AWS EC2 using Docker Compose.',
      'Produced detailed API documentation according to the OpenAPI definition using Redocly.'
    ],
    start: new Date('Aug 2022'),
    end: new Date('May 2023')
  },
  {
    title: 'Full Stack Intern at Idemia',
    description: '',
    points: [
      'Developed application for microservice orchestration in Java using Spring Boot and Apache Camel.',
      'Wrote unit and integration tests using JUnit and Testcontainers.',
      'Fixing bugs on various services.',
    ],
    start: new Date('May 2022'),
    end: new Date('Aug 2022')
  },
  {
    title: 'Research Assistant at NUS IORA',
    subtitle: 'Learning Platform for Intelligent Tutoring Systems using Multi Armed Bandits',
    description: 'Developed minimum viable product for a learning platform utilising Multi Armed Bandit algorithms to recommend questions based on trainee\'s prodile data to maximise their learning.',
    points: [
      'Researched various options for developing machine learning driven applications such as Gradio and Open edX distributions.',
      'Refactored machine learning python notebook into a REST API using Flask.',
      'Deployed application onto Heroku.'
    ],
    start: new Date('April 2022'),
    end: new Date('May 2023')
  },
  {
    title: 'Modelling and Simulation Intern at DSTA',
    description: '',
    points: [
      'Designed and developed high fidelity simulation environments in Unity for training Reinforcement Learning agents.',
      'Conducted and optimised training process for AI agents.'
    ],
    start: new Date('Mar 2021'),
    end: new Date('Jun 2021')
  }
]

const projects: EventProps[] = [
  {
    title: 'Developer Student Club',
    subtitle: 'Backend Lead',
    description: 'Developed backend services for the nonprofit Mercy Relief.',
    skills: ['Typescript', 'Express', 'React', 'NextJs', 'Material UI'],
    start: new Date('Aug 2022'),
    end: new Date('Dec 2023')
  },
  {
    title: 'Brainworks',
    description: 'Quiz application developed in Unity.',
    skills: ['Unity', 'C#'],
    start: new Date('Mar 2022'),
    end: new Date('May 2022')
  },
  {
    title: 'N Body Simulation in Unity',
    description: 'After getting acquainted with the Unity Game Engine from my internship at DSTA, I went on to create a simple N Body simulation in Unity. This process led me to learn about shaders, which I used to speed up computations and simulate large numbers of particles.',
    skills: ['Unity', 'C#'],
    start: new Date('Jul 2021'),
    end: new Date('Aug 2021'),
    children: <Image src={nbodysim} alt='n body simulation' />
  },
  {
    title: 'Space Shooter Game',
    description: 'This project marked the beginning of my journey into the world of Programming. Inspired by games that simulate realistic physics such as War Thunder, I attempted to create a 2D space battle game using simple geometric shapes and math formulas learnt in school.',
    skills: ['Lua', 'LOVE2D'],
    start: new Date('Nov 2016'),
    end: new Date('Jan 2017'),
    children: <Image src={spaceshipgame} alt='space shooter' />
  },
]
