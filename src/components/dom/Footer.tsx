import Github from '/public/icons/github.svg'
import Linkedin from '/public/icons/linkedin.svg'

export default function Footer() {
  return (
    <section className="relative py-24 mx-auto w-2/3">
      <div className='flex flex-col'>
        <div className="mb-4 text-4xl sm:text-5xl font-extrabold text-gray-300">Get In Touch</div>
        <div className="mb-4 text-xl text-gray-300">kevinpekyt@gmail.com</div>
        <li className='flex flex-row gap-3'>
          <a
            href='https://github.com/kevin-pek'
            target="_blank"
            className='fill-gray-300 duration-500 hover:fill-white'
          >
            <Github className='h-6 w-6' />
          </a>
          <a
            href='https://www.linkedin.com/in/kevin-pek-yt'
            className='fill-gray-300 duration-500 hover:fill-white'
            target="_blank"
          >
            <Linkedin className='h-6 w-6' />
          </a>
        </li>
      </div>
    </section>
  )
}
