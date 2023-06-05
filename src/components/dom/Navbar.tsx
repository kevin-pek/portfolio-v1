import { useState } from "react"
import Menu from '/public/icons/menu.svg'
import Github from '/public/icons/github.svg'
import Linkedin from '/public/icons/linkedin.svg'
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
      <nav className='fixed top-0 z-50 mx-auto flex h-16 w-full flex-row items-center justify-between p-8'>
        <ul className='mx-auto hidden list-none flex-row gap-10 sm:flex'>
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
        {/* mobile navbar */}
        <div className='sm:hidden'>
          <Menu
            onClick={() => setToggle(!toggle)} />
          <div className={`${toggle ? 'block' : 'hidden'} bg-cold-900 absolute h-[50vh] w-[75vw]`}>
            <ul className='list-none flex-col items-center gap-10 sm:flex'>
              {navLinks.map((nav, i) => 
                <li key={i} className="h-24 p-4 text-2xl text-white">
                  <button onClick={() => { nav.onClick(); setToggle(false) }}>
                    {nav.text}
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <nav className='bottom-4 right-4 flex w-fit flex-col items-center sm:fixed'>
      </nav>
    </>
  )
}
