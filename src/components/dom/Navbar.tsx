import { useState } from "react"
import Menu from '/public/icons/menu.svg'
import Github from '/public/icons/github.svg'
import Linkedin from '/public/icons/linkedin.svg'
import Close from '/public/icons/close.svg'
import './navbar.css'

const navLinks = [
  {
    text: 'About',
    onClick: () => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
  },
  {
    text: 'Skills',
    onClick: () => document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' })
  },
  {
    text: 'Work',
    onClick: () => document.querySelector('#work').scrollIntoView({ behavior: 'smooth' })
  }
]

export default function Navbar() {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <div id='bg' className='fixed top-0 z-40 hidden h-16 w-full sm:block' />
      <nav className='fixed top-0 z-50 mx-auto hidden h-16 w-full flex-row items-center justify-between p-8 sm:flex'>
        <ul className='mx-auto flex list-none flex-row gap-10'>
          {navLinks.map((nav, i) => 
            <li key={i} className='text-gray-300 duration-500 hover:text-white'>
              <button onClick={nav.onClick}>{nav.text}</button>
            </li>
          )}
          <li className='flex flex-row gap-3'>
            <a href='https://github.com/kevin-pek' target="_blank">
              <Github className='h-6 w-6 fill-gray-300 object-contain duration-500 hover:fill-white' />
            </a>
            <a href='https://www.linkedin.com/in/kevin-pek-yt' target="_blank">
              <Linkedin className='h-6 w-6 fill-gray-300 object-contain duration-500 hover:fill-white' />
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile navbar */}
      <div className={`${toggle ? 'fixed' : 'hidden'} left-0 top-0 z-40 h-screen w-screen bg-gray-900 opacity-90 sm:hidden`}>
        <ul className='flex h-full list-none flex-col items-center justify-evenly gap-10 text-center'>
          {navLinks.map((nav, i) => 
            <li key={i} className="p-4 text-2xl text-white">
              <button onClick={() => { nav.onClick(); setToggle(false) }}>
                {nav.text}
              </button>
            </li>
          )}

          {/* Social media links */}
          <li className='flex flex-row justify-center gap-5'>
            <a href='https://github.com/kevin-pek' target="_blank">
              <Github className='h-8 w-8 fill-white object-contain' />
            </a>
            <a href='https://www.linkedin.com/in/kevin-pek-yt' target="_blank">
              <Linkedin className='h-8 w-8 fill-white object-contain' />
            </a>
          </li>

          <li className="">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-[36px] bg-gray-700 opacity-80"
              onClick={() => setToggle(false)}
            >
              <Close />
            </button>
          </li>
        </ul>
      </div>
      <button
        className='fixed bottom-4 right-4 sm:hidden bg-cold-900 p-4 rounded-[36px]'
        onClick={() => setToggle(true)}
      >
        <Menu />
      </button>
    </>
  )
}
